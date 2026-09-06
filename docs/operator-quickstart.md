# operator quickstart — lawfirm-admin

**この手順は 2026-08-15 に最初から最後まで実際に踏んだ。** 出力はそのとき観測した
実物である。踏めなかった手順は「踏めない」と書いてある（§6）—— 書いてあるのに
動かないものを残さない。

実測に使った版: node v26.3.0 / npm 11.16.0 / wrangler 4.123.0 / nbb 1.4.210（macOS arm64）。

前提知識は [`../README.md`](../README.md) にある。特に **`src/app.ts` は配られない**
という 1 点を先に読んでおくこと —— 読まずにこの手順を踏むと `/health` が 404 で
返ってきた時点で「壊れている」と誤診する（壊れていない。実装が別の場所にある）。

> ⚠ **2026-09-07 追記 — 上記の前提はもう成り立たない。** `svelte/` は撤去され、
> `wrangler.jsonc` の `main` は `src/app.ts` を指すようになった（`../README.md` の
> 「デプロイされるのはどれか」節参照）。つまり **`src/app.ts` はもう配られていない
> ものではなく、配られる実体そのもの**である。この文書の §3（SvelteKit のビルド
> 手順）・§4（`AGENTGATEWAY_MCP_ROUTER_URL` を使った旧 `+server.ts` の動作確認）・
> §6 の `svelte/ 側の npm run check` は、すべて撤去済みの `svelte/` を前提にしており
> **もう踏めない**。以下は当時の実測として残すが、現行の `src/app.ts` エントリに
> 対する踏み直しは行っていない（このリポジトリの UI 移行タスクはフロントエンドの
> 置き換えが範囲で、`wrangler dev` を新たに走らせての再検証は含まない）。
> UI（`cljs/`）だけを見たいなら:
>
> ```bash
> cd appview/lawfirm-admin-mcp-component/cljs
> npm install
> npx shadow-cljs release app   # public/js/ に出力。public/index.html と合わせて静的に開ける
> npx shadow-cljs compile test && node out/tests.js
> ```

---

## 1. 取得

```bash
cd <superproject>/orgs/cloud-itonami/lawfirm-admin
# west 管理下。checkout は detached HEAD が正常
git log --oneline -1
```

以降のパスはすべて `appview/lawfirm-admin-mcp-component/` を基準にする。

```bash
cd appview/lawfirm-admin-mcp-component
```

## 2. テストを通す（何も変えていない状態で 1 度）

```bash
npm ci
npm test
```

実測:

```
added 65 packages, and audited 66 packages in 489ms

 Test Files  1 passed (1)
      Tests  1 passed (1)
   Duration  107ms
```

**この緑を健全性の根拠にしない。** 通っているのは
`test/lawfirm-admin.test.ts` の `expect(true).toBe(true)` 1 本だけで、
`src/xrpc-mcp-router-proxy.ts`（配線されていない）も `src/app.ts` も 1 行も
実行していない（README 既知の欠陥 4）。

## 3. デプロイされる成果物を作る

> ⚠ **STALE（2026-09-07）**: この節は撤去済みの `svelte/` を前提にしている。冒頭の追記を参照。

`wrangler.jsonc` の `main` は `svelte/.svelte-kit/cloudflare/_worker.js` を指すが、
これは生成物で commit されていない。**先に SvelteKit を build しないと
`wrangler deploy` は成立しない。**

```bash
cd svelte
npm install          # svelte/ には package-lock.json が無いので ci ではなく install
npm run build
```

実測（末尾）:

```
✓ built in 3.48s
> Using @sveltejs/adapter-cloudflare
  ✔ done
```

`main` が指す実体ができたことを確認する（**この確認を飛ばさない** —— build が
成功しても adapter の出力先が変われば `wrangler deploy` は別の理由で落ちる）:

```bash
cd ..
ls -l svelte/.svelte-kit/cloudflare/_worker.js
ls   svelte/.svelte-kit/cloudflare/client
```

実測: `_worker.js` が 4,335 bytes、`client/` に `_app` と `_headers`。

> 重い build なので、この workspace では resource governor を通す:
> `node <superproject>/scripts/resource-guard.mjs run build -- npm run build`

## 4. ローカルで実物を叩く

> ⚠ **STALE（2026-09-07）**: この節は撤去済みの `svelte/` を前提にしている。冒頭の追記を参照。

**production の MCP router に触らずに**振る舞いを見る。まず echo を 1 本立てる
（`nbb` を使う。この workspace は運用スクリプトに `.sh` / `.mjs` を新規に置かない）:

```clojure
;; /tmp/echo-probe.cljs
(ns echo-probe (:require ["node:http" :as http]))
(def srv (.createServer http (fn [req res]
  (let [chunks (atom "")]
    (.on req "data" (fn [c] (swap! chunks str c)))
    (.on req "end" (fn []
      (println (js/JSON.stringify (js/JSON.parse @chunks) nil 2))
      (.writeHead res 200 #js {"content-type" "application/json"})
      (.end res (js/JSON.stringify
                  #js {:jsonrpc "2.0" :id 1
                       :result #js {:structuredContent #js {:cases #js [] :probe true}}}))))))))
(.listen srv 8798 "127.0.0.1" (fn [] (println "echo on 8798")))
```

```bash
nbb /tmp/echo-probe.cljs &
```

router を echo に向けて worker を起動する（`--var` が `wrangler.jsonc` の
`AGENTGATEWAY_MCP_ROUTER_URL` を上書きする）:

```bash
PATH="$PWD/svelte/node_modules/.bin:$PATH" \
  wrangler dev --local --port 8799 --ip 127.0.0.1 \
    --var AGENTGATEWAY_MCP_ROUTER_URL:http://127.0.0.1:8798
```

`[wrangler:info] Ready on http://127.0.0.1:8799` が出たら叩く:

```bash
curl -s -o /dev/null -w "%{http_code}\n" http://127.0.0.1:8799/                    # 200
curl -s -i -X OPTIONS http://127.0.0.1:8799/xrpc/com.etzhayyim.lawfirmAdmin.listCases | head -5
curl -s -X POST http://127.0.0.1:8799/xrpc/com.etzhayyim.lawfirmAdmin.listCases \
  -H 'content-type: application/json' -d '{"status":"open"}'
```

実測 —— curl 側:

```
200
HTTP/1.1 204 No Content
Access-Control-Allow-Origin: *
access-control-allow-headers: content-type,authorization
access-control-allow-methods: POST,OPTIONS
access-control-max-age: 86400

{"cases":[],"probe":true}
```

実測 —— echo 側（**BFF が組み立てた JSON-RPC がそのまま見える**）:

```json
{
  "jsonrpc": "2.0",
  "id": "e2562fa7-2f4e-413f-bca2-d372d3f48a99",
  "method": "tools/call",
  "params": {
    "name": "com.etzhayyim.lawfirmAdmin.listCases",
    "arguments": { "status": "open" }
  }
}
```

読み方: **URL の nsid が `params.name` に、body がまるごと `params.arguments` に入る。**
返ってきた `result.structuredContent` だけが `cache-control: no-store` で client に
返る（`result` そのものではない）。

## 5. edge が nsid を検査しないことを自分で確かめる

> ⚠ **STALE（2026-09-07）**: この節は撤去済みの `svelte/` を前提にしている。冒頭の追記を参照。

README の既知の欠陥 2 は、この 1 コマンドで再現する:

```bash
curl -s -o /dev/null -w "%{http_code}\n" -X POST \
  http://127.0.0.1:8799/xrpc/com.example.totally.unrelated \
  -H 'content-type: application/json' -d '{}'
```

実測: **200**。echo 側に `"name": "com.example.totally.unrelated"` が届く。
`APP_CAPABILITIES` の 8 メソッドに無い、prefix すら違う nsid が素通りする。
**「edge が絞っている」を前提にした運用判断をしない。** 絞っているのは router 側。

片付け:

```bash
pkill -f "wrangler dev --local --port 8799"
pkill -f echo-probe.cljs
```

**この repo に `.gitignore` は無い。** §2–§4 を踏むと以下が untracked として残る
ので、commit する前に消す（実測: `git status` に 4 件出る）:

```
appview/lawfirm-admin-mcp-component/node_modules/
appview/lawfirm-admin-mcp-component/svelte/node_modules/
appview/lawfirm-admin-mcp-component/svelte/.svelte-kit/
appview/lawfirm-admin-mcp-component/.wrangler/
appview/lawfirm-admin-mcp-component/svelte/package-lock.json   ← §3 の npm install が作る
```

最後のものを commit すると `svelte/` の依存解決が固定され、
「lock が無いので `install`」という §3 の前提が変わる。**意図せず入れない。**

## 6. 踏めない手順（書いてあるが動かない）

```bash
npm run typecheck        # exit 1
```

`tsc --noEmit` を呼ぶが `appview/lawfirm-admin-mcp-component/tsconfig.json` が
存在しないので、tsc は入力を見つけられず**ヘルプを出力して** exit 1 する。
型エラーではない。型を見たいなら（**2026-09-07 時点で撤去済み。もう使えない**）:

```bash
cd svelte && npm run check      # svelte-kit sync && svelte-check（svelte/ は無い）
```

`tsconfig.json` を足せば黙らせられるが、**それは直したことにならない** ——
2026-09-07 現在 `src/app.ts` は `main` そのもの（配られている）なので、型検査の
対象にする価値はむしろ上がっている。tsconfig を足すこと自体は今回のタスク
（UI 移行）の範囲外として見送った（README 既知の欠陥 3）。

## 7. デプロイ

この workspace の恒久承認により agent 判断で deploy してよいが、順序を守る:

1. `git fetch origin && git merge --ff-only origin/main`
   （PreToolUse hook `wrangler-deploy-main-sync-guard.cljs` が遅れた checkout からの
   `wrangler deploy` を deny する。`--env <name>` と `--dry-run` は対象外）
2. §2 を通す。UI（`cljs/`）を変更したなら
   `cd appview/lawfirm-admin-mcp-component/cljs && npm install && npx shadow-cljs release app`
   で `public/js/` を再生成する（§3 は撤去済みの `svelte/` 前提なので使わない）
3. `wrangler deploy`

deploy 先は `wrangler.jsonc` の `routes` —— `lawfirm-admin.etzhayyim.com/*` と
`ujv6oh9s.etzhayyim.com/*`（zone `etzhayyim.com`）。**共有ゾーンなので、
このリポジトリの checkout が古いまま deploy すると他セッションの変更を巻き戻す。**
