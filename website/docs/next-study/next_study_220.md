# 第220章：本番環境の環境変数（管理のコツ）🔐

本番に出した瞬間に「あれ…動かない🥺」が起きやすい原因อันดับ1が、**環境変数の設定漏れ**です…！なのでこの章は、サクッと“事故らない型”を作っていくよ〜🧯💨

---

## 1) 環境変数ってなに？（超ざっくり）🧃

**コードに書きたくない値**を、外から渡すしくみだよ👇

* DBの接続文字列（`DATABASE_URL`）🗄️
* 認証の秘密鍵（`AUTH_SECRET`）🔑
* 外部APIキー（`STRIPE_SECRET_KEY`）💳

Next.jsは `.env*` を自動で読み込んで `process.env` に入れてくれるよ（しかも `.env` は基本コミットしないのが正解！）([Next.js][1])

---

## 2) まずはこれだけ覚えて！本番の3ルール🥇🥈🥉

### ルール①：秘密は `NEXT_PUBLIC_` を付けない🙅‍♀️🚫

* `NEXT_PUBLIC_` が付いたものは**ブラウザに配られるJSに埋め込まれる**（＝見ようと思えば見える）よ！([Next.js][1])
* 秘密（トークン/DBパスワード等）には **絶対つけない**でね🫣

### ルール②：Vercelで値を変えたら“再デプロイ”が必要🔁🚀

Vercelは「環境変数の変更 = 既存デプロイには反映されない」タイプ！
**変更したら再デプロイ**しないと古い値のままです😵‍💫([Vercel][2])

### ルール③：環境（Production/Preview/Development）を分ける🧠🧩

Vercelは環境変数を **Production / Preview / Development** に分けて設定できるよ🧺

* Production：本番URL用🌍
* Preview：PRや別ブランチの確認用👀
* Development：ローカル開発用🧑‍💻
  （Previewはブランチごと上書きもできる！）([Vercel][3])

---

## 3) 図で理解：どこで読めるの？🌐🧊

![env_vars](./picture/next_study_220_env_vars.png)

```mermaid
flowchart LR
  subgraph Browser["ブラウザ（ユーザーのPC）🖥️"]
    CC["Client Component"] --> NP["NEXT_PUBLIC_ だけ読める🌱"]
  end

  subgraph Server["サーバー（Node/Edge）🖧"]
    SC["Server Component / Route Handler / Server Action"] --> SV["秘密の環境変数も読める🔐"]
  end

  CC -->|"fetchで呼ぶ📡"| SC
```

ポイントはこれ👇

* **秘密はサーバー側でだけ使う**（Route Handler / Server Action など）🔐
* ブラウザに必要な設定だけ `NEXT_PUBLIC_` 🌱([Next.js][1])

---

## 4) ローカル（Windows）での基本：`.env.local` を置く📄✨

プロジェクト直下（`package.json` と同じ場所）に作るよ📁
例：`.env.local`

```env
# 秘密（サーバーだけで使う）🔐
DATABASE_URL="postgresql://user:pass@host:5432/db"
AUTH_SECRET="super-secret"

# 公開OK（ブラウザでも使う）🌱
NEXT_PUBLIC_APP_NAME="Campus Todo"
```

そして、Next.jsの読み込み優先順位はざっくりこう（上が強い）👇
`process.env` → `.env.development.local` → `.env.local` → `.env.development` → `.env` みたいな順番だよ🧠
（環境によって `.env.production.*` も同じノリ）([Next.js][1])

---

## 5) 本番（Vercel）での正しい置き場所🧰🌍

### ✅ 設定場所

Vercelの **Project Settings → Environment Variables** に入れるよ🔧
ここで **Production / Preview / Development** を選べる！([Vercel][3])

### ✅ ローカルに同期したいとき（便利🥹）

Vercel CLIで Development の環境変数を手元に落とせるよ👇（PowerShellでOK）

```powershell
npm i -g vercel
vercel login
vercel env pull
```

このコマンドで `.env` が作られる（or 更新される）よ〜🧃([Vercel][3])
（運用的には `.env.local` に寄せたい場合、作られた `.env` を参考にして移してもOK👌）

---

## 6) 実装ミニ例：秘密は漏らさず確認する🕵️‍♀️🔐

### 6-1) Route Handlerで “設定されてるかだけ” 返す（安全）🧯

`app/api/env-check/route.ts`

```ts
import { NextResponse } from "next/server";

export async function GET() {
  // 秘密は「値そのもの」を返さない！🙅‍♀️
  const hasAuthSecret = Boolean(process.env.AUTH_SECRET);

  return NextResponse.json({
    ok: true,
    hasAuthSecret,
    appName: process.env.NEXT_PUBLIC_APP_NAME ?? "Unknown",
  });
}
```

### 6-2) Client Componentで公開変数だけ表示🌱

`app/_components/AppName.tsx`

```tsx
"use client";

export function AppName() {
  return <p>アプリ名：{process.env.NEXT_PUBLIC_APP_NAME}</p>;
}
```

※ `NEXT_PUBLIC_` は **build時に埋め込まれて固定**されるから、値を変えたら再ビルド/再デプロイが基本だよ🔒([Next.js][1])

---

## 7) ありがち事故あるある🐣💥（即解決つき）

* **本番だけ `undefined`** 👉 Vercel側のEnvironment Variablesに入ってない or 環境（Production/Preview）を間違えた😵‍💫([Vercel][3])
* **値を変えたのに反映されない** 👉 変更後に再デプロイしてない🔁([Vercel][2])
* **秘密がフロントに出ちゃった** 👉 変数名に `NEXT_PUBLIC_` を付けてしまった😱([Next.js][1])
* **`.env` をGitに上げちゃった** 👉 すぐ削除＆キーをローテ（再発行）🔑💦（`.env*` は基本コミットしない）([Next.js][1])

---

## 8) 運用がラクになる “管理の型” 🧘‍♀️🧩

* ✅ **`.env.example` を置く**（値はダミーでOK）

  * 「必要な変数リスト」になる📋✨
* ✅ 命名をそろえる（例）

  * 公開：`NEXT_PUBLIC_XXX` 🌱
  * 秘密：`XXX_SECRET` / `XXX_TOKEN` 🔐
* ✅ Vercelにはシステム環境変数もある（URLや環境名など）

  * `VERCEL_ENV` とか `VERCEL_URL` とか🧠([Vercel][4])

---

## 9) ミニ演習（10分）⏱️🌸

1. `.env.local` に `AUTH_SECRET` と `NEXT_PUBLIC_APP_NAME` を入れる🔐🌱
2. `app/api/env-check/route.ts` を作る🧩
3. `http://localhost:3000/api/env-check` を開いて `hasAuthSecret: true` を確認✅
4. VercelのEnvironment Variablesに同じキーを入れる（Productionも忘れずに）🔧([Vercel][3])
5. **再デプロイ**して本番URLでも同じJSONが返るか確認🚀([Vercel][2])

---

ここまでできたら、本番の「設定ミスで泣く😭」がかなり減るよ〜！🔐✨

[1]: https://nextjs.org/docs/app/guides/environment-variables "Guides: Environment Variables | Next.js"
[2]: https://vercel.com/docs/environment-variables/managing-environment-variables "Managing environment variables"
[3]: https://vercel.com/docs/environment-variables "Environment variables"
[4]: https://vercel.com/docs/environment-variables/system-environment-variables "System environment variables"
