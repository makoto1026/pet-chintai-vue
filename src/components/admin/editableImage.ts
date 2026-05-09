/**
 * 編集中の画像を表す中間表現。
 * - file がある: ローカルでまだアップロード前
 * - url がある: Storage に既にアップロード済み
 * - 両方ある状態は無い
 */
export interface EditableImage {
  id: string;
  url?: string;
  file?: File;
  previewUrl: string;
}
