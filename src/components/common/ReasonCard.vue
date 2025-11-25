<template>
  <div class="reason-card">
    <!-- ポイント番号（SVG画像） -->
    <img
      :src="pointImage"
      :alt="`Point ${number}`"
      class="reason-card__point"
    />

    <!-- メインコンテンツ -->
    <div class="reason-card__main">
      <!-- 画像エリア -->
      <div class="reason-card__image-wrapper">
        <img
          :src="image"
          :alt="title"
          class="reason-card__image"
        />
        <div class="reason-card__image-overlay"></div>
      </div>

      <!-- テキストエリア -->
      <div class="reason-card__content">
        <h3 class="reason-card__title">
          <span class="reason-card__title-highlight">{{ titleHighlight }}</span><span class="reason-card__title-normal">{{ titleNormal }}</span>
        </h3>
        <div class="reason-card__divider"></div>
        <p class="reason-card__description">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  number: {
    type: String,
    required: true
  },
  pointImage: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  titleHighlight: {
    type: String,
    required: true
  },
  titleNormal: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.reason-card {
  position: relative;
  width: 335px;
  margin: 0 auto;
  padding-top: 32px;

  &__point {
    position: absolute;
    top: 0;
    left: 10px;
    width: 158px;
    height: 52px;
    z-index: 5;
  }

  &__main {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  }

  &__image-wrapper {
    position: relative;
    width: 100%;
    height: 160px;
    overflow: hidden;
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('@/assets/images/concerns-solution-bg.png');
    background-size: cover;
    mix-blend-mode: soft-light;
    opacity: 0.3;
    pointer-events: none;
  }

  &__content {
    background: $white;
    padding: 30px 20px;
  }

  &__title {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: $font-4xl;
    line-height: 32px;
    color: $text-brown;
    margin: 0;
  }

  &__title-highlight {
    font-size: $font-6xl;
    @include gradient-orange-text;
  }

  &__title-normal {
    font-size: $font-4xl;
  }

  &__divider {
    width: 100%;
    height: 1px;
    background: $text-brown;
    opacity: 0.3;
    margin: 20px 0;
  }

  &__description {
    font-family: $font-gothic-a1;
    font-size: $font-lg;
    font-weight: $font-weight-medium;
    line-height: 24px;
    color: $text-brown;
    margin: 0;
  }
}
</style>
