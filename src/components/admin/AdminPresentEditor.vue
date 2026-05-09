<template>
  <Teleport to="body">
    <div class="present-editor" role="dialog" aria-modal="true" @click.self="onCancel">
      <div class="present-editor__card">
        <header class="present-editor__head">
          <h2 class="present-editor__title">{{ isNew ? 'プレゼントを追加' : 'プレゼントを編集' }}</h2>
          <button type="button" class="present-editor__close" aria-label="閉じる" @click="onCancel">×</button>
        </header>

        <div class="present-editor__body">
          <div class="present-editor__field">
            <label class="present-editor__label">タイトル<span class="present-editor__required">*</span></label>
            <input v-model="form.title" type="text" class="present-editor__input" />
          </div>

          <div class="present-editor__field">
            <label class="present-editor__label">所属タブ</label>
            <select v-model="form.tabId" class="present-editor__input">
              <option v-for="tab in tabs" :key="tab.id" :value="tab.id">
                {{ tab.name || '(名称未設定)' }}
              </option>
            </select>
          </div>

          <div class="present-editor__field">
            <label class="present-editor__label">詳細（任意）</label>
            <textarea
              v-model="form.detail"
              class="present-editor__textarea"
              rows="3"
              placeholder="商品の詳細情報を入力（空欄でも構いません）"
            ></textarea>
          </div>

          <div class="present-editor__field">
            <label class="present-editor__label">画像（最大 {{ MAX_IMAGES }} 枚）</label>
            <AdminImageUploader
              :images="images"
              :max="MAX_IMAGES"
              @update="(v) => images = v"
              @remove="onRemoveImage"
            />
          </div>
        </div>

        <footer class="present-editor__footer">
          <button type="button" class="present-editor__cancel" :disabled="saving" @click="onCancel">
            キャンセル
          </button>
          <button type="button" class="present-editor__save" :disabled="!canSave || saving" @click="onSave">
            {{ saving ? '保存中...' : '保存する' }}
          </button>
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineProps, defineEmits } from 'vue';
import {
  PresentTab,
  PresentItem,
  PresentItemInput,
  PRESENT_ITEM_MAX_IMAGES,
} from '@/entity/present';
import AdminImageUploader from './AdminImageUploader.vue';
import { EditableImage } from './editableImage';

const MAX_IMAGES = PRESENT_ITEM_MAX_IMAGES;

const props = defineProps<{
  item: PresentItem | null;
  tabs: PresentTab[];
  defaultTabId: string;
  saving?: boolean;
}>();

const emit = defineEmits<{
  (e: 'cancel'): void;
  (e: 'save', payload: { input: PresentItemInput; newFiles: { id: string; file: File }[]; removedUrls: string[] }): void;
}>();

const isNew = computed(() => props.item === null);

const form = ref({
  title: props.item?.title || '',
  detail: props.item?.detail || '',
  tabId: props.item?.tabId || props.defaultTabId,
});

const removedUrls = ref<string[]>([]);
const images = ref<EditableImage[]>(
  (props.item?.images || []).map((url, i) => ({
    id: `existing-${i}-${url}`,
    url,
    previewUrl: url,
  }))
);

const onRemoveImage = (image: EditableImage) => {
  if (image.url) {
    removedUrls.value.push(image.url);
  } else if (image.file) {
    URL.revokeObjectURL(image.previewUrl);
  }
  images.value = images.value.filter((img) => img.id !== image.id);
};

const canSave = computed(() => form.value.title.trim().length > 0 && form.value.tabId !== '');

const onCancel = () => {
  if (props.saving) return;
  // キャンセル時、ローカルアップロード予定だったプレビュー URL を解放
  images.value.forEach((img) => {
    if (img.file) URL.revokeObjectURL(img.previewUrl);
  });
  emit('cancel');
};

const onSave = () => {
  const newFiles: { id: string; file: File }[] = [];
  images.value.forEach((img) => {
    if (img.file) newFiles.push({ id: img.id, file: img.file });
  });
  // 既存の URL 部分だけ抽出してアイテム保存時の images にする
  // 並び順は images の順序、新規 file は親側でアップロード後に URL を埋める
  const placeholderImages = images.value.map((img) => img.url || `__pending__:${img.id}`);
  const input: PresentItemInput = {
    tabId: form.value.tabId,
    title: form.value.title.trim(),
    detail: form.value.detail,
    images: placeholderImages,
    order: props.item?.order ?? 0,
  };
  emit('save', { input, newFiles, removedUrls: removedUrls.value });
};

const handleKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') onCancel();
};

onMounted(() => {
  document.addEventListener('keydown', handleKey);
  document.body.style.overflow = 'hidden';
});
onUnmounted(() => {
  document.removeEventListener('keydown', handleKey);
  document.body.style.overflow = '';
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.present-editor {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;

  &__card {
    width: 100%;
    max-width: 640px;
    max-height: calc(100vh - 48px);
    background: $white;
    border-radius: 12px;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border-bottom: 1px solid rgba(92, 68, 42, 0.1);
  }

  &__title {
    margin: 0;
    font-family: $font-mincho;
    font-size: $font-xl;
    font-weight: $font-weight-semibold;
    color: $text-brown;
  }

  &__close {
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background: transparent;
    color: $text-brown;
    font-size: 20px;
    line-height: 1;
    cursor: pointer;

    &:hover {
      background: rgba(92, 68, 42, 0.08);
    }
  }

  &__body {
    overflow-y: auto;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__label {
    font-size: $font-sm;
    color: $text-brown;
    font-weight: $font-weight-medium;
  }

  &__required {
    color: $accent-pink-dark;
    margin-left: 4px;
  }

  &__input,
  &__textarea {
    padding: 10px 12px;
    border: 1px solid rgba(92, 68, 42, 0.25);
    border-radius: 6px;
    font-size: $font-md;
    font-family: $font-gothic;
    color: $text-brown;
    background: $white;
    resize: vertical;

    &:focus {
      outline: none;
      border-color: $primary;
      box-shadow: 0 0 0 3px rgba(248, 134, 88, 0.15);
    }
  }

  &__textarea {
    min-height: 80px;
    line-height: 1.5;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    padding: 14px 20px;
    border-top: 1px solid rgba(92, 68, 42, 0.1);
  }

  &__cancel {
    padding: 10px 16px;
    border: 1px solid rgba(92, 68, 42, 0.3);
    border-radius: 6px;
    background: $white;
    color: $text-brown;
    font-family: $font-gothic;
    font-size: $font-md;
    cursor: pointer;

    &:hover:not(:disabled) {
      background: rgba(92, 68, 42, 0.05);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__save {
    padding: 10px 20px;
    border: none;
    border-radius: 6px;
    background: linear-gradient(90deg, #5c442a 0%, #ee7f81 100%);
    color: $white;
    font-family: $font-gothic;
    font-size: $font-md;
    font-weight: $font-weight-bold;
    cursor: pointer;
    transition: filter 0.2s ease, opacity 0.2s ease;

    &:hover:not(:disabled) {
      filter: brightness(1.05);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
