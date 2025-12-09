<template>
  <section class="property-section">
    <!-- 背景 -->
    <div class="property-section__background">
      <img
        :src="backgroundImage"
        alt=""
        class="property-section__bg-image"
      />
    </div>

    <!-- 背景装飾 -->
    <div class="property-section__decorations">
      <img
        :src="decorationImage"
        alt=""
        class="property-section__decoration property-section__decoration--1"
      />
      <img
        :src="decorationImage"
        alt=""
        class="property-section__decoration property-section__decoration--2"
      />
      <img
        :src="decorationImage"
        alt=""
        class="property-section__decoration property-section__decoration--3"
      />
      <img
        :src="decorationImage"
        alt=""
        class="property-section__decoration property-section__decoration--4"
      />
    </div>

    <!-- 見出し -->
    <div class="property-section__header">
      <p
        ref="subtitleRef"
        :class="['property-section__subtitle', { 'property-section__subtitle--animated': isSubtitleVisible }]"
      >＼ 安価から高級まで ／</p>
      <p class="property-section__title-top">
        <span class="property-section__title-brand">ペット住まいラボ</span>
        <span class="property-section__title-suffix">なら</span>
      </p>
      <h2 class="property-section__title-main">物件が選び放題</h2>
    </div>

    <!-- 物件カード -->
    <div class="property-section__grid">
      <PropertyCard
        v-for="property in properties"
        :key="property.id"
        :image="property.image"
        :area="property.area"
        :price="property.price"
        :layout="property.layout"
        :size="property.size"
      />
    </div>

    <!-- etc... -->
    <p class="property-section__etc">etc...</p>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import PropertyCard from '@/components/common/PropertyCard.vue';
import backgroundImageWebp from '@/assets/images/property-bg.webp';
import backgroundImagePng from '@/assets/images/property-bg.png';
import decorationImage from '@/assets/images/properties-bg-decoration.png';
import propertySampleImage from '@/assets/images/property-sample.png';

// WebP対応チェック
const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};
const backgroundImage = supportsWebP() ? backgroundImageWebp : backgroundImagePng;
import yoyogiImage from '@/assets/images/properties/yoyogi.jpg';
import kasaiImage from '@/assets/images/properties/kasai.jpg';
import shinNakanoImage from '@/assets/images/properties/shin-nakano.jpg';
import shibuyaImage from '@/assets/images/properties/shibuya.jpg';

// スクロールアニメーション用
const subtitleRef = ref<HTMLElement | null>(null);
const isSubtitleVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isSubtitleVisible.value = entry.isIntersecting;
      });
    },
    { threshold: 0.3 }
  );
  if (subtitleRef.value) {
    observer.observe(subtitleRef.value);
  }
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

const properties = [
  {
    id: 1,
    image: yoyogiImage,
    area: '渋谷区',
    price: '210,000',
    layout: '1DK',
    size: '33㎡'
  },
  {
    id: 2,
    image: shibuyaImage,
    area: '渋谷区',
    price: '未公開',
    layout: '2LDK',
    size: '91㎡'
  },
  {
    id: 3,
    image: kasaiImage,
    area: '江戸川区',
    price: '136,000',
    layout: '1DK',
    size: '41㎡'
  },
  {
    id: 4,
    image: shinNakanoImage,
    area: '中野区',
    price: '120,000',
    layout: '2DK',
    size: '41㎡'
  }
];
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.property-section {
  position: relative;
  width: 100%;
  max-width: $max-container-width;
  margin: 0 auto;
  padding: 30px 0 50px;
  overflow: hidden;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #d1d1d1;
  }

  &__bg-image {
    width: 178%;
    height: 100%;
    object-fit: cover;
    margin-left: -40%;
  }

  &__decorations {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 660px;
    overflow: hidden;
    z-index: 0;
    pointer-events: none;
  }

  &__decoration {
    position: absolute;
    width: 276px;
    height: 295px;
    object-fit: cover;

    // 左下の装飾
    &--1 {
      left: -109px;
      top: 439px;
      transform: rotate(300.6deg);
    }

    // 右上の装飾
    &--2 {
      left: 123px;
      top: -147px;
      transform: rotate(100.7deg);
    }

    // 右中央の装飾
    &--3 {
      left: 154px;
      top: 222px;
      transform: rotate(182.4deg);
    }

    // 左上の装飾
    &--4 {
      left: -163px;
      top: -106px;
      transform: rotate(18deg) scaleY(-1);
    }
  }

  &__header {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-bottom: 20px;
  }

  &__subtitle {
    font-family: $font-gothic-a1;
    font-weight: $font-weight-bold;
    font-size: $font-md;
    line-height: 14px;
    letter-spacing: 1.4px;
    color: $text-brown;
    margin: 0 0 6px;
    transform: scaleX(0);
    opacity: 0;

    &--animated {
      animation: expandFromCenter 1s ease-out forwards;
    }
  }

  @keyframes expandFromCenter {
    0% {
      transform: scaleX(0);
      opacity: 0;
    }
    50% {
      transform: scaleX(1.15);
      opacity: 1;
    }
    100% {
      transform: scaleX(1);
      opacity: 1;
    }
  }

  &__title-top {
    font-family: $font-mincho;
    line-height: 46px;
    color: $text-brown;
    margin: 0;
  }

  &__title-brand {
    font-weight: $font-weight-semibold;
    font-size: $font-6xl;
  }

  &__title-suffix {
    font-weight: $font-weight-regular;
    font-size: $font-4xl;
  }

  &__title-main {
    position: relative;
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: $font-8xl;
    line-height: 40px;
    letter-spacing: -2px;
    margin: 0;
    @include gradient-pink-text;

    // 白い影を疑似要素で作成
    &::before {
      content: '物件が選び放題';
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      color: $white;
      -webkit-text-fill-color: $white;
      text-shadow:
        0px 0px 4px $white,
        0px 0px 4px $white,
        0px 0px 10px $white;
      z-index: -1;
    }
  }

  &__grid {
    position: relative;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    width: 350px;
    margin: 0 auto;
  }

  &__etc {
    position: relative;
    z-index: 1;
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: $font-lg;
    line-height: 24px;
    color: $text-brown;
    text-align: center;
    margin: 20px 0 0;
    text-shadow:
      0px 0px 4px $white,
      0px 0px 4px $white,
      0px 0px 10px $white;
  }
}
</style>
