# コーポレートページリデザイン実装計画

## 概要
Figmaデザインに基づき、`/corporate` ページを全面的に改修する。
スマホ版（375px幅）のみの実装とし、PC版調整は削除する。

## デザインカラー
- テキスト: `#5C442A`
- ベース1: `#FFFFFF`
- ベース2: `#FFF6EB`
- メイン1: `#DA964D`（オレンジ）
- メイン2: `#7A5A3A`（ブラウン）

## フォント
- Zen Maru Gothic（Bold / Medium）

## 実装Phase

### Phase 1: 変数とフォント設定の更新
- `_variables.scss` にコーポレート用カラー変数を追加
- `index.html` に Zen Maru Gothic フォントを追加

### Phase 2: ヘッダーの改修（CorporateHeader.vue）
- ロゴ（左側）
- 電話ボタン（丸型オレンジ）
- メールボタン（丸型オレンジ）
- メニューボタン（丸型ブラウン）
- 背景: rgba(255,255,255,0.8)

### Phase 3: ファーストビュー改修（CorporateMainVisual.vue）
- メイン画像（fv-image.png）
- 「暮らしに寄り添う、住まいのパートナー。」縦書きキャッチコピー
- CTAボタン 2つ（お部屋を借りる、住まいを購入する）
- サブ画像セクション
- テキストコンテンツ「住まい探しは〜」
- Amazon No.1バッジ（画像があれば）
- 装飾の円（Ellipse画像）

### Phase 4: Recruitセクション改修
- 既存コンポーネントを流用または新規作成
- 「暮らしに寄り添う仕事を一緒に」
- recruit-image.png を使用
- 「採用情報を見る」ボタン

### Phase 5: Companyセクション改修（CorporateCompanyInfo.vue）
- 会社情報テーブル（社名、所在地、電話番号、E-mail、設立、資本金、代表、事業内容、免許・登録）
- 地図画像（company-image.png / section-image.png）
- 「会社概要を見る」ボタン

### Phase 6: Contactセクション改修（CorporateContact.vue）
- 電話でのお問い合わせ（電話番号表示）
- LINEでのお問い合わせ（緑ボタン）
- メールでのお問い合わせ（オレンジボタン）

### Phase 7: フッター改修（CorporateFooter.vue）
- 会社ロゴ（白）
- 会社情報（住所、電話、メール、免許番号）
- お問い合わせボタン
- コピーライト（別セクション）

### Phase 8: 不要コンポーネントの削除
- CorporateMission.vue
- CorporateVision.vue
- CorporateService.vue
- CorporateCustomerVoice.vue
- CorporateWorkerVoice.vue
- CorporateNews.vue
- CorporateLocation.vue

### Phase 9: CorporatePage.vueの更新
- 新しいコンポーネント構成に更新
- PC版メディアクエリを削除

## 使用画像
- logo.png - ヘッダー/フッターロゴ
- fv-image.png - ファーストビューメイン画像
- section-image.png - FVサブ画像
- recruit-image.png - 採用セクション画像
- company-image.png - 会社概要地図画像
- phone-icon.svg - 電話アイコン
- email-icon.svg - メールアイコン
- menu-icon.svg - メニューアイコン
- line-icon.svg - LINEアイコン
- figrine.svg - 矢印アイコン
- vector.svg - メニューラインアイコン
- 装飾円画像（red-circle-*.svg, yellow-circle-*.svg）
