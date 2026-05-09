<template>
  <section class="present-list">
    <header class="present-list__head">
      <h2 class="present-list__title">プレゼント</h2>
      <button type="button" class="present-list__add" @click="emit('add')">
        + 新規プレゼント
      </button>
    </header>

    <draggable
      v-if="items.length > 0"
      :model-value="items"
      tag="ul"
      item-key="id"
      class="present-list__items"
      handle=".present-list__drag"
      :animation="180"
      @update:model-value="(v: PresentItem[]) => emit('reorder', v.map((i) => i.id))"
    >
      <template #item="{ element }">
        <li class="present-list__item">
          <span class="present-list__drag" aria-hidden="true">⋮⋮</span>
          <div class="present-list__thumb">
            <img v-if="element.images[0]" :src="element.images[0]" :alt="element.title" />
            <span v-else class="present-list__no-image">No Image</span>
          </div>
          <div class="present-list__body">
            <p class="present-list__item-title">{{ element.title || '(タイトル未設定)' }}</p>
            <p v-if="element.detail" class="present-list__item-detail">{{ element.detail }}</p>
            <p class="present-list__item-meta">画像 {{ element.images.length }} 枚</p>
          </div>
          <div class="present-list__actions">
            <button type="button" class="present-list__edit" @click="emit('edit', element)">編集</button>
            <button type="button" class="present-list__delete" @click="onDelete(element)">削除</button>
          </div>
        </li>
      </template>
    </draggable>

    <p v-else class="present-list__empty">このタブにはまだプレゼントがありません</p>
  </section>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import draggable from 'vuedraggable';
import { PresentItem } from '@/entity/present';

defineProps<{ items: PresentItem[] }>();

const emit = defineEmits<{
  (e: 'add'): void;
  (e: 'edit', item: PresentItem): void;
  (e: 'delete', item: PresentItem): void;
  (e: 'reorder', orderedIds: string[]): void;
}>();

const onDelete = (item: PresentItem) => {
  if (confirm(`「${item.title || '(タイトル未設定)'}」を削除します。よろしいですか？`)) {
    emit('delete', item);
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.present-list {
  padding: 20px;
  background: $white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(92, 68, 42, 0.06);

  &__head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  &__title {
    margin: 0;
    font-family: $font-mincho;
    font-size: $font-xl;
    font-weight: $font-weight-semibold;
    color: $text-brown;
  }

  &__add {
    padding: 6px 12px;
    border: 1px solid rgba(92, 68, 42, 0.3);
    border-radius: 6px;
    background: $white;
    color: $text-brown;
    font-family: $font-gothic;
    font-size: $font-xs;
    cursor: pointer;

    &:hover {
      background: rgba(92, 68, 42, 0.05);
    }
  }

  &__items {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__item {
    display: grid;
    grid-template-columns: auto 80px 1fr auto;
    align-items: center;
    gap: 12px;
    padding: 10px;
    background: rgba(92, 68, 42, 0.02);
    border: 1px solid rgba(92, 68, 42, 0.08);
    border-radius: 8px;

    @media (max-width: 600px) {
      grid-template-columns: auto 64px 1fr;
      grid-template-rows: auto auto;
    }
  }

  &__drag {
    color: rgba(92, 68, 42, 0.4);
    cursor: grab;
    user-select: none;
    padding: 0 4px;
    align-self: stretch;
    display: flex;
    align-items: center;

    &:active {
      cursor: grabbing;
    }
  }

  &__thumb {
    width: 80px;
    height: 80px;
    border-radius: 6px;
    overflow: hidden;
    background: #f1ece7;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    @media (max-width: 600px) {
      width: 64px;
      height: 64px;
    }
  }

  &__no-image {
    font-size: 10px;
    color: rgba(92, 68, 42, 0.4);
  }

  &__body {
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__item-title {
    margin: 0;
    font-size: $font-md;
    font-weight: $font-weight-bold;
    color: $text-brown;
    line-height: 1.4;
  }

  &__item-detail {
    margin: 0;
    font-size: $font-xs;
    color: $text-brown-light;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__item-meta {
    margin: 2px 0 0;
    font-size: 11px;
    color: rgba(92, 68, 42, 0.5);
  }

  &__actions {
    display: flex;
    gap: 6px;

    @media (max-width: 600px) {
      grid-column: 2 / -1;
      justify-self: end;
    }
  }

  &__edit,
  &__delete {
    padding: 6px 12px;
    border-radius: 6px;
    font-family: $font-gothic;
    font-size: $font-xs;
    cursor: pointer;
    background: $white;
  }

  &__edit {
    border: 1px solid rgba(92, 68, 42, 0.3);
    color: $text-brown;

    &:hover {
      background: rgba(92, 68, 42, 0.05);
    }
  }

  &__delete {
    border: 1px solid rgba(238, 69, 72, 0.5);
    color: $accent-pink-dark;

    &:hover {
      background: rgba(238, 69, 72, 0.05);
    }
  }

  &__empty {
    margin: 0;
    padding: 16px;
    text-align: center;
    color: rgba(92, 68, 42, 0.5);
    font-size: $font-sm;
  }
}
</style>
