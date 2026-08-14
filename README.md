# lawfirm-admin

**`lawfirm-admin` は法律事務所の管理業務（案件 / 顧客）のための edge BFF である。**
デプロイされる実体は Cloudflare Worker 1 本で、`POST /xrpc/<nsid>` を受けて
AgentGateway の MCP router へ JSON-RPC `tools/call` として転送する。

**この repo は業務ロジックを持たない。** 案件・顧客の実際の処理は MCP router の
向こう側（pod-side LangServer）にあり、ここに在るのは転送と CORS と静的ページだけ
である。案件データのスキーマ・権限・保存はこの repo を読んでも分からない。

- 名乗り: `lawfirm-admin`（`kotodama.jsonld` の `@id` は `did:web:lawfirm-admin.etzhayyim.com`）
- 出自: `etzhayyim/root` の `60-apps/etzhayyim-project-lawfirm-admin` から抽出（`migration.edn`）
- 運用手順: **[`docs/operator-quickstart.md`](docs/operator-quickstart.md)**（実際に踏める形で書いてある）

## デプロイされるのはどれか

**`wrangler.jsonc` の `main` が正本**であり、それは SvelteKit の adapter 出力を指す:

```
appview/lawfirm-admin-mcp-component/
  wrangler.jsonc                              main: svelte/.svelte-kit/cloudflare/_worker.js
  svelte/src/routes/xrpc/[...path]/+server.ts ← 実際に配られる XRPC 経路
  svelte/src/routes/+page.svelte              ← 実際に配られるトップページ
  src/app.ts                                  ← 配られない（下記）
```

`svelte/.svelte-kit/` は生成物で commit されていないので、**`npm run build` を通す前に
`wrangler deploy` は成立しない**（`main` が指すファイルが存在しない）。

## 実測した振る舞い（2026-08-15、`wrangler dev --local` で確認）

| リクエスト | 結果 |
|---|---|
| `GET /` | 200 `text/html`（`<title>lawfirm-admin-mcp-component</title>`） |
| `OPTIONS /xrpc/<nsid>` | 204 + CORS（`POST,OPTIONS` / `max-age=86400`） |
| `POST /xrpc/<nsid>` | 200。router へ `{"jsonrpc":"2.0","method":"tools/call","params":{"name":<nsid>,"arguments":<body>}}` を送り、応答の `result.structuredContent` を `cache-control: no-store` で返す |
| `GET /xrpc/<nsid>` | **405**（POST と OPTIONS しか無い） |
| `GET /health` | **404**（実装は `src/app.ts` にあるが配られていない） |

再現手順は `docs/operator-quickstart.md` の §3–§4。

## 既知の欠陥（推測ではなく実測。直す前にこれを読む）

1. **`src/app.ts` はデプロイ経路に無い。** 参照しているのは
   `SUBSTRATE-PORT-PENDING.md` の散文だけで、import は 1 箇所も無い。上表の
   `/health` 404 と `GET /xrpc` 405 がその証拠 —— どちらも `src/app.ts` は実装して
   いる。`DISPATCHER_URL` / `DISPATCHER_INTERNAL_SECRET` を設定しても効かない
   （`wrangler.jsonc` の `vars` にも無い）。**この repo を「dispatcher secret を
   持つ proxy」として読まない。**

2. **edge は nsid を検査しない。** `+server.ts` は `/xrpc/` 配下の**任意の** nsid を
   router へ転送する。`APP_CAPABILITIES` / `kotodama.jsonld` が挙げる 8 メソッド
   （`createCase` `updateCase` `listCases` `getCase` `createClient` `updateClient`
   `listClients` `getClient`）は**宣言であって強制ではない** —— 実測で
   `POST /xrpc/com.example.totally.unrelated` がそのまま router に届いた。
   許可判定は MCP router 側にある。ここに allowlist があると仮定しない。
   （`src/app.ts` は `NSID_PREFIX` で弾いていたが、上記のとおり配られていない。）

3. **`npm run typecheck` は壊れている。** `tsc --noEmit` を呼ぶが
   `appview/lawfirm-admin-mcp-component/tsconfig.json` が無いため、tsc は入力を
   見つけられずヘルプを吐いて **exit 1** で終わる（型エラーではない）。
   型を見たいなら `svelte/` 側の `npm run check`（`svelte-check`）を使う。
   1 と絡むので「tsconfig を足す」で閉じない —— 検査対象になる `src/app.ts` の
   処遇が先に決まる必要がある。

4. **`test/lawfirm-admin.test.ts` は `expect(true).toBe(true)` 1 本。** 緑だが
   何も守っていない。「テストが通った」をこの repo の健全性の根拠にしない。

5. **`SUBSTRATE-PORT-PENDING.md` の未了項目は未了のまま**（`+server.ts` の router
   ホスト、`@etzhayyim/kotodama-*` パッケージ名）。同ファイルの一部の記述は
   置換の結果 `etzhayyim.com → etzhayyim.com` のように**同じ値の左右**になって
   おり、何から何へ移したのかが読み取れない。

## 境界（近い repo との違い）

`cloud-itonami` には同型の `*-mcp-component` appview が複数ある。この repo が
所有するのは **lawfirm-admin という 1 つの edge BFF とその静的ページだけ**で、
MCP router 本体・LangServer・案件データのスキーマは所有しない。
