<template>
  <Teleport to="body">
    <div class="gallery" role="dialog" aria-modal="true" @click.self="emit('close')">
      <button
        type="button"
        class="gallery__close"
        aria-label="閉じる"
        @click="emit('close')"
      >×</button>

      <div class="gallery__inner">
        <div class="gallery__image-wrap">
          <img
            v-if="currentImage"
            :src="currentImage"
            :alt="`${item.title} 画像 ${currentIndex + 1}`"
            class="gallery__image"
          />
          <div v-else class="gallery__no-image">No Image</div>

          <button
            v-if="hasMultiple"
            type="button"
            class="gallery__nav gallery__nav--prev"
            aria-label="前の画像"
            @click="prev"
          >‹</button>
          <button
            v-if="hasMultiple"
            type="button"
            class="gallery__nav gallery__nav--next"
            aria-label="次の画像"
            @click="next"
          >›</button>

          <span v-if="hasMultiple" class="gallery__counter">
            {{ currentIndex + 1 }} / {{ item.images.length }}
          </span>
        </div>

        <div v-if="hasMultiple" class="gallery__thumbs">
          <button
            v-for="(img, i) in item.images"
            :key="i"
            type="button"
            class="gallery__thumb"
            :class="{ 'gallery__thumb--active': i === currentIndex }"
            @click="currentIndex = i"
          >
            <img :src="img" :alt="`サムネイル ${i + 1}`" />
          </button>
        </div>

        <div class="gallery__meta">
          <h3 class="gallery__title">{{ item.title }}</h3>
          <p v-if="item.detail" class="gallery__detail">{{ item.detail }}</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineProps, defineEmits } from 'vue';
import { PresentItem } from '@/entity/present';

const props = defineProps<{ item: PresentItem }>();
const emit = defineEmits<{ (e: 'close'): void }>();

const currentIndex = ref(0);
const currentImage = computed(() => props.item.images[currentIndex.value] || '');
const hasMultiple = computed(() => props.item.images.length > 1);

const next = () => {
  if (props.item.images.length === 0) return;
  currentIndex.value = (currentIndex.value + 1) % props.item.images.length;
};
const prev = () => {
  if (props.item.images.length === 0) return;
  currentIndex.value =
    (currentIndex.value - 1 + props.item.images.length) % props.item.images.length;
};

const handleKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') emit('close');
  if (e.key === 'ArrowRight') next();
  if (e.key === 'ArrowLeft') prev();
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

.gallery {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 60px 16px 24px;

  &__close {
    position: absolute;
    top: 12px;
    right: 12px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.15);
    color: $white;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;

    &:hover {
      background: rgba(255, 255, 255, 0.25);
    }
  }

  &__inner {
    width: 100%;
    max-width: 480px;
    max-height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  &__image-wrap {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 8px;
    overflow: hidden;
    flex-shrink: 0;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }

  &__no-image {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255, 255, 255, 0.5);
    font-family: $font-gothic;
    font-size: $font-md;
  }

  &__nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 36px;
    height: 36px;
    border: none;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.4);
    color: $white;
    font-size: 24px;
    line-height: 1;
    cursor: pointer;

    &--prev { left: 8px; }
    &--next { right: 8px; }

    &:hover { background: rgba(0, 0, 0, 0.6); }
  }

  &__counter {
    position: absolute;
    bottom: 8px;
    right: 12px;
    padding: 2px 8px;
    background: rgba(0, 0, 0, 0.55);
    border-radius: 10px;
    color: $white;
    font-size: 11px;
    font-family: $font-gothic;
  }

  &__thumbs {
    display: flex;
    gap: 6px;
    overflow-x: auto;
    padding: 2px 0;
    flex-shrink: 0;
  }

  &__thumb {
    flex-shrink: 0;
    width: 56px;
    height: 56px;
    padding: 0;
    border-radius: 6px;
    border: 2px solid transparent;
    overflow: hidden;
    background: transparent;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    &--active {
      border-color: $primary;
    }
  }

  &__meta {
    color: $white;
    font-family: $font-gothic;
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    min-height: 0;
  }

  &__title {
    margin: 0 0 6px;
    font-size: $font-lg;
    font-weight: $font-weight-bold;
    flex-shrink: 0;
  }

  &__detail {
    margin: 0;
    font-size: $font-sm;
    line-height: 1.6;
    white-space: pre-line;
    color: rgba(255, 255, 255, 0.85);
    flex: 1 1 auto;
    min-height: 0;
    overflow-y: auto;
    overscroll-behavior: contain;
    -webkit-overflow-scrolling: touch;
  }
}
</style>
