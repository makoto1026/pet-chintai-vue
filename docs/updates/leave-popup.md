# 離脱防止ポップアップ実装計画

## 概要
ブラウザバックや画面を閉じようとした際に、離脱防止ポップアップを表示する機能を追加する。

## 技術的考慮事項

### ブラウザの制限
- `beforeunload`イベント: タブを閉じる・リロード時に発火するが、カスタムUIは表示できない（ブラウザ標準ダイアログのみ）
- `popstate`イベント: History APIと組み合わせてブラウザバックを検知可能

### 採用するアプローチ
1. **ブラウザバック対応**: History APIを使用してダミー履歴を追加し、`popstate`イベントでブラウザバックを検知
2. **タブを閉じる対応**: `beforeunload`イベントでブラウザ標準の確認ダイアログを表示（カスタムUIは不可）

## 実装フェーズ

### Phase 1: LeavePopupコンポーネント作成
- `src/components/common/LeavePopup.vue`を作成
- ポップアップ画像（leave-popup.png）を表示
- ×ボタンで閉じる機能
- オーバーレイ背景

### Phase 2: LandingPage.vueへの統合
- LeavePopupコンポーネントをインポート
- History APIでダミー履歴を追加
- `popstate`イベントリスナーでブラウザバック検知
- ポップアップ表示/非表示の制御
- ×で閉じたら`history.back()`で実際に戻る

## ファイル構成
```
src/
├── assets/images/
│   └── leave-popup.png（既存）
├── components/common/
│   └── LeavePopup.vue（新規）
└── Pages/
    └── LandingPage.vue（修正）
```

## 動作フロー
1. ページ読み込み時にダミー履歴を追加
2. ユーザーがブラウザバックを押す
3. `popstate`イベントが発火
4. ポップアップを表示（ダミー履歴を再追加して戻れないようにする）
5. ユーザーが×ボタンをクリック
6. ポップアップを非表示にし、`history.back()`で実際に戻る
