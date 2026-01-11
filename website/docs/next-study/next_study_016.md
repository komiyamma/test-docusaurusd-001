# 第16章：ESLintの役目：未来の自分を守る盾🛡️

この章でできるようになること👇😊

* ESLintが「何を守ってくれるか」をイメージできる🧠💡
* `npm run lint`（または `next lint`）でチェックできる✅
* まずは“初期設定のまま”安全運転できる🚗💨

---

## 1) ESLintってなに？🤔🧹

ESLintは、ざっくり言うと…

**「バグになりやすい書き方」や「よくないクセ」を見つけて教えてくれる先生**だよ👩‍🏫✨
TypeScriptが「型のミス」を見つけるのに対して、ESLintは「書き方のミス」「事故りやすい癖」を見つける感じ🧠🛡️

Next.jsは、Next向けのおすすめESLint設定（`eslint-config-next`）を用意してくれてて、React/React Hooks/Next特有のルールもまとめて見てくれるよ✨ ([Next.js][1])

---

## 2) どんなミスを見つけてくれるの？🕵️‍♀️💥

よく助けられる例👇（あるある多め😂）

* 使ってない変数が残ってる（お掃除忘れ）🧽
* `useEffect` の依存配列が怪しい（バグの温床）🧨
* Next.js的にNGな書き方（画像・リンク等）を注意してくれる📣
* 条件分岐で「たまたま動いてる」危険な書き方を警告⚠️

「動いたからOK！」ってしがちなところを、未来の自分のために止めてくれるのがESLintだよ〜🫶🛡️

---

## 3) Next.jsのESLintはどう動く？（ざっくり図解）🗺️✨

![ESLint Shield](./picture/next_study_016_eslint_shield.png)

```mermaid
flowchart LR
  A["コードを書く👩‍💻"] --> B["ESLintチェック🔍"]
  B -->|"問題なし🎉"| C["安心してコミット✅"]
  B -->|"警告/エラー⚠️"| D["どこが危ないか表示🧯"]
  D --> E["直す / 直さないを判断🧠"]
  E --> B
```

---

## 4) まずやること：lintを走らせてみよう💨✅

ターミナル（PowerShellでもOK）で👇

```bash
npm run lint
```

プロジェクトによっては `next lint` がスクリプトに入ってることもあるよ（中身は同じ気持ちでOK）😊
Next.jsはESLintの導線を公式で用意してるよ ([Next.js][1])

---

## 5) 設定ファイルが2パターンあるかも！👀📄

最近の環境だと、プロジェクトによってどっちかがあるよ〜👇

* `eslint.config.mjs`（ESLintの新しめ方式 “flat config”）🆕
* `.eslintrc.json`（昔からある方式）📌

どっちでも大丈夫🙆‍♀️✨
ESLint v9以降は “flat config” が基本になってきて、設定の置き場所や書き方が変わってるよ〜って公式でも案内されてるよ ([ESLint][2])
（だから `eslint.config.*` を見る機会が増えがち！👀）

---

## 6) Next.jsでよく見る「extends」：`next/core-web-vitals` って？🫀✨

`.eslintrc.json` の場合、こんなのを見かけることがあるよ👇

```json
{
  "extends": "next/core-web-vitals"
}
```

これはNext.jsが用意してる「ちょい厳しめで、パフォーマンス的にも危ないのを強めに注意するセット」ってイメージでOK🛡️✨
Create Next Appで作った新しいアプリは、これが最初から入ってることが多いよ ([Next.js][3])

---

## 7) ミニ練習：わざと怒られてみよう😆⚡

### 練習①：使ってない変数（超あるある）🧽

どこか適当なファイルで👇

```ts
const unused = 123;
```

そのまま `npm run lint` すると、だいたい「使ってないよ〜」って言われるはず🙃

---

### 練習②：Next.jsっぽい注意（`<img>`）📸⚠️

どこかのコンポーネントで、試しに👇

```tsx
export default function Sample() {
  return <img src="/sample.png" alt="sample" />;
}
```

すると、環境によっては「Nextなら別のやり方があるよ〜」的な注意が出ることがあるよ📣
（“Next特有のルール”が動いてる証拠だね！✨） ([Next.js][1])

---

## 8) 「消す」より「意味を理解して判断」が最強👑🫶

ESLintの警告を見たときのおすすめムーブ👇

* **まず読む**👀：「これ、どんな事故を防いでる？」
* **直せるなら直す**🛠️：未来の自分が助かる
* **“意図的に無視”なら理由を残す**📝：後で見ても納得できるように

どうしても一時的に無視したいときは、ピンポイントで使うのがコツだよ（乱用は危険⚠️）😇
※コメント無視の挙動もESLint v9で細かく変化があるので、“最低限だけ” が安全〜 ([ESLint][4])

---

## まとめ：第16章のゴール🎯✨

* ESLintは **未来の自分を守る盾** 🛡️😊
* Next.jsは **Next/React/Hooks向けのESLintセット**を用意してくれてる✨ ([Next.js][1])
* まずは `npm run lint` を回す習慣がいちばん強い✅
* 設定ファイルは `eslint.config.mjs` or `.eslintrc.json` どっちでもOK（環境差あるよ〜）🧩 ([ESLint][2])

次は「パスエイリアス（`@/`）」で、フォルダ迷子を減らしてさらに快適になるよ〜🗺️✨

[1]: https://nextjs.org/docs/app/api-reference/config/eslint?utm_source=chatgpt.com "Configuration: ESLint"
[2]: https://eslint.org/docs/latest/use/configure/migration-guide?utm_source=chatgpt.com "Configuration Migration Guide"
[3]: https://nextjs.org/docs/14/app/building-your-application/configuring/eslint?utm_source=chatgpt.com "Configuring: ESLint"
[4]: https://eslint.org/docs/latest/use/migrate-to-9.0.0?utm_source=chatgpt.com "Migrate to v9.x - ESLint - Pluggable JavaScript Linter"
