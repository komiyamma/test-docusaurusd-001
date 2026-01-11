# 第27章：ルート追加：`app/about/page.tsx` を作る📄

この章は「新しいページ（URL）を増やす」超基本だよ〜！😆🧡
Next.js（App Router）は **フォルダとファイルを置くだけでURLが生まれる** のが気持ちいいポイント🌱

---

## 🎯 この章のゴール

* `/about` というURLのページを作れるようになる🚪✨
* 「URL ↔ ファイルの場所」の対応がわかる🧭

---

## 🗺️ しくみ：URLはどのファイル？（図で覚える）👀

![New Route Creation](./picture/next_study_027_new_route.png)

```mermaid
flowchart LR
  A["ブラウザで /about にアクセス"] --> B["app/about/page.tsx を探す"]
  B --> C["見つかった！そのコンポーネントを表示"]
```

---

## ✅ 手順：`about` ページを追加しよう！📄💨

### 1) フォルダとファイルを作る📁

プロジェクトのルートで、次を作ってね👇

* `app/about/page.tsx`

（PowerShellで作るならこんな感じ！🪄）

```bash
mkdir app\about
notepad app\about\page.tsx
```

---

### 2) `app/about/page.tsx` に中身を書く✍️

まずはシンプルにこれでOK！🌸

```tsx
export default function AboutPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>About ページだよ〜！🌷</h1>
      <p>Next.jsは「置くだけルーティング」でページが増やせるよ✨</p>
    </main>
  );
}
```

ポイント👇

* **`export default` が必須**だよ！ないとページとして表示できないことがあるよ〜😵‍💫
* ここでは `"use client"` は **いらない**（ページは基本サーバー側でOK）🧊

---

## 🔎 動作確認しよう！🌈

開発サーバーが起動してる前提で…

```bash
npm run dev
```

ブラウザでここへアクセス👇

* `http://localhost:3000/about`

表示されたら成功〜！🎉🎉🎉

---

## 🧭 ついでに：ファイル構成を「地図」で見る👀🗺️

こんな状態になっていればOK！

```txt
app/
  page.tsx           ←  /（トップ）
  about/
    page.tsx         ←  /about（今回）
```

---

## 🥺 よくあるミス集（あるある）🧯

* `app/about.tsx` を作っちゃった → ❌（App Routerは **フォルダ**が基本だよ）
* `pages/about.tsx` を作っちゃった → ❌（今回は `app/` を使う流れだよ）
* `page.tsx` の名前が違う（例：`About.tsx`）→ ❌（**`page.tsx` 固定**）
* `export default` を忘れた → ⚠️（表示できなくて泣くやつ🥲）

---

## 📝 ミニ練習（3分）⌛✨

`/about` に、次の2つを足してみよう💡

1. 好きな絵文字を増やす（3個以上！）😍
2. 「このサイトでやりたいこと」を箇条書きで書く📌

例：

```tsx
export default function AboutPage() {
  return (
    <main style={{ padding: 24 }}>
      <h1>About ページだよ〜！🌷✨💖</h1>
      <p>このサイトでやりたいこと👇</p>
      <ul>
        <li>プロフィールを載せる😊</li>
        <li>作品をまとめる📚</li>
        <li>お問い合わせを作る📮</li>
      </ul>
    </main>
  );
}
```

---

## ✅ まとめ（今日の勝ち）🏆

* `app/about/page.tsx` を作るだけで `/about` が増える🎉
* App Routerは **「フォルダ＝URLの区切り」**、**`page.tsx`＝ページ本体**📄✨

次の章で、ページが増えてきた時に「URLを変えずに整理する技」も出てくるよ〜📦💨
