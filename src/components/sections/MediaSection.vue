<template>
  <section class="media-section">
    <!-- 背景 -->
    <div class="media-section__bg">
      <img
        src="@/assets/images/media-bg.png"
        alt=""
        class="media-section__bg-image"
      />
      <div class="media-section__bg-overlay"></div>
    </div>

    <!-- 左装飾 -->
    <div class="media-section__decoration media-section__decoration--left">
      <img
        src="@/assets/images/media-wreath.png"
        alt=""
        class="media-section__wreath media-section__wreath--left"
      />
    </div>

    <!-- 右装飾 -->
    <div class="media-section__decoration media-section__decoration--right">
      <img
        src="@/assets/images/media-wreath.png"
        alt=""
        class="media-section__wreath"
      />
    </div>

    <!-- キラキラ左 -->
    <img
      src="@/assets/images/media-sparkle.png"
      alt=""
      class="media-section__sparkle media-section__sparkle--left"
    />

    <!-- キラキラ右 -->
    <img
      src="@/assets/images/media-sparkle.png"
      alt=""
      class="media-section__sparkle media-section__sparkle--right"
    />

    <!-- 葉っぱ装飾 左 -->
    <img
      src="@/assets/images/media-leaf.png"
      alt=""
      class="media-section__leaf media-section__leaf--left"
    />

    <!-- 葉っぱ装飾 右 -->
    <img
      src="@/assets/images/media-leaf.png"
      alt=""
      class="media-section__leaf media-section__leaf--right"
    />

    <!-- テキスト -->
    <div class="media-section__content">
      <p class="media-section__title">
        <span class="media-section__title-line">
          <span class="media-section__title-main">メディア掲載</span><span class="media-section__title-amp">&amp;</span>
        </span>
        <span class="media-section__title-line">
          <span class="media-section__title-main">有名人</span><span class="media-section__title-sub">の方のご依頼も</span>
        </span>
      </p>
      <p class="media-section__subtitle">多数いただいております！</p>
    </div>
  </section>
</template>

<script setup lang="ts">
// メディア掲載セクション
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.media-section {
  position: relative;
  width: 100%;
  max-width: $max-container-width;
  height: 194px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: $white;

  // 背景
  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__bg-image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 25%
    );
  }

  // 装飾（月桂冠）
  &__decoration {
    position: absolute;
    top: 50%;
    transform: translateY(calc(-50% + 2px));
    width: 60px;
    height: 126px;
    z-index: 2;

    &--left {
      left: 20px;
    }

    &--right {
      right: 20px;
    }
  }

  &__wreath {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &--left {
      transform: scaleX(-1);
    }
  }

  // キラキラ
  &__sparkle {
    position: absolute;
    z-index: 3;
    pointer-events: none;

    &--left {
      top: 17px;
      left: 4px;
      width: 42px;
      height: 42px;
      transform: rotate(185.656deg);
    }

    &--right {
      top: 129px;
      right: 20px;
      width: 48px;
      height: 48px;
      transform: rotate(117.064deg);
    }
  }

  // 葉っぱ
  &__leaf {
    position: absolute;
    top: 85px;
    width: 46px;
    height: 37px;
    object-fit: cover;
    z-index: 2;

    &--left {
      left: 35px;
    }

    &--right {
      right: 36px;
      transform: rotate(180deg) scaleY(-1);
    }
  }

  // コンテンツ
  &__content {
    position: relative;
    z-index: 5;
    text-align: center;
  }

  &__title {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    color: $text-brown;
    margin: 0;
    line-height: 36px;
  }

  &__title-line {
    display: block;
  }

  &__title-main {
    font-size: $font-5xl;
  }

  &__title-amp {
    font-size: 21px;
  }

  &__title-sub {
    font-size: 21px;
  }

  &__subtitle {
    font-family: $font-mincho;
    font-size: $font-2xl;
    font-weight: $font-weight-semibold;
    color: $text-brown;
    line-height: 26px;
    margin: 6px 0 0;
  }
}
</style>
