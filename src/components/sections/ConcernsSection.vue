<template>
  <section class="concerns-section">
    <!-- 上部：こんなお悩みありませんか？ -->
    <div class="concerns-section__worry">
      <!-- 背景 -->
      <div class="concerns-section__worry-bg">
        <div class="concerns-section__worry-bg-color"></div>
        <picture>
          <source srcset="@/assets/images/concerns-worry-bg.webp" type="image/webp" />
          <img
            src="@/assets/images/concerns-worry-bg.png"
            alt=""
            class="concerns-section__worry-bg-image"
            loading="lazy"
          />
        </picture>
        <div class="concerns-section__worry-bg-overlay"></div>
      </div>

      <!-- タイトル -->
      <h2 class="concerns-section__worry-title">
        <span class="concerns-section__worry-title-normal">こんな</span><span class="concerns-section__worry-title-highlight">お悩み</span><span class="concerns-section__worry-title-normal">ありませんか？</span>
      </h2>

      <!-- 悩みリスト -->
      <ul class="concerns-section__worry-list">
        <li class="concerns-section__worry-item">
          <CheckSquareIcon class="concerns-section__worry-icon" />
          <p class="concerns-section__worry-text">
            ネットの情報だけでは<span class="concerns-section__worry-text-highlight">ペット可かわからない</span>
          </p>
        </li>
        <li class="concerns-section__worry-item">
          <CheckSquareIcon class="concerns-section__worry-icon" />
          <p class="concerns-section__worry-text">
            <span class="concerns-section__worry-text-highlight">物件数が少なく</span>、ペットと暮らせる家が見つからない
          </p>
        </li>
        <li class="concerns-section__worry-item">
          <CheckSquareIcon class="concerns-section__worry-icon" />
          <p class="concerns-section__worry-text">
            <span class="concerns-section__worry-text-highlight">公園や動物病院、トリミングサロン</span>が近い物件の探し方がわからない
          </p>
        </li>
        <li class="concerns-section__worry-item concerns-section__worry-item--no-border">
          <CheckSquareIcon class="concerns-section__worry-icon" />
          <p class="concerns-section__worry-text">
            <span class="concerns-section__worry-text-highlight">専門家の知識</span>をもとに選びたい
          </p>
        </li>
      </ul>
    </div>

    <!-- 中央：そのお悩みバナー -->
    <div class="concerns-section__banner">
      <div class="concerns-section__banner-bg"></div>
      <span class="concerns-section__banner-text">そのお悩み</span>
    </div>

    <!-- 下部：解決エリア -->
    <div class="concerns-section__solution">
      <!-- 背景 -->
      <div class="concerns-section__solution-bg">
        <picture>
          <source srcset="@/assets/images/concerns-solution-bg.webp" type="image/webp" />
          <img
            src="@/assets/images/concerns-solution-bg.png"
            alt=""
            class="concerns-section__solution-bg-image"
            loading="lazy"
          />
        </picture>
        <div class="concerns-section__solution-glow"></div>
      </div>

      <!-- テキスト -->
      <div class="concerns-section__solution-content">
        <p class="concerns-section__solution-sub">
          <span class="concerns-section__solution-sub-main">ペット住まいラボ</span><span class="concerns-section__solution-sub-particle">が</span>
        </p>
        <p class="concerns-section__solution-main">丸ごと解決！</p>
      </div>

      <!-- 選ばれる理由テキスト -->
      <p class="concerns-section__reason-text">
        <span class="concerns-section__reason-text-name">ペット住まいラボ</span><span class="concerns-section__reason-text-small">が</span><span class="concerns-section__reason-text-small">選ばれる</span><span class="concerns-section__reason-text-number">４</span><span class="concerns-section__reason-text-unit">つ</span><span class="concerns-section__reason-text-small">の理由</span>
      </p>

      <!-- グラデーション切り替え部分 -->
      <div class="concerns-section__gradient-bottom"></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CheckSquareIcon from '@/components/icons/CheckSquareIcon.vue';
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.concerns-section {
  position: relative;
  width: 100%;
  max-width: $max-container-width;
  height: 658px;
  margin: 0 auto;
  background: $white;

  // 上部：お悩みエリア
  &__worry {
    position: relative;
    width: 100%;
    height: 359px;
    overflow: hidden;
  }

  &__worry-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  &__worry-bg-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #202122;
  }

  &__worry-bg-image {
    position: absolute;
    top: -54%;
    left: -53%;
    width: 234%;
    height: 163%;
    object-fit: cover;
    opacity: 0.5;
  }

  &__worry-bg-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(34, 43, 56, 0.6);
  }

  &__worry-title {
    position: relative;
    z-index: 5;
    text-align: center;
    margin: 0;
    padding-top: 30px;
    font-family: $font-mincho;
    font-weight: $font-weight-regular;
    font-size: $font-4xl;
    line-height: 38px;
    color: $white;
  }

  &__worry-title-highlight {
    font-size: $font-6xl;
    font-weight: $font-weight-semibold;
    color: $accent-orange;
  }

  &__worry-list {
    position: relative;
    z-index: 5;
    list-style: none;
    max-width: 299px;
    margin: 30px auto 0;
    padding: 0;
  }

  &__worry-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    border-bottom: 1px solid #d9d9d9;

    &--no-border {
      border-bottom: none;
    }
  }

  &__worry-icon {
    flex-shrink: 0;
  }

  &__worry-text {
    font-family: $font-gothic-a1;
    font-size: $font-lg;
    font-weight: $font-weight-medium;
    line-height: 24px;
    color: $white;
    margin: 0;
  }

  &__worry-text-highlight {
    color: $accent-orange;
  }

  // 中央：バナー
  &__banner {
    position: absolute;
    top: 359px;
    left: 0;
    width: 100%;
    height: 72px;
    z-index: 10;
  }

  &__banner-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 52px;
    background: linear-gradient(90deg, #A87045 0%, #C4894A 100%);

    &::after {
      content: '';
      position: absolute;
      bottom: -20px;
      left: 0;
      width: 100%;
      height: 20px;
      background: linear-gradient(90deg, #A87045 0%, #C4894A 100%);
      clip-path: polygon(0 0, 100% 0, 50% 100%);
    }
  }

  &__banner-text {
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    font-family: $font-mincho;
    font-size: $font-4xl;
    font-weight: $font-weight-semibold;
    line-height: 32px;
    color: $white;
    z-index: 5;
  }

  // 下部：解決エリア
  &__solution {
    position: absolute;
    top: 393px;
    left: 0;
    width: 100%;
    height: 265px;
    overflow: hidden;
  }

  &__solution-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 266px;
  }

  &__solution-bg-image {
    position: absolute;
    top: -1%;
    left: -13%;
    width: 126%;
    height: 100%;
    object-fit: cover;
  }

  &__solution-glow {
    position: absolute;
    top: 62px;
    left: 50%;
    transform: translateX(-50%);
    width: 335px;
    height: 134px;
    background: radial-gradient(ellipse at center, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
  }

  &__solution-content {
    position: relative;
    z-index: 5;
    text-align: center;
    padding-top: 68px;
  }

  &__solution-sub {
    font-family: $font-mincho;
    font-weight: $font-weight-regular;
    line-height: 46px;
    color: $text-brown;
    margin: 0;
  }

  &__solution-sub-main {
    font-size: $font-6xl;
    color: #774B35;
  }

  &__solution-sub-particle {
    font-size: $font-4xl;
    color: #774B35;
  }

  &__solution-main {
    font-family: $font-mincho;
    font-size: 52px;
    font-weight: $font-weight-semibold;
    line-height: 52px;
    letter-spacing: -2.6px;
    margin: 0;
    @include gradient-pink-text;
  }

  &__reason-text {
    position: absolute;
    bottom: 44px;
    left: 50%;
    transform: translateX(-50%);
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    line-height: 40px;
    color: $text-brown;
    text-shadow: 0px 0px 4px $white, 0px 0px 4px $white, 0px 0px 10px $white;
    margin: 0;
    white-space: nowrap;
    z-index: 5;
  }

  &__reason-text-name {
    font-size: 20px;
    letter-spacing: -1px;
  }

  &__reason-text-small {
    font-size: 16px;
  }

  &__reason-text-number {
    font-size: 26px;
    letter-spacing: -5.2px;
    color: #E85A00;
  }

  &__reason-text-unit {
    font-size: 16px;
    font-weight: $font-weight-bold;
    color: #E85A00;
  }

  &__gradient-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 35px;
    background: linear-gradient(180deg, rgba(247, 211, 188, 0) 0%, $background-pink 100%);
    z-index: 10;
  }
}
</style>
