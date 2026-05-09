<template>
  <button
    type="button"
    class="present-card"
    :class="{ 'present-card--no-image': !mainImage }"
    @click="emit('open', item)"
  >
    <div class="present-card__image-wrap">
      <img v-if="mainImage" :src="mainImage" :alt="item.title" class="present-card__image" />
      <div v-else class="present-card__image-placeholder">No Image</div>
      <span v-if="item.images.length > 1" class="present-card__image-count">
        +{{ item.images.length - 1 }}
      </span>
    </div>
    <div class="present-card__body">
      <p class="present-card__title">{{ item.title }}</p>
      <p v-if="item.detail" class="present-card__detail">{{ item.detail }}</p>
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, defineProps, defineEmits } from 'vue';
import { PresentItem } from '@/entity/present';

const props = defineProps<{ item: PresentItem }>();
const emit = defineEmits<{ (e: 'open', item: PresentItem): void }>();

const mainImage = computed(() => props.item.images[0] || '');
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.present-card {
  display: grid;
  grid-template-columns: 96px 1fr;
  gap: 12px;
  align-items: stretch;
  width: 100%;
  padding: 10px;
  background: $white;
  border: 1px solid rgba(92, 68, 42, 0.1);
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(92, 68, 42, 0.06);
  cursor: pointer;
  font-family: $font-gothic;
  text-align: left;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 10px rgba(92, 68, 42, 0.12);
  }

  &__image-wrap {
    position: relative;
    width: 96px;
    height: 96px;
    border-radius: 8px;
    overflow: hidden;
    background: #f1ece7;
    flex-shrink: 0;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  &__image-placeholder {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: $font-xs;
    color: rgba(92, 68, 42, 0.4);
  }

  &__image-count {
    position: absolute;
    right: 4px;
    bottom: 4px;
    padding: 2px 6px;
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.55);
    color: $white;
    font-size: 10px;
    font-weight: $font-weight-bold;
    line-height: 1;
  }

  &__body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 4px;
    min-width: 0;
  }

  &__title {
    margin: 0;
    font-size: $font-md;
    font-weight: $font-weight-bold;
    color: $text-brown;
    line-height: 1.4;
  }

  &__detail {
    margin: 0;
    font-size: $font-xs;
    color: $text-brown-light;
    line-height: 1.5;
    white-space: pre-line;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
}
</style>
