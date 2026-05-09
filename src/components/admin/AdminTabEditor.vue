<template>
  <section class="admin-tab-editor">
    <div class="admin-tab-editor__head">
      <h2 class="admin-tab-editor__heading">タブ設定</h2>
      <button type="button" class="admin-tab-editor__delete" @click="onDelete">
        このタブを削除
      </button>
    </div>

    <div class="admin-tab-editor__field">
      <label class="admin-tab-editor__label" for="tab-name">タブ名</label>
      <input
        id="tab-name"
        v-model="form.name"
        type="text"
        class="admin-tab-editor__input"
      />
    </div>

    <div class="admin-tab-editor__field">
      <label class="admin-tab-editor__label" for="tab-caution">注意点テキスト</label>
      <textarea
        id="tab-caution"
        v-model="form.cautionText"
        class="admin-tab-editor__textarea"
        rows="3"
        placeholder="タブ全体の注意事項を入力（空欄なら表示されません）"
      ></textarea>
    </div>

    <div class="admin-tab-editor__actions">
      <button
        type="button"
        class="admin-tab-editor__save"
        :disabled="!isDirty || saving"
        @click="onSave"
      >
        {{ saving ? '保存中...' : isDirty ? '保存する' : '変更なし' }}
      </button>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch, computed, defineProps, defineEmits } from 'vue';
import { PresentTab, PresentTabInput } from '@/entity/present';

const props = defineProps<{ tab: PresentTab; saving?: boolean }>();
const emit = defineEmits<{
  (e: 'save', input: Partial<PresentTabInput>): void;
  (e: 'delete'): void;
}>();

const form = ref({
  name: props.tab.name,
  cautionText: props.tab.cautionText,
});

watch(
  () => props.tab,
  (t) => {
    form.value.name = t.name;
    form.value.cautionText = t.cautionText;
  }
);

const isDirty = computed(
  () =>
    form.value.name !== props.tab.name ||
    form.value.cautionText !== props.tab.cautionText
);

const onSave = () => {
  emit('save', {
    name: form.value.name.trim(),
    cautionText: form.value.cautionText,
  });
};

const onDelete = () => {
  if (confirm('このタブと配下の大項目・プレゼントをすべて削除します。よろしいですか？')) {
    emit('delete');
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.admin-tab-editor {
  padding: 20px;
  background: $white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(92, 68, 42, 0.06);
  display: flex;
  flex-direction: column;
  gap: 16px;

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  &__heading {
    margin: 0;
    font-family: $font-mincho;
    font-size: $font-xl;
    font-weight: $font-weight-semibold;
    color: $text-brown;
  }

  &__delete {
    padding: 6px 12px;
    border: 1px solid $accent-pink-dark;
    border-radius: 6px;
    background: $white;
    color: $accent-pink-dark;
    font-family: $font-gothic;
    font-size: $font-xs;
    cursor: pointer;

    &:hover {
      background: rgba(238, 69, 72, 0.05);
    }
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
    min-height: 72px;
    line-height: 1.5;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
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
