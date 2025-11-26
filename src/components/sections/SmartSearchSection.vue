<template>
  <section class="smart-search">
    <div class="smart-search__content">
      <div class="smart-search__subtitle">
        <span class="smart-search__subtitle-line smart-search__subtitle-line--left"></span>
        <span class="smart-search__subtitle-text">センスのいい賃貸をお探しなら</span>
        <span class="smart-search__subtitle-line smart-search__subtitle-line--right"></span>
      </div>

      <h2 class="smart-search__title">
        <span class="smart-search__title-orange">ペット住まいラボ</span>
        <span class="smart-search__title-brown">で</span>
      </h2>

      <p class="smart-search__main-text">かしこくお部屋探し</p>
    </div>

    <div class="smart-search__image">
      <img src="@/assets/images/smart-search-bg.png" alt="犬と猫" />
    </div>
  </section>
</template>

<script setup lang="ts">
// SmartSearchSection component
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/mixins';

.smart-search {
  background: #fff;
  position: relative;
  padding-top: 30px;

  &__content {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  &__subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-bottom: 6px;
  }

  &__subtitle-text {
    font-family: $font-gothic;
    font-weight: $font-weight-bold;
    font-size: 14px;
    line-height: 14px;
    color: $text-brown;
    letter-spacing: 1.4px;
  }

  &__subtitle-line {
    width: 18px;
    height: 2px;
    background: $text-brown;
    display: block;

    &--left {
      transform: rotate(60deg);
    }

    &--right {
      transform: rotate(-60deg);
    }
  }

  &__title {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 26px;
    line-height: 40px;
    text-align: center;
    margin-bottom: 0;
  }

  &__title-orange {
    background: linear-gradient(180deg, #FF820D 51.22%, #F25608 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  &__title-brown {
    font-size: 22px;
    color: $text-brown;
  }

  &__main-text {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    background: linear-gradient(180deg, #FB6E71 19.231%, #EE4548 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-top: 0;
  }

  &__image {
    position: relative;
    width: 100%;
    height: 178px;
    margin-top: 10px;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 50px;
      background: linear-gradient(to bottom, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
      z-index: 1;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
}
</style>
