# CLAUDE.md

このファイルは、Claude Code (claude.ai/code) がこのリポジトリで作業する際のガイダンスを提供します。

## ビルド・開発コマンド

```bash
npm install          # 依存関係のインストール
npm run serve        # 開発サーバー起動（ホットリロード、localhost:8080）
npm run build        # 本番ビルド（dist/へ出力）
npm run lint         # ESLintによるコードチェック・修正

# デプロイ（Firebase CLIが必要）
make build           # Vueアプリのビルド
make deploy          # Firebase Hostingへデプロイ
make all             # ビルドとデプロイを実行
```

## アーキテクチャ

ペット可賃貸サービスの情報を表示するVue 3 SPA。Firebase Firestoreをバックエンドとして使用。

**技術スタック:**
- Vue 3.2 + Composition API (`<script setup lang="ts">`)
- Vue Router 4（historyモード）
- TypeScript 4.5（strictモード）
- SCSS（変数・ミックスイン）
- Firebase 12（Firestore、Hosting）

**主要ディレクトリ:**
- `src/Pages/` - ページコンポーネント（ルートビュー）
- `src/components/` - 再利用可能なUIコンポーネント
- `src/components/icons/` - SVGアイコンコンポーネント
- `src/entity/` - TypeScriptインターフェース
- `src/assets/styles/` - SCSS変数（`_variables.scss`）とミックスイン（`_mixins.scss`）

**データフロー:**
- コンポーネントはマウント時にFirestore `priorityDestinations` コレクションからデータを取得
- `contentType=1`：通常アイテム、`contentType=2`：期間限定アイテム
- `order`フィールドでソート

## スタイリング規約

**SCSS変数 (`src/assets/styles/_variables.scss`):**
- Primary: `$primary` (#F88658 オレンジ), `$secondary` (#876050 ブラウン)
- Background: `$background` (#F9F5F2), `$backgroundCream`, `$backgroundYellow`
- Fonts: `$font-mincho` (しっぽり明朝), `$font-gothic` (Zen角ゴシックNew)

**レスポンシブブレイクポイント (`_mixins.scss`):**
- `$sp`: モバイル（≤767px）
- `$tab`: タブレット（768px-1023px）
- `$pc`: デスクトップ（≥1024px）

**レイアウト:** モバイルファーストデザイン、最大幅480px

## Firebase設定

- プロジェクトID: `pet-chintai-vue`
- リージョン: `asia-northeast1`
- Hosting: SPAリライト（全パス → index.html）
- 設定ファイル: `firebase.json`, `.firebaserc`, `firestore.rules`, `storage.rules`

## 開発ルール

### 実装計画ドキュメント
新機能や変更を実装する際は、事前に`docs/updates/`ディレクトリに実装計画ドキュメントを作成すること。

### ブランチ運用と動作確認
- 実装開始時に新しいブランチを作成する
- 実装計画ドキュメントのPhaseごとにユーザーへ動作確認を促す
- ユーザーからOKが出たらコミットを行う

### コンポーネント化
- ページ内で使いまわす要素はコンポーネントとして切り出す
- 初めて実装するものでも、将来的に使いまわす可能性があると判断した場合はコンポーネント化する

### スタイルの共通化
- `fontSize`やカラーなどは`_variables.scss`の変数を使用することを原則とする
- 直接値をハードコーディングせず、共通変数を参照する

### Figma画像アセットのエクスポート
FigmaからUI実装を行う際は、以下の手順で画像アセットをエクスポートする：

1. **Figma MCP連携**
   - Figma MCPサーバーを起動: `claude mcp add --transport sse figma-mcp http://127.0.0.1:3845/sse`
   - Figmaデスクトップアプリで対象ドキュメントを開いた状態にする

2. **デザインコンテキスト取得**
   - `get_design_context`でノードIDを指定してデザイン情報を取得
   - 画像アセットは`http://localhost:3845/assets/...`形式のURLで取得可能

3. **画像のダウンロード**
   ```bash
   # 例: メイン画像
   curl -o src/assets/images/[画像名].png "http://localhost:3845/assets/[hash].png"
   ```

4. **保存先ディレクトリ**
   - `src/assets/images/` - 画像アセット（PNG, JPG）
   - `src/components/icons/` - SVGアイコンコンポーネント

5. **命名規則**
   - ファーストビュー: `fv-*.png`（例: `fv-dog.png`, `fv-bg-texture.png`）
   - バッジ・装飾: `badge-*.png`（例: `badge-bg.png`）
   - ロゴ: `*-logo.png`（例: `glh-logo.png`）
   - セクション別: `[section名]-*.png`
