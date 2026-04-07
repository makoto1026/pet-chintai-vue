# レビューページ実装計画

## 概要
コーポレートサイトに「お客様の声」を掲載するレビューページを追加する。
賃貸と売買の2ページを作成し、ハンバーガーメニューから遷移できるようにする。

## ルート設計
- `/review/rental` → 賃貸レビューページ
- `/review/sales` → 売買レビューページ

## 新規ファイル
| ファイル | 目的 |
|---------|------|
| `src/entity/review.ts` | `ReviewItem` インターフェース |
| `src/components/corporate/ReviewSection.vue` | セクションラッパー（タイトル + slot） |
| `src/components/corporate/ReviewCard.vue` | レビューカードコンポーネント |
| `src/Pages/ReviewRentalPage.vue` | 賃貸レビューページ |
| `src/Pages/ReviewSalesPage.vue` | 売買レビューページ |

## 修正ファイル
| ファイル | 変更内容 |
|---------|---------|
| `src/router/index.ts` | 2ルート追加 + scrollBehavior設定 |
| `src/components/corporate/CorporateHeader.vue` | メニューに「やっていること > 賃貸/売買」追加 |

## Phase 1: 基盤（インターフェース・ルーター）
- `ReviewItem` インターフェース作成
- ルーター設定（2ルート追加 + scrollBehavior）

## Phase 2: コンポーネント作成
- `ReviewCard.vue` - Figmaデザイン準拠のカードコンポーネント
- `ReviewSection.vue` - セクションラッパー（props: title, subtitle + default slot）

## Phase 3: ページ作成
- `ReviewRentalPage.vue` / `ReviewSalesPage.vue`
- 静的データで初期実装（将来Firestore移行可能な構造）

## Phase 4: ハンバーガーメニュー修正
- 「やっていること」セクション追加（賃貸/売買リンク）
- 既存アンカーリンクをフルパス対応に変更
