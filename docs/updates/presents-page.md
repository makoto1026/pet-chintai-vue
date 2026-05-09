# プレゼント一覧ページ＋管理画面

## 概要
ペット住まいラボでお客様にプレゼントしている特典を一覧表示する公開ページ（`/presents`）と、その内容を運営側で更新できる管理画面を新設する。
プレゼントは複数のジャンル（タブ）に分かれ、各タブ直下にプレゼント（商品）が並ぶ構造。
頻繁に入れ替わるため、Firestore + Firebase Storage で管理し、Firebase Auth で保護した管理画面から CRUD できるようにする。
公開ページは URL 直遷移を前提とした単一ページとして提供する。

## 背景・目的
- ペット住まいラボでは入居者向けに多数のプレゼントを用意しているが、内容を一覧する場所が必要。
- 提携先の都合で頻繁に入れ替わるため、コードを触らず編集できる仕組みが必要。
- ジャンル別に整理して見せたいニーズがある。
- ※LP の `BenefitsSection`（優待特典＋プレゼント）とは別概念のため、LP との連携は行わない。

## スコープ
### 公開ページ
- 新ページ: `/presents`（仮ルート、要確認）
- スマホファースト（既存ページと同じ最大幅 480px の枠を継承）
- 流入は URL 直リンクや QR コード等を想定（LP からの導線は今回スコープ外）

### 管理画面
- 新ページ: `/admin/login`, `/admin/presents`
- スマホ＋PC両対応（PC は最大幅 1200px 程度の管理用レイアウト）

## 公開ページ仕様（`/presents`）

URL 直遷移される単一ページ前提のため、戻るリンクやヘッダーナビゲーションは設けない。

### レイアウト構成
1. ページタイトル「プレゼント一覧」
2. **タブ群**（横スクロール可能、選択中タブはアクセントカラー）
3. 選択中タブの内容
   - **タブの注意点テキスト**（タブ全体の注意事項。空文字なら非表示）
   - プレゼントカード（写真＋タイトル＋詳細）の **縦 1 列リスト**
4. フッター（簡易フッター。LP の `FooterSection` 流用も検討）

### プレゼントカード
- メイン写真（先頭画像）をサムネイル表示
- タップで詳細モーダル / または同ページ内展開で全画像（最大 10 枚）スライダー表示
- タイトル文字
- detail（詳細テキスト、任意）を表示。空ならその領域は省略
- ジャンル別 No 等の連番表記は表示しない

### カードレイアウトの拡張性
- 初期は **縦 1 列** で実装するが、将来 2 カラムグリッドに切り替えやすいよう、リストコンテナを `display: grid; grid-template-columns: 1fr;` で書く設計にする。
- グリッド化は `_variables.scss` の SP/PC ブレークポイントで `grid-template-columns: 1fr 1fr;` に変えるだけで切替可能とする。
- 個別カードは内部で写真比率・タイトル位置を保ち、横幅変動に追従させる。

### 状態管理
- ページマウント時に Firestore からタブ・大項目・プレゼントを取得
- タブ切替はクライアント側のみで処理（再フェッチなし）

## 管理画面仕様

### `/admin/login`
- メールアドレス＋パスワード入力欄＋送信ボタン
- Firebase Auth (Email/Password) で `signInWithEmailAndPassword` を実行
- 失敗時は赤文字エラー（メッセージは「メールアドレスまたはパスワードが正しくありません」で統一）
- 既にログイン済み（`onAuthStateChanged` で検出）なら `/admin/presents` へ自動遷移
- **新規登録 UI は提供しない**

### `/admin/presents`
PC とスマホ両対応のレイアウト。

#### 構成
- 上部ヘッダー: 「プレゼント管理」タイトル＋ログアウトボタン
- 左サイド（PC）／ 上部タブ（SP）: タブ一覧
  - タブの追加・並び替え・削除・名前変更ができる
- メインエリア: 選択中タブの内容
  - **タブ設定**
    - タブ名
    - タブの注意点テキスト（複数行）
    - 「保存」ボタン
  - **プレゼントリスト**
    - タブ直下にプレゼントを並べる
    - 1 件ずつ「編集」「削除」「並び替え」ができる
    - 「新規追加」ボタンでモーダル or インラインフォーム

#### プレゼント編集フォーム
- タイトル（必須）
- detail（詳細テキスト、任意・複数行）
- 所属タブ（プルダウン）
- 写真アップロード（複数選択可、最大 20 枚）
  - サムネイルプレビュー
  - 1 枚ずつ削除可
  - 並び替え可（先頭がメイン画像）
- 表示順
- 「保存」ボタン／「キャンセル」ボタン

#### 操作性配慮
- 並び替えは drag-and-drop（`vuedraggable` 利用）
- 削除は確認ダイアログを挟む
- **保存タイミングは明示的な「保存」ボタンクリック**（autosave なし）
- 未保存の変更がある状態でタブ移動・離脱する場合は確認ダイアログ
- 画像は Storage に直接アップロードし、Firestore には URL を保存

## データ構造

### Firestore コレクション設計

```
presentTabs/{tabId}
  - id: string
  - name: string                 // タブ表示名（例: 引越し）
  - order: number                // タブ並び順
  - cautionText: string          // 注意点テキスト（複数行可）
  - createdAt: Timestamp
  - updatedAt: Timestamp

presentItems/{itemId}
  - id: string
  - tabId: string                // 所属タブ
  - title: string                // タイトル（必須）
  - detail: string               // 詳細テキスト（任意、複数行可、空文字許容）
  - images: string[]             // Storage の公開 URL（最大 20）
  - order: number                // タブ内での並び順
  - createdAt: Timestamp
  - updatedAt: Timestamp
```

### Firebase Storage 構成
```
presents/{itemId}/{uuid}.{ext}
```
- 削除時は対応する Storage オブジェクトもクリーンアップ
- 画像はクライアント側で軽くリサイズ（長辺 1600px 程度）してからアップロード推奨

## 認証・セキュリティ

### 認証方式
- Firebase Authentication（Email / Password プロバイダ）を使用
- 管理者アカウントは **Firebase Console から手動で 1 つ作成**（運用者の作業）
- アプリ側に **新規登録 UI は実装しない**
- ログイン状態は Firebase SDK の `onAuthStateChanged` で監視
- Vue Router の `beforeEach` ガードでログイン状態を確認し、未ログインなら `/admin/login` にリダイレクト

### 管理者識別
新規登録自体は Firebase Auth の API を直接叩けば誰でも作成可能なため、ルール側で「管理者だけが書き込める」状態を担保する。
管理者を特定する方法は以下のどちらかとする（**案 1 を推奨**）。

| 案 | 内容 | 長所 | 短所 |
| --- | --- | --- | --- |
| 1. メールアドレスのホワイトリスト（推奨） | ルールで `request.auth.token.email == 'yukimidaifuku0405@gmail.com'` と比較 | 設定が明示的・読みやすい | メアド変更時にルール更新が必要 |
| 2. Custom Claim | Admin SDK で `admin: true` 付与、ルールで `request.auth.token.admin == true` を確認 | 柔軟、複数管理者拡張しやすい | claim 付与のための一回処理が必要 |

初期は案 1 を採用し、メールアドレスは `firebase.config.ts` 等の定数で一元管理。将来的に管理者を増やす場合は 2 へ切替。

### Firestore ルール
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // 公開ページ用に読み取りはオープン
    match /presentTabs/{doc=**}        { allow read: if true; }
    match /presentItems/{doc=**}       { allow read: if true; }

    // 書き込みは管理者メールでログインしている場合のみ
    match /presentTabs/{doc} {
      allow write: if request.auth != null
                   && request.auth.token.email == 'yukimidaifuku0405@gmail.com';
    }
    match /presentItems/{doc} {
      allow write: if request.auth != null
                   && request.auth.token.email == 'yukimidaifuku0405@gmail.com';
    }
  }
}
```

### Storage ルール
```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /presents/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null
                   && request.auth.token.email == 'yukimidaifuku0405@gmail.com';
    }
  }
}
```

### 補足
- 管理者メールアドレスは `yukimidaifuku0405@gmail.com` を使用。
- ハードコードで問題ない（メールアドレス自体は秘匿情報ではない）。
- 仮に第三者が Firebase Auth API で勝手にアカウント作成しても、メアドが一致しないため Firestore / Storage への書き込みは拒否される。

## ルーティング
| パス | コンポーネント | 認証 |
| --- | --- | --- |
| `/presents` | `PresentsPage.vue` | なし |
| `/admin/login` | `AdminLoginPage.vue` | なし（ログイン済みなら `/admin/presents` へリダイレクト） |
| `/admin/presents` | `AdminPresentsPage.vue` | Firebase Auth でログイン済み + 管理者メール一致（router beforeEach + onAuthStateChanged） |

## 影響範囲・新規ファイル

### 新規
- `src/Pages/PresentsPage.vue`
- `src/Pages/admin/AdminLoginPage.vue`
- `src/Pages/admin/AdminPresentsPage.vue`
- `src/components/presents/PresentTabs.vue`
- `src/components/presents/PresentCard.vue`
- `src/components/presents/PresentImageGallery.vue`
- `src/components/admin/AdminTabList.vue`
- `src/components/admin/AdminTabEditor.vue`
- `src/components/admin/AdminPresentEditor.vue`
- `src/components/admin/AdminImageUploader.vue`
- `src/services/presentService.ts`（Firestore CRUD ラッパ）
- `src/services/storageService.ts`（Storage アップロード／削除）
- `src/composables/useAdminAuth.ts`（ログイン状態管理）
- `src/entity/present.ts`（型定義）
- `src/assets/styles/_admin.scss`（管理画面用スタイル）

### 既存ファイル変更
- `src/router/index.ts` — 3 ルート追加、admin ガード追加
- `firestore.rules` — 3 コレクションのルール追記（読み取り公開、書き込みは管理者のみ）
- `storage.rules` — `presents/` パスのルール追記（読み取り公開、書き込みは管理者のみ）
- `package.json` — `vuedraggable` 追加（並び替え用）
- Firebase Console — Authentication で Email/Password を有効化、管理者ユーザー 1 件を手動作成

## 実装フェーズ（推奨順）

### Phase 1 — データ基盤
- 型定義 (`entity/present.ts`)
- `presentService` / `storageService` の雛形
- Firestore / Storage ルール更新
- 動作確認: コンソールから手動で 1 件作成→読み取り

### Phase 2 — 公開ページ（読み取りのみ）
- `PresentsPage.vue` とサブコンポーネント
- タブ切替・大項目表示・カード表示・画像ギャラリー
- 動作確認: Firestore に直接入れたデータが正しく表示されるか

### Phase 3 — 管理画面ログイン
- Firebase Auth Email/Password の有効化（事前作業）
- 管理者ユーザーを Firebase Console で手動作成（事前作業）
- `AdminLoginPage.vue` とログインロジック（`signInWithEmailAndPassword`）
- ルートガード（`onAuthStateChanged` + メアドチェック）
- 動作確認: 正/誤パスワードの分岐、リロードで状態維持、ログアウト動作

### Phase 4 — 管理画面 タブ管理
- タブの CRUD と並び替え
- タブの注意点テキスト編集
- 動作確認: 操作後に公開ページが追従するか

### Phase 5 — 管理画面 プレゼント管理
- プレゼント CRUD（タイトル／詳細／所属タブ）
- 画像アップロード（複数枚 / 並び替え / 削除、最大 20 枚）
- 動作確認: 公開ページに反映、画像ギャラリーが正しく表示

各フェーズ完了時にユーザーへ動作確認を依頼し、OK が出てからコミット。

## 動作確認ポイント（最終）
- スマホ／PC で公開ページ・管理画面それぞれ正しく表示
- タブ切替がスムーズ
- 画像ギャラリーが 10 枚まで表示・スワイプできる
- 管理画面でのタブ・大項目・プレゼント編集が即時反映
- ログアウト後に `/admin/presents` にアクセスすると `/admin/login` へ飛ぶ
- ブラウザのリロードでログイン状態が維持される

## 確定事項（参考）
- 公開ページルート: `/presents`
- 管理者メールアドレス: `yukimidaifuku0405@gmail.com`
- カード表示要素: 写真＋タイトル（＋detail があれば表示）。No 連番は出さない
- 認証: Firebase Auth (Email/Password)、新規登録 UI なし
- ルール: 読み取り公開／書き込みは管理者メール一致時のみ
- 保存タイミング: 明示的な「保存」ボタン
- 注意点テキスト: タブごとに 1 つ
- カードレイアウト: 縦 1 列（CSS Grid で実装、後でグリッド切替が容易）
- 画像最大枚数: 1 商品あたり 20 枚
