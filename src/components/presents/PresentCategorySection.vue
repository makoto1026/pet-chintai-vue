<template>
  <section class="present-category">
    <h2 class="present-category__title">{{ category.name }}</h2>
    <p v-if="category.cautionText" class="present-category__caution">
      {{ category.cautionText }}
    </p>
    <div v-if="items.length > 0" class="present-category__list">
      <PresentCard
        v-for="item in items"
        :key="item.id"
        :item="item"
        @open="(it) => emit('open-item', it)"
      />
    </div>
    <p v-else class="present-category__empty">登録されているプレゼントはありません</p>
  </section>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { PresentCategory, PresentItem } from '@/entity/present';
import PresentCard from './PresentCard.vue';

defineProps<{
  category: PresentCategory;
  items: PresentItem[];
}>();

const emit = defineEmits<{ (e: 'open-item', item: PresentItem): void }>();
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.present-category {
  padding: 16px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.6);

  &__title {
    margin: 0 0 8px;
    padding-left: 10px;
    font-family: $font-mincho;
    font-size: $font-3xl;
    font-weight: $font-weight-semibold;
    color: $text-brown;
    line-height: 1.3;
    border-left: 4px solid $primary;
  }

  &__caution {
    margin: 0 0 12px;
    padding: 8px 10px;
    background: rgba(248, 134, 88, 0.08);
    border-left: 3px solid $primary;
    border-radius: 4px;
    font-family: $font-gothic;
    font-size: $font-xs;
    color: $text-brown-light;
    line-height: 1.6;
    white-space: pre-line;
  }

  // 縦 1 列 → grid-template-columns を変えるだけでグリッド化可能
  &__list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  &__empty {
    margin: 0;
    padding: 16px;
    text-align: center;
    font-family: $font-gothic;
    font-size: $font-xs;
    color: rgba(92, 68, 42, 0.5);
  }
}
</style>
