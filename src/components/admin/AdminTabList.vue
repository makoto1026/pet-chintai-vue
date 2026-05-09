<template>
  <aside class="admin-tab-list">
    <div class="admin-tab-list__header">
      <h2 class="admin-tab-list__heading">タブ</h2>
      <button type="button" class="admin-tab-list__add" @click="onAdd">+ 新規タブ</button>
    </div>

    <draggable
      :model-value="tabs"
      tag="ul"
      class="admin-tab-list__items"
      item-key="id"
      handle=".admin-tab-list__drag"
      :animation="180"
      @update:model-value="(v: PresentTab[]) => emit('reorder', v.map((t) => t.id))"
    >
      <template #item="{ element }">
        <li
          class="admin-tab-list__item"
          :class="{ 'admin-tab-list__item--active': element.id === modelValue }"
        >
          <span class="admin-tab-list__drag" aria-hidden="true">⋮⋮</span>
          <button
            type="button"
            class="admin-tab-list__select"
            @click="emit('update:modelValue', element.id)"
          >
            {{ element.name || '(名称未設定)' }}
          </button>
        </li>
      </template>
    </draggable>

    <p v-if="tabs.length === 0" class="admin-tab-list__empty">
      タブがありません
    </p>
  </aside>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import draggable from 'vuedraggable';
import { PresentTab } from '@/entity/present';

defineProps<{
  tabs: PresentTab[];
  modelValue: string;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
  (e: 'reorder', orderedIds: string[]): void;
  (e: 'add'): void;
}>();

const onAdd = () => emit('add');
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.admin-tab-list {
  background: $white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(92, 68, 42, 0.06);
  padding: 16px;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  &__heading {
    margin: 0;
    font-family: $font-mincho;
    font-size: $font-lg;
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
    gap: 4px;
  }

  &__item {
    display: flex;
    align-items: stretch;
    border-radius: 6px;
    overflow: hidden;
    background: rgba(92, 68, 42, 0.03);

    &--active {
      background: rgba(248, 134, 88, 0.12);
    }
  }

  &__drag {
    display: flex;
    align-items: center;
    padding: 0 8px;
    color: rgba(92, 68, 42, 0.4);
    cursor: grab;
    user-select: none;
    font-size: 14px;

    &:active {
      cursor: grabbing;
    }
  }

  &__select {
    flex: 1;
    text-align: left;
    border: none;
    background: transparent;
    padding: 10px 6px;
    font-family: $font-gothic;
    font-size: $font-md;
    color: $text-brown;
    cursor: pointer;
  }

  &__empty {
    margin: 8px 0 0;
    font-size: $font-xs;
    color: rgba(92, 68, 42, 0.5);
    text-align: center;
  }
}
</style>
