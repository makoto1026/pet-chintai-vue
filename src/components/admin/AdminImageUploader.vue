<template>
  <div class="image-uploader">
    <div class="image-uploader__head">
      <span class="image-uploader__count">{{ images.length }} / {{ max }} 枚</span>
      <button
        type="button"
        class="image-uploader__pick"
        :disabled="images.length >= max"
        @click="onPickClick"
      >+ 画像を追加</button>
      <input
        ref="fileInput"
        type="file"
        accept="image/*"
        multiple
        class="image-uploader__file"
        @change="onFileChange"
      />
    </div>

    <draggable
      v-if="images.length > 0"
      :model-value="images"
      tag="ul"
      item-key="id"
      class="image-uploader__list"
      handle=".image-uploader__item"
      :animation="180"
      @update:model-value="(v: EditableImage[]) => emit('update', v)"
    >
      <template #item="{ element, index }">
        <li class="image-uploader__item">
          <img :src="element.previewUrl" :alt="`画像 ${index + 1}`" class="image-uploader__thumb" />
          <span v-if="index === 0" class="image-uploader__badge">メイン</span>
          <button
            type="button"
            class="image-uploader__remove"
            aria-label="削除"
            @click.stop="onRemove(element)"
          >×</button>
        </li>
      </template>
    </draggable>

    <p v-else class="image-uploader__empty">画像がありません</p>

    <p class="image-uploader__hint">先頭の画像がメイン画像になります。ドラッグで並び替えできます。</p>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue';
import draggable from 'vuedraggable';
import { EditableImage } from './editableImage';

const props = defineProps<{
  images: EditableImage[];
  max: number;
}>();

const emit = defineEmits<{
  (e: 'update', images: EditableImage[]): void;
  (e: 'remove', image: EditableImage): void;
}>();

const fileInput = ref<HTMLInputElement | null>(null);

const onPickClick = () => {
  fileInput.value?.click();
};

const generateLocalId = () => `local-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

const onFileChange = (e: Event) => {
  const input = e.target as HTMLInputElement;
  const files = Array.from(input.files || []);
  if (files.length === 0) return;
  const remaining = props.max - props.images.length;
  if (remaining <= 0) {
    alert(`画像は最大 ${props.max} 枚までです`);
    if (input) input.value = '';
    return;
  }
  const accepted = files.slice(0, remaining);
  if (files.length > remaining) {
    alert(`残り ${remaining} 枚まで追加できます。${accepted.length} 枚を追加しました。`);
  }
  const additions: EditableImage[] = accepted.map((file) => ({
    id: generateLocalId(),
    file,
    previewUrl: URL.createObjectURL(file),
  }));
  emit('update', [...props.images, ...additions]);
  if (input) input.value = '';
};

const onRemove = (image: EditableImage) => {
  emit('remove', image);
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.image-uploader {
  display: flex;
  flex-direction: column;
  gap: 10px;

  &__head {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__count {
    font-size: $font-xs;
    color: $text-brown-light;
  }

  &__pick {
    padding: 6px 12px;
    border: 1px solid rgba(92, 68, 42, 0.3);
    border-radius: 6px;
    background: $white;
    color: $text-brown;
    font-family: $font-gothic;
    font-size: $font-xs;
    cursor: pointer;

    &:hover:not(:disabled) {
      background: rgba(92, 68, 42, 0.05);
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }

  &__file {
    display: none;
  }

  &__list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(96px, 1fr));
    gap: 8px;
  }

  &__item {
    position: relative;
    aspect-ratio: 1;
    border-radius: 8px;
    overflow: hidden;
    background: #f1ece7;
    cursor: grab;

    &:active {
      cursor: grabbing;
    }
  }

  &__thumb {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    pointer-events: none;
  }

  &__badge {
    position: absolute;
    top: 4px;
    left: 4px;
    padding: 2px 6px;
    background: $primary;
    color: $white;
    font-size: 10px;
    font-weight: $font-weight-bold;
    border-radius: 10px;
  }

  &__remove {
    position: absolute;
    top: 4px;
    right: 4px;
    width: 22px;
    height: 22px;
    border-radius: 50%;
    border: none;
    background: rgba(0, 0, 0, 0.55);
    color: $white;
    font-size: 16px;
    line-height: 1;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background: rgba(0, 0, 0, 0.75);
    }
  }

  &__empty {
    margin: 0;
    padding: 16px;
    border: 1px dashed rgba(92, 68, 42, 0.25);
    border-radius: 8px;
    text-align: center;
    color: rgba(92, 68, 42, 0.5);
    font-size: $font-sm;
  }

  &__hint {
    margin: 0;
    font-size: $font-xs;
    color: $text-brown-light;
  }
}
</style>
