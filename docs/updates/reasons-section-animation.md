# 「４つの理由」セクション アニメーション追加

## 概要
ReasonsSectionに以下のアニメーションを追加する：
1. 各カードが左右からスライドインするアニメーション（FlowSection同様）
2. オレンジ色のハイライトテキストにfadeInUpアニメーション（スライド完了後）

## 実装内容

### Phase 1: スライドインアニメーション

**ReasonsSection.vue**
- IntersectionObserverを追加して各カードの可視状態を管理
- カードにindex（偶数/奇数）を渡して左右のスライド方向を決定
- `visible`状態をReasonCardに渡す

**ReasonCard.vue**
- `direction` prop追加（'left' | 'right'）
- `visible` prop追加（boolean）
- スライドアニメーションのスタイル追加
  - 左から：`translateX(-50px)` → `translateX(0)`
  - 右から：`translateX(50px)` → `translateX(0)`

### Phase 2: titleHighlightのfadeInUpアニメーション

**ReasonCard.vue**
- `@keyframes fadeInUp` アニメーションを追加
- スライドアニメーション完了後（0.5秒後）にfadeInUpを開始
- titleHighlightに適用

## アニメーション仕様

| アニメーション | トリガー | 継続時間 | イージング | 遅延 |
|-------------|---------|---------|----------|-----|
| スライドイン | IntersectionObserver | 0.5秒 | ease-out | なし |
| fadeInUp（ハイライト）| スライド完了後 | 1秒 | ease-out | 0.5秒（スライド後） |

## 変更ファイル
- `src/components/sections/ReasonsSection.vue`
- `src/components/common/ReasonCard.vue`
