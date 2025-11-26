<template>
  <section class="safety-section">
    <!-- 背景画像 -->
    <div class="safety-section__background">
      <img :src="backgroundImage" alt="" class="safety-section__bg-image" />
      <div class="safety-section__bg-overlay"></div>
    </div>

    <!-- 白枠ベース -->
    <div class="safety-section__card">
      <!-- 見出し -->
      <div class="safety-section__header">
        <p class="safety-section__subtitle">
          <span class="safety-section__subtitle-brand">ペット住まいラボ</span>
          <span class="safety-section__subtitle-suffix">の</span>
        </p>
        <h2 class="safety-section__title">安心ポイント</h2>
      </div>

      <!-- ポイント一覧 -->
      <div class="safety-section__points">
        <div class="safety-section__point">
          <CheckCircleIcon class="safety-section__check-icon" />
          <p class="safety-section__point-text">
            <span class="safety-section__point-highlight">ペットにも優しいお部屋</span>
            <span class="safety-section__point-normal">が探せる</span>
          </p>
          <div class="safety-section__marker safety-section__marker--1"></div>
        </div>
        <div class="safety-section__divider"></div>
        <div class="safety-section__point">
          <CheckCircleIcon class="safety-section__check-icon" />
          <p class="safety-section__point-text">
            <span class="safety-section__point-highlight">周辺環境</span>
            <span class="safety-section__point-normal">を整えられる</span>
          </p>
          <div class="safety-section__marker safety-section__marker--2"></div>
        </div>
        <div class="safety-section__divider"></div>
      </div>

      <!-- 見出し2 -->
      <div class="safety-section__footer">
        <p class="safety-section__footer-text">
          <span class="safety-section__footer-large">安心</span>
          <span class="safety-section__footer-small">して</span>
          <span class="safety-section__footer-large">お気軽</span>
          <span class="safety-section__footer-small">に</span>
        </p>
        <p class="safety-section__footer-cta">お問い合わせください！</p>
      </div>
    </div>

    <!-- 白グラデ切り替え -->
    <div class="safety-section__gradient-bottom"></div>
  </section>
</template>

<script setup lang="ts">
import CheckCircleIcon from '@/components/icons/CheckCircleIcon.vue';
import backgroundImage from '@/assets/images/safety-bg.png';
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.safety-section {
  position: relative;
  width: 100%;
  max-width: 375px;
  height: 396px;
  margin: 0 auto;
  overflow: hidden;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  &__bg-image {
    width: 100%;
    height: 121.75%;
    object-fit: cover;
    margin-top: -3.93%;
  }

  &__bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(255, 255, 255, 0.3);
  }

  &__card {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 335px;
    height: 316px;
    background: $white;
    z-index: 1;
  }

  &__header {
    text-align: center;
    padding-top: 20px;
  }

  &__subtitle {
    font-family: $font-mincho;
    line-height: 46px;
    color: $text-brown;
    margin: 0;
  }

  &__subtitle-brand {
    font-weight: $font-weight-semibold;
    font-size: 26px;
  }

  &__subtitle-suffix {
    font-weight: $font-weight-regular;
    font-size: $font-4xl;
  }

  &__title {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: -2px;
    margin: 0;
    @include gradient-orange-text;
  }

  &__points {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 295px;
    margin: 30px auto 0;
  }

  &__point {
    position: relative;
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }

  &__check-icon {
    flex-shrink: 0;
    margin-top: 2px;
  }

  &__point-text {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    line-height: 24px;
    margin: 0;
  }

  &__point-highlight {
    font-weight: $font-weight-bold;
    font-size: 17px;
    color: $primary;
  }

  &__point-normal {
    font-size: $font-md;
    color: $text-brown;
  }

  &__marker {
    position: absolute;
    height: 15px;
    background: linear-gradient(
      90deg,
      rgba(255, 242, 145, 0.8) 0%,
      rgba(255, 242, 145, 0.8) 100%
    );
    mix-blend-mode: multiply;
    z-index: -1;

    &--1 {
      left: 30px;
      top: 7px;
      width: 188px;
    }

    &--2 {
      left: 30px;
      top: 7px;
      width: 70px;
    }
  }

  &__divider {
    width: 295px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      #e0d5c9 20%,
      #e0d5c9 80%,
      transparent 100%
    );
  }

  &__footer {
    text-align: center;
    margin-top: 20px;
  }

  &__footer-text {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    line-height: 30px;
    color: $text-brown;
    margin: 0;
  }

  &__footer-large {
    font-size: 20px;
  }

  &__footer-small {
    font-size: 18px;
  }

  &__footer-cta {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 24px;
    line-height: 30px;
    letter-spacing: -0.96px;
    margin: 0;
    @include gradient-pink-text;
  }

  &__gradient-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      $white 100%
    );
    z-index: 2;
  }
}
</style>
