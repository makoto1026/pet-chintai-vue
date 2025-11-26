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

    <!-- 見出し -->
    <div class="property-section__header">
      <p class="property-section__subtitle">＼ 安価から高級まで ／</p>
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
import PropertyCard from '@/components/common/PropertyCard.vue';
import backgroundImage from '@/assets/images/property-bg.png';
import propertySampleImage from '@/assets/images/property-sample.png';

const properties = [
  {
    id: 1,
    image: propertySampleImage,
    area: '港区',
    price: '174,000',
    layout: '1R',
    size: '33.2㎡'
  },
  {
    id: 2,
    image: propertySampleImage,
    area: '港区',
    price: '174,000',
    layout: '1R',
    size: '33.2㎡'
  },
  {
    id: 3,
    image: propertySampleImage,
    area: '港区',
    price: '174,000',
    layout: '1R',
    size: '33.2㎡'
  },
  {
    id: 4,
    image: propertySampleImage,
    area: '港区',
    price: '174,000',
    layout: '1R',
    size: '33.2㎡'
  }
];
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.property-section {
  position: relative;
  width: 100%;
  max-width: 375px;
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
