# Voice セクション「もっと見る」ボタン追加

## 概要
LP の `TestimonialsSection`（Voice 4 つの直下）に、賃貸／売買それぞれの「お客様の声一覧ページ」へ遷移するボタンを 2 つ横並びで追加する。

## 背景・目的
- 現状、お客様の声を読んだ閲覧者がもっと多くの声を読みたくても遷移導線がない。
- 賃貸／売買それぞれにレビュー一覧ページ (`/review/rental`, `/review/sales`) は既に存在しており、そこへ誘導する。

## 仕様

### 配置
- `src/components/sections/TestimonialsSection.vue` 内、Voice 4 ブロックの下（最後の divider のさらに下）に配置。
- 2 つのボタンを **横並び**（半分ずつ）で表示。

### ボタン
| 表示 | リンク先 |
| --- | --- |
| 賃貸のお客様の声を<br>もっと見る | `/review/rental` |
| 売買のお客様の声を<br>もっと見る | `/review/sales` |

- 内部遷移なので `<router-link>` を使用。
- 2 行表示で揃える。

### スタイル
- Voice の見出しと統一感を出すため、ブラウン×ピンクのグラデーション（`linear-gradient(90deg, #5c442a 0%, #ee7f81 100%)`）を使用。
- フォント：`$font-mincho` / `$font-weight-semibold`
- 文字色：`$white`
- ボタン形状：角丸（`border-radius: 6px` 程度）、左右に内側余白
- 横並び：`display: flex; gap: 10px;` で 2 つを均等配置（`flex: 1`）

## 動作確認ポイント
- `npm run serve` で LP を表示し、Voice 4 つの下に 2 つのボタンが横並びで表示されること
- 各ボタンをクリックして `/review/rental` / `/review/sales` に遷移できること
- スマホ幅（375px）で文字が崩れず、適切に折り返されること

## 影響範囲
- `src/components/sections/TestimonialsSection.vue` の編集のみ
- 既存の他セクション・ロジックには影響なし
