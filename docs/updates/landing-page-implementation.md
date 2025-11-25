# ランディングページ実装計画

## 概要
pet-chintai（ペット可賃貸）のランディングページを実装する。

## 前提条件
- Figmaデザインを参照して実装を進める
- 各Phase完了後にユーザーへ動作確認を促す
- 動作確認完了後にコミットを行う

## Figmaデザイン
- メインデザイン: https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3140&m=dev

---

## Phase 1: カラー・フォントサイズの共通化

### 目的
Figmaデザインを分析し、使用しているカラーとフォントサイズを`_variables.scss`に共通化する。

### Figma変数定義（取得済み）

**カラー:**
| 変数名 | 値 | 用途 |
|--------|------|------|
| 白 | #FFFFFF | 背景、テキスト |
| テキスト | #5C442A | メインテキストカラー（ブラウン） |
| 強調 | #F29945 | アクセントカラー（オレンジ） |
| ベース2 | #FFF291 | 背景アクセント（イエロー） |

**Figmaで使用されている追加カラー:**
| カラー | 用途 |
|--------|------|
| #F7D3BC | セクション背景（ピンクベージュ） |
| #FB6E71 / #EE4548 | グラデーション（ピンク系、見出し強調） |
| #FF820D / #F25608 | グラデーション（オレンジ系） |
| #FF9035 | 来店予約ボタン |
| #24E567 | LINE相談ボタン（グリーン） |
| #774B35 | サブテキスト |
| #FFBBC5 | SNSセクション背景（ピンク） |

**フォント定義:**
| 変数名 | フォント | サイズ | ウェイト | 行高 |
|--------|----------|--------|----------|------|
| 26_s | Shippori Mincho | 26px | SemiBold (600) | 40px |
| 16_s | Shippori Mincho | 16px | SemiBold (600) | 24px |
| 12_s | Shippori Mincho | 12px | Regular (400) | 20px |
| 16_m_go | Gothic A1 | 16px | Medium (500) | 24px |
| 14_m_go | Gothic A1 | 14px | Medium (500) | 22px |
| 13_m_go | Gothic A1 | 13px | Medium (500) | 20px |
| 12_m_go | Gothic A1 | 12px | Medium (500) | 18px |

**追加フォントサイズ（Figmaで使用）:**
- 11px: フッターコピーライト
- 15px: 小見出し
- 17px: ポイント強調
- 18px: STEP番号
- 20px: 中見出し
- 22px: ボタンテキスト、サブ見出し
- 24px: 見出し
- 32px: 大見出し
- 40px: セクションタイトル
- 52px: ポイント番号（01, 02...）
- 56px: 大ポイント番号

### 現在の定義（`src/assets/styles/_variables.scss`）

```scss
// colorの定義
$primary: #F88658;
$secondary: #876050;
$secondaryOpacity: rgba(135, 96, 80, 0.3);
$background: #F9F5F2;
$backgroundCream: #faf4dc;
$backgroundYellow: #fce797;
$footer: #FDFAEF;
$text: #876050;
$white: #ffffff;

// font sizeの定義
$xs: 12px;
$sm: 14px;
$md: 16px;
$lg: 18px;
$x: 22px;
$xl: 24px;
$xxl: 44px;

// font familyの定義
$font-main: 'Helvetica Neue', sans-serif;
$font-mincho: 'Shippori Mincho', serif;
$font-gothic: 'Zen Kaku Gothic New', sans-serif;
```

### 追加が必要な変数

**カラー:**
```scss
// Figmaデザインから追加
$text-brown: #5C442A;        // メインテキスト
$text-brown-light: #774B35;  // サブテキスト
$accent-orange: #F29945;     // 強調オレンジ
$accent-pink: #FB6E71;       // ピンク（グラデーション用）
$accent-pink-dark: #EE4548;  // ピンク濃い（グラデーション用）
$background-pink: #F7D3BC;   // セクション背景ピンク
$background-pink-light: #FFBBC5; // SNSセクション背景
$btn-orange: #FF9035;        // 来店予約ボタン
$btn-green: #24E567;         // LINE相談ボタン
$footer-bg: #5C442A;         // フッター背景
```

**フォントサイズ:**
```scss
// Figmaデザインから追加
$font-xxs: 11px;
$font-xs: 12px;
$font-sm: 13px;
$font-md: 14px;
$font-base: 15px;
$font-lg: 16px;
$font-xl: 17px;
$font-2xl: 18px;
$font-3xl: 20px;
$font-4xl: 22px;
$font-5xl: 24px;
$font-6xl: 26px;
$font-7xl: 32px;
$font-8xl: 40px;
$font-9xl: 52px;
$font-10xl: 56px;
```

**フォントファミリー:**
```scss
// Gothic A1を追加
$font-gothic-a1: 'Gothic A1', sans-serif;
```

### 作業内容
1. `_variables.scss`にカラー変数を追加
2. `_variables.scss`にフォントサイズ変数を追加
3. `_variables.scss`にフォントファミリーを追加
4. 必要に応じて`_mixins.scss`にグラデーションミックスインを追加

### 動作確認
- 変数が正しく定義されていることを確認
- 既存コンポーネントへの影響がないことを確認

---

## Phase 2: ファーストビュー実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3598&m=dev

### デザイン仕様
- 背景: 画像 + グラデーションオーバーレイ
- ロゴ: 上部中央配置
- キャッチコピー: 「ペット住まいラボ」＋サブテキスト
- CTAボタン: 来店予約（オレンジ）、LINE相談（グリーン）

### 作業内容
1. ファーストビューセクションのコンポーネント作成
2. ヘッダー部分の実装（ロゴ）
3. メインビジュアル・キャッチコピーの実装
4. CTAボタンの実装（共通コンポーネント化）

### 作成予定コンポーネント
- `src/components/sections/FirstViewSection.vue`
- `src/components/common/CtaButton.vue`（来店予約・LINE相談ボタン、再利用）

### 動作確認
- デザインとの差異がないか確認
- レスポンシブ対応の確認

---

## Phase 3: メディア掲載セクション実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3586&m=dev

### デザイン仕様
- 背景: 白
- 見出し: 「メディア掲載実績」
- メディアロゴ: 横並び配置

### 作業内容
1. メディア掲載セクションのコンポーネント作成
2. メディアロゴの配置
3. 掲載実績の表示

### 作成予定コンポーネント
- `src/components/sections/MediaSection.vue`

### 動作確認
- デザインとの差異がないか確認
- メディアロゴの表示確認

---

## Phase 4: お悩みセクション実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3544&m=dev

### デザイン仕様
- 背景: 白
- 見出し: 「こんなお悩みありませんか？」
- 悩みリスト: チェックマーク付きリスト
- イラスト: 犬のイラスト

### 作業内容
1. お悩みセクションのコンポーネント作成
2. 悩みリストの表示
3. イラストの配置

### 作成予定コンポーネント
- `src/components/sections/ConcernsSection.vue`

### 動作確認
- デザインとの差異がないか確認
- テキストの可読性確認

---

## Phase 5: 選ばれる理由セクション実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3467&m=dev

### デザイン仕様
- 背景: #F7D3BC（ピンクベージュ）
- 見出し: 「選ばれる4つの理由」
- カード: 01〜04のポイントカード
  - 画像 + 白背景のテキストエリア
  - ポイント番号: グラデーション（ピンク系）
  - タイトル: オレンジグラデーション

### 作業内容
1. 選ばれる理由セクションのコンポーネント作成
2. 理由カードの作成（4枚）
3. ポイント番号のグラデーション実装

### 作成予定コンポーネント
- `src/components/sections/ReasonsSection.vue`
- `src/components/common/ReasonCard.vue`（使いまわし）

### 動作確認
- デザインとの差異がないか確認
- カードレイアウトの確認

---

## Phase 6: ご相談・来店セクション実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3460&m=dev

### デザイン仕様
- 背景: グラデーション（#F7D3BC + オレンジ系オーバーレイ）
- CTAボタン:
  - 来店予約: オレンジ（#FF9035）、影付き
  - LINE相談: グリーン（#24E567）、影付き
- ボタンテキスト: 白、22px Bold

### 作業内容
1. ご相談・来店セクションのコンポーネント作成（再利用可能な形式）
2. CTAボタンの配置（Phase 2で作成したコンポーネント使用）
3. 背景グラデーションの実装

### 作成予定コンポーネント
- `src/components/sections/ConsultationSection.vue`（Phase 11, 16で再利用）

### Propsで制御
- `variant`: 'style1' | 'style2'（背景バリエーション用）

### 動作確認
- デザインとの差異がないか確認
- CTAボタンの動作確認

---

## Phase 7: 物件選び放題セクション実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3417&m=dev

### デザイン仕様
- 背景: 画像 + 装飾素材
- 見出し: 「ペット住まいラボなら」「物件が選び放題」（グラデーション）
- 物件カード: 4つのグリッド配置
  - 画像 + 情報（エリア、価格、間取り）

### 作業内容
1. 物件選び放題セクションのコンポーネント作成
2. 物件カードの作成
3. 背景装飾の配置

### 作成予定コンポーネント
- `src/components/sections/PropertySection.vue`
- `src/components/common/PropertyCard.vue`（使いまわし）

### 動作確認
- デザインとの差異がないか確認
- コンテンツの可読性確認

---

## Phase 8: SNS紹介セクション実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3375&m=dev

### デザイン仕様
- 背景: グラデーション（#FFBBC5 ピンク系）
- 見出し: 「様々な物件を紹介中！」（グラデーション）
- コンテンツ:
  - スマホモック画像
  - 総合フォロワー数表示
  - Instagramアカウント名
  - SNSアイコン（Instagram, TikTok, YouTube）

### 作業内容
1. SNS紹介セクションのコンポーネント作成
2. SNSアイコン・リンクの配置
3. フォロワー数の表示

### 作成予定コンポーネント
- `src/components/sections/SnsSection.vue`
- `src/components/icons/InstagramIcon.vue`
- `src/components/icons/TiktokIcon.vue`
- `src/components/icons/YoutubeIcon.vue`

### 動作確認
- デザインとの差異がないか確認
- SNSリンクの動作確認

---

## Phase 9: 安心ポイントセクション実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3343&m=dev

### デザイン仕様
- 背景: 画像（犬）+ 白オーバーレイ
- 白枠カード内にコンテンツ
- 見出し: 「ペット住まいラボの」「安心ポイント」（グラデーション）
- ポイントリスト:
  - チェックアイコン付き
  - 強調テキスト（オレンジ）+ 通常テキスト

### 作業内容
1. 安心ポイントセクションのコンポーネント作成
2. ポイントリストの表示
3. マーカー装飾の実装

### 作成予定コンポーネント
- `src/components/sections/SafetyPointsSection.vue`

### 動作確認
- デザインとの差異がないか確認
- ポイントの視認性確認

---

## Phase 10: お客様の声セクション実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3268&m=dev

### デザイン仕様
- 背景: 白 + 装飾素材（足跡）
- 見出し: 「こんな方にご利用いただいています」「お客様のお声」（グラデーション）
- 声カード:
  - VOICEラベル
  - 顧客情報（年代、性別）
  - 見出し（背景付き）
  - 本文
  - 右側にイラスト

### 作業内容
1. お客様の声セクションのコンポーネント作成
2. 声カードの作成（4件）
3. 区切り線の配置

### 作成予定コンポーネント
- `src/components/sections/TestimonialsSection.vue`
- `src/components/common/TestimonialCard.vue`（使いまわし）

### 動作確認
- デザインとの差異がないか確認
- カード表示の確認

---

## Phase 11: ご相談・来店セクション差し込み（1回目）

### 作業内容
1. Phase 6で作成した`ConsultationSection.vue`をお客様の声セクションの後に配置
2. variant='style2'（白グラデーション上部）を適用

### 動作確認
- 正しい位置に表示されているか確認
- スタイルの一貫性確認

---

## Phase 12: ご入居までの流れセクション実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3217&m=dev

### デザイン仕様
- 背景: グラデーション（#F7D3BC系）+ 装飾
- 見出し: 「お部屋探しの流れ」（グラデーション）
- STEP 1〜5:
  - 左右交互に配置
  - STEPヘッダー: グラデーション背景
  - 内容: 白背景カード
  - 右側にイラストアイコン

### 作業内容
1. ご入居までの流れセクションのコンポーネント作成
2. ステップカードの作成（5つ）
3. 左右交互レイアウトの実装

### 作成予定コンポーネント
- `src/components/sections/FlowSection.vue`
- `src/components/common/FlowStep.vue`（使いまわし）

### 動作確認
- デザインとの差異がないか確認
- ステップの順序・視認性確認

---

## Phase 13: スマートにお部屋探しセクション実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3208&m=dev

### デザイン仕様
- 背景: 白 + 下部に画像
- 見出し:
  - 「センスのいい賃貸をお探しなら」（装飾線付き）
  - 「ペット住まいラボで」（オレンジグラデーション）
  - 「かしこくお部屋探し」（ピンクグラデーション）

### 作業内容
1. スマートにお部屋探しセクションのコンポーネント作成
2. 見出しのグラデーション実装
3. 背景画像の配置

### 作成予定コンポーネント
- `src/components/sections/SmartSearchSection.vue`

### 動作確認
- デザインとの差異がないか確認
- コンテンツの可読性確認

---

## Phase 14: よくある質問セクション実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3187&m=dev

### デザイン仕様
- 背景: #F7D3BC（ピンクベージュ）
- 見出し: 「よくあるご質問」
- Q&Aカード:
  - 白背景、角丸
  - Q. + 質問文（Shippori Mincho SemiBold）
  - 区切り線
  - 回答文（Gothic A1 Medium）

### 作業内容
1. よくある質問セクションのコンポーネント作成
2. Q&Aカードの作成（3件）
3. 区切り線のスタイリング

### 作成予定コンポーネント
- `src/components/sections/FaqSection.vue`
- `src/components/common/FaqItem.vue`（使いまわし）

### 動作確認
- デザインとの差異がないか確認
- テキストの可読性確認

---

## Phase 15: 店舗情報セクション実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3151&m=dev

### デザイン仕様
- 背景: #F7D3BC（ピンクベージュ）
- 見出し: 「店舗情報」
- 店舗カード:
  - 白背景、角丸、ボーダー
  - 店舗画像
  - 店舗名（Shippori Mincho SemiBold）
  - 情報リスト（所在地、アクセス、TEL、営業時間、定休日）
  - Google Mapリンク

### 作業内容
1. 店舗情報セクションのコンポーネント作成
2. 店舗情報カードの作成
3. 情報リストのスタイリング

### 作成予定コンポーネント
- `src/components/sections/ShopInfoSection.vue`

### 動作確認
- デザインとの差異がないか確認
- 店舗情報の正確性確認

---

## Phase 16: ご相談・来店セクション差し込み（2回目）

### 作業内容
1. Phase 6で作成した`ConsultationSection.vue`を店舗情報セクションの後に配置
2. variant='style1'を適用

### 動作確認
- 正しい位置に表示されているか確認
- スタイルの一貫性確認

---

## Phase 17: フッター実装

### Figma参照
https://www.figma.com/design/qbRwLPuwgiQL3RRehuz1Cw/pet-chintai?node-id=1-3141&m=dev

### デザイン仕様
- 背景: #5C442A（ダークブラウン）
- プライバシーポリシーリンク: 白、下線付き
- コピーライト: 白、11px

### 作業内容
1. フッターコンポーネントの作成または更新
2. プライバシーポリシーリンクの配置
3. コピーライト表示

### 作成予定コンポーネント
- `src/components/AppFooter.vue`（既存を更新）

### 動作確認
- デザインとの差異がないか確認
- 全リンクの動作確認

---

## 注意事項

### コンポーネント化の方針
- ページ内で使いまわす要素はコンポーネントとして切り出す
- 将来的に再利用する可能性があるものもコンポーネント化する
- 共通コンポーネント: `src/components/common/`
- セクションコンポーネント: `src/components/sections/`
- アイコンコンポーネント: `src/components/icons/`

### スタイルの共通化
- カラー、フォントサイズは必ず`_variables.scss`の変数を使用
- 新しいカラーやサイズが必要な場合は先に変数を追加
- グラデーションは`_mixins.scss`にミックスインとして定義

### ブランチ運用
- 実装開始時に`feature/landing-page`ブランチを作成
- 各Phase完了後にユーザー確認を経てコミット

---

## ページ構成（実装順序）

```
1. ファーストビュー (Phase 2)
2. メディア掲載 (Phase 3)
3. お悩み (Phase 4)
4. 選ばれる理由 (Phase 5)
5. ご相談・来店 (Phase 6)
6. 物件選び放題 (Phase 7)
7. SNS紹介 (Phase 8)
8. 安心ポイント (Phase 9)
9. お客様の声 (Phase 10)
10. ご相談・来店（再利用） (Phase 11)
11. ご入居までの流れ (Phase 12)
12. スマートにお部屋探し (Phase 13)
13. よくある質問 (Phase 14)
14. 店舗情報 (Phase 15)
15. ご相談・来店（再利用） (Phase 16)
16. フッター (Phase 17)
```

---

## 共通コンポーネント一覧

| コンポーネント名 | 用途 | 使用箇所 |
|-----------------|------|----------|
| CtaButton.vue | 来店予約・LINE相談ボタン | Phase 2, 6, 11, 16 |
| ReasonCard.vue | 選ばれる理由カード | Phase 5 |
| PropertyCard.vue | 物件カード | Phase 7 |
| TestimonialCard.vue | お客様の声カード | Phase 10 |
| FlowStep.vue | 入居までの流れステップ | Phase 12 |
| FaqItem.vue | よくある質問アイテム | Phase 14 |
| ConsultationSection.vue | ご相談・来店セクション | Phase 6, 11, 16 |
