# lawfirm-admin

**`lawfirm-admin` は法律事務所の管理業務（案件 / 顧客）のための edge BFF である。**
デプロイされる実体は Cloudflare Worker 1 本（静的アセット同梱）で、
`POST /xrpc/<nsid>` を受けて上流ディスパッチャへ転送する。

**この repo は業務ロジックを持たない。** 案件・顧客の実際の処理は edge の外にあり、
ここに在るのは転送と CORS と静的ページだけである。案件データのスキーマ・権限・
保存はこの repo を読んでも分からない。

- 名乗り: `lawfirm-admin`（`kotodama.jsonld` の `@id` は `did:web:lawfirm-admin.etzhayyim.com`）
- 出自: `etzhayyim/root` の `60-apps/etzhayyim-project-lawfirm-admin` から抽出（`migration.edn`）
- 運用手順: **[`docs/operator-quickstart.md`](docs/operator-quickstart.md)**（一部 2026-09-07 のこの
  移行で stale 化した節に注記済み。踏み直しは follow-up）

## デプロイされるのはどれか（2026-09-07 更新 — SvelteKit フロントは retire 済み）

**`wrangler.jsonc` の `main` が正本**であり、それは `src/app.ts`（プレーンな
Worker fetch handler）を指す:

```
appview/lawfirm-admin-mcp-component/
  wrangler.jsonc                main: ./src/app.ts / assets.directory: ./cljs/public
  src/app.ts                    ← /health, /_app/meta, /xrpc/<nsid> を処理する Worker 本体
  src/xrpc-mcp-router-proxy.ts  ← 旧 SvelteKit +server.ts の保存（配線されていない。下記）
  cljs/                         ← UI（reagent + re-frame + jp-go-dds、shadow-cljs ビルド）
  cljs/public/                  ← wrangler の assets binding が配る静的ファイル一式
```

`main` に手書きの fetch handler があっても、`assets` が設定されていて
`run_worker_first` が無い（このファイルには無い）場合、リクエストパスが
`cljs/public/` 内の実ファイルに一致すれば Cloudflare は Worker を呼ばずに
そのファイルを直接返す。`src/app.ts` が `env.ASSETS.fetch()` を呼んでいない
のはそのためで、バグではない（Worker が呼ばれるのは `/health` や `/xrpc/*` の
ようにアセットに一致しないパスだけ）。**ただしこれは wrangler のドキュメントに
基づく判断であり、`wrangler dev` で実際に叩いて確認してはいない**（このリポジトリの
UI 移行タスクの範囲外。§7 で確認してから deploy すること）。

### この移行で見つかった重要な事実 — 本番の転送先が変わっていた

`svelte/src/routes/xrpc/[...path]/+server.ts`（SvelteKit ルート）は、2026-08-15
時点で実際に配られていた実装で、`AGENTGATEWAY_MCP_ROUTER_URL`
（既定 `https://mcp.etzhayyim.com/xrpc/com.etzhayyim.mcp.message`）へ
JSON-RPC `tools/call` として転送し、nsid を検査しなかった（下記「既知の欠陥」
旧 1・2 が実測していた内容）。

**2026-09-05 の commit `9f071e8`（SvelteKit → cljs のフロント切替、本 UI 移行の
前段）が `wrangler.jsonc` の `main` を `svelte/.svelte-kit/.../_worker.js` から
`src/app.ts` に切り替えたことで、実際に配られる XRPC 転送の実装も切り替わった。**
`src/app.ts` は `DISPATCHER_URL`（既定 `https://dispatcher.etzhayyim.com`）へ
`x-internal-secret` ヘッダ付きで転送し、`NSID_PREFIX`
（`com.etzhayyim.lawfirmAdmin.`）で弾く——**旧 `+server.ts` とは転送先・認証・
nsid 検査のすべてが異なる別実装**である。この切替は SvelteKit 撤去のついでに
起きたもので、意図した仕様変更として文書化されていなかった。

このタスク（Svelte → cljs UI 移行）は `src/app.ts` を書き換えていない
（本文は 1 行も変更していない）——**ここに書いているのは「main が何を指すか」
の記録であって、その転送ロジックの当否の判断ではない。** どちらの転送先が
正しいかは製品判断で、人間が決めることとして意図的に残す（旧 `+server.ts` の
中身は `src/xrpc-mcp-router-proxy.ts` にそのまま保存してあり、必要ならいつでも
参照・再配線できる）。

## 実測した振る舞い（2026-08-15、`wrangler dev --local` で確認 — **SvelteKit 時代のもの。現行の `src/app.ts` エントリでは未検証**）

| リクエスト | 結果 |
|---|---|
| `GET /` | 200 `text/html`（`<title>lawfirm-admin-mcp-component</title>`） |
| `OPTIONS /xrpc/<nsid>` | 204 + CORS（`POST,OPTIONS` / `max-age=86400`） |
| `POST /xrpc/<nsid>` | 200。router へ `{"jsonrpc":"2.0","method":"tools/call","params":{"name":<nsid>,"arguments":<body>}}` を送り、応答の `result.structuredContent` を `cache-control: no-store` で返す |
| `GET /xrpc/<nsid>` | **405**（POST と OPTIONS しか無い） |
| `GET /health` | **404**（実装は `src/app.ts` にあるが、当時は main が svelte 側だったので配られていなかった） |

**この表は `svelte/` が main だった頃の実測で、現在の tree にはもう当てはまらない
可能性が高い**（`src/app.ts` が main になった今、`/health` は 404 ではなく実装どおり
200 JSON を返すはずだが、これは推測であって実測ではない）。再現手順（当時のもの）は
`docs/operator-quickstart.md` の §3–§4 にあるが、同じく svelte 前提で書かれている。
**現行エントリでの再実測は follow-up。**

## 既知の欠陥（推測ではなく実測。直す前にこれを読む——一部は 2026-09-07 時点で解消/変化済み）

1. ~~`src/app.ts` はデプロイ経路に無い。~~ **2026-09-05 の `9f071e8` で解消 —— 今は
   `src/app.ts` が `main` そのもの。** ただし上記のとおり、これにより転送先が
   `mcp.etzhayyim.com`（AgentGateway）から `dispatcher.etzhayyim.com` に変わっている。
   `DISPATCHER_URL` / `DISPATCHER_INTERNAL_SECRET` は今は効くはずだが
   `wrangler.jsonc` の `vars` にはまだ無い（default 値 `https://dispatcher.etzhayyim.com`
   に頼っている）。

2. **edge が nsid を検査するかどうかは、いまは `src/app.ts` の `NSID_PREFIX`
   （`com.etzhayyim.lawfirmAdmin.`）に依存する。** 旧 `+server.ts`（検査しない
   実装）はもう配られていない。**ただしこれも実測し直していない** ——
   `POST /xrpc/com.example.totally.unrelated` が 404 になるか、現行エントリで
   確認するまでは推測にとどめる。

3. **`npm run typecheck` は壊れている。** `tsc --noEmit` を呼ぶが
   `appview/lawfirm-admin-mcp-component/tsconfig.json` が無いため、tsc は入力を
   見つけられずヘルプを吐いて **exit 1** で終わる（型エラーではない）。
   `svelte/` 側の `npm run check` フォールバックはもう存在しない（`svelte/` 撤去済み）。
   `tsconfig.json` を足せば黙らせられるが、それは検査対象を決めてからの話
   （`src/app.ts` は正式にデプロイ経路になったので、型検査の対象にする価値は
   むしろ上がっている）。

4. **`test/lawfirm-admin.test.ts` は `expect(true).toBe(true)` 1 本。** 緑だが
   何も守っていない。「テストが通った」をこの repo の健全性の根拠にしない。
   （UI 側は `cljs/test/lawfirm_admin/app_test.cljs` に別途テストがある。こちらは
   db/sub の配線を実際に検査する。）

5. **`SUBSTRATE-PORT-PENDING.md` の未了項目は未了のまま**（旧 `+server.ts` の router
   ホスト、`@etzhayyim/kotodama-*` パッケージ名）。対象ファイルは
   `src/xrpc-mcp-router-proxy.ts` に移動した（配線されていない）。同ファイルの
   一部の記述は置換の結果 `etzhayyim.com → etzhayyim.com` のように**同じ値の左右**
   になっており、何から何へ移したのかが読み取れない（この移行では未修正）。

## UI（2026-09-07、SvelteKit から移行）

`cljs/` が reagent + re-frame + jp-go-dds（デジタル庁デザインシステム）による
single-page app。旧 `svelte/src/routes/+page.svelte`（アプリ情報を表示するだけの
静的スキャフォールド）の忠実な移植で、案件・顧客管理機能は追加していない
（`wrangler.jsonc` の `APP_CAPABILITIES` が挙げる 8 メソッドはまだ UI に無い）。
ビルドは `cljs/README` 相当の手順は無いが、`cljs/package.json` の `build` /
`release` / `test` / `watch` スクリプトを参照。

## 境界（近い repo との違い）

`cloud-itonami` には同型の `*-mcp-component` appview が複数ある。この repo が
所有するのは **lawfirm-admin という 1 つの edge BFF とその静的ページだけ**で、
上流ディスパッチャ本体・LangServer・案件データのスキーマは所有しない。
