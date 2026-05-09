<template>
  <section class="testimonials-section">
    <!-- 背景素材 -->
    <div class="testimonials-section__bg">
      <img
        :src="bgImage"
        alt=""
        class="testimonials-section__bg-1"
      />
      <img
        :src="bgImage"
        alt=""
        class="testimonials-section__bg-2"
      />
      <img
        :src="bgImage"
        alt=""
        class="testimonials-section__bg-3"
      />
      <img
        :src="bgImage"
        alt=""
        class="testimonials-section__bg-4"
      />
    </div>

    <!-- 見出し -->
    <div class="testimonials-section__header">
      <p
        ref="subtitleRef"
        :class="['testimonials-section__subtitle', { 'testimonials-section__subtitle--animated': isSubtitleVisible }]"
      >
        <img :src="slashRightImage" alt="" class="testimonials-section__slash testimonials-section__slash--left" />
        <span>こんな方にご利用いただいています</span>
        <img :src="slashLeftImage" alt="" class="testimonials-section__slash testimonials-section__slash--right" />
      </p>
      <h2 class="testimonials-section__title">お客様のお声</h2>
    </div>

    <!-- もっと見るボタン -->
    <div class="testimonials-section__more">
      <div class="testimonials-section__more-item">
        <img :src="sparkleImage" alt="" class="testimonials-section__more-sparkle testimonials-section__more-sparkle--tl" />
        <img :src="sparkleImage" alt="" class="testimonials-section__more-sparkle testimonials-section__more-sparkle--br" />
        <a
          href="https://petchintai.com/review/rental"
          target="_blank"
          rel="noopener noreferrer"
          class="testimonials-section__more-button"
        >
          <span class="testimonials-section__more-line">賃貸のお客様の声</span>
        </a>
      </div>
      <div class="testimonials-section__more-item testimonials-section__more-item--delay">
        <img :src="sparkleImage" alt="" class="testimonials-section__more-sparkle testimonials-section__more-sparkle--tl" />
        <img :src="sparkleImage" alt="" class="testimonials-section__more-sparkle testimonials-section__more-sparkle--br" />
        <a
          href="https://petchintai.com/review/sales"
          target="_blank"
          rel="noopener noreferrer"
          class="testimonials-section__more-button testimonials-section__more-button--gold"
        >
          <span class="testimonials-section__more-line">売買のお客様の声</span>
        </a>
      </div>
    </div>

    <!-- Voice 1 -->
    <div class="testimonials-section__voice">
      <div class="testimonials-section__voice-left">
        <img :src="voice1Icon" alt="Voice 1" class="testimonials-section__voice-label" />
        <p class="testimonials-section__voice-customer">30代女性 R様</p>
        <div class="testimonials-section__voice-heading">
          <span class="testimonials-section__voice-heading-line">保護猫と暮らせる</span>
          <span class="testimonials-section__voice-heading-line">理想の家！</span>
        </div>
      </div>
      <div class="testimonials-section__voice-right">
        <div class="testimonials-section__voice-image-container">
          <img :src="voice1Image" alt="Voice 1のお客様" class="testimonials-section__voice-image" />
          <img :src="redLineImage" alt="" class="testimonials-section__red-line" />
        </div>
      </div>
      <p class="testimonials-section__voice-text">
        保護猫をお迎えしたくて、ペット住まいラボに相談しました！<br />保護団体ともたくさんコネクションを持っていて、<br />猫ちゃんの紹介までありがとうございました♡<br />素敵なお部屋で楽しく暮らせています。
      </p>
    </div>
    <div class="testimonials-section__divider"></div>

    <!-- Voice 2 -->
    <div class="testimonials-section__voice">
      <div class="testimonials-section__voice-left">
        <img :src="voice2Icon" alt="Voice 2" class="testimonials-section__voice-label" />
        <p class="testimonials-section__voice-customer">20代男性 T様</p>
        <div class="testimonials-section__voice-heading">
          <span class="testimonials-section__voice-heading-line">上京のタイミングで、</span>
          <span class="testimonials-section__voice-heading-line">見つけて本当によかった！</span>
        </div>
      </div>
      <div class="testimonials-section__voice-right">
        <div class="testimonials-section__voice-image-container">
          <img :src="voice2Image" alt="Voice 2のお客様" class="testimonials-section__voice-image" />
          <img :src="redLineImage" alt="" class="testimonials-section__red-line" />
        </div>
      </div>
      <p class="testimonials-section__voice-text">
        立地や路線がわからない僕にも、<br />女性の担当者が親身になってご紹介してくれました！<br />24時間対応してくださり、しかも女性の方ばかりで優しくてとても安心しました。
      </p>
    </div>
    <div class="testimonials-section__divider"></div>

    <!-- Voice 3 -->
    <div class="testimonials-section__voice">
      <div class="testimonials-section__voice-left">
        <img :src="voice3Icon" alt="Voice 3" class="testimonials-section__voice-label" />
        <p class="testimonials-section__voice-customer">20代女性 S様</p>
        <div class="testimonials-section__voice-heading">
          <span class="testimonials-section__voice-heading-line">多頭飼いでも</span>
          <span class="testimonials-section__voice-heading-line">どんとこい！</span>
        </div>
      </div>
      <div class="testimonials-section__voice-right">
        <div class="testimonials-section__voice-image-container">
          <img :src="voice3Image" alt="Voice 3のお客様" class="testimonials-section__voice-image" />
          <img :src="redLineImage" alt="" class="testimonials-section__red-line" />
        </div>
      </div>
      <p class="testimonials-section__voice-text">
        公園やドッグランが周辺にある物件や、動物病院・ペットホテル・トリミングサロンが徒歩圏内の物件など、ペット仕様にカスタマイズしてくれました✨<br />ペットの交渉までありがとうございました！
      </p>
    </div>
    <div class="testimonials-section__divider"></div>

    <!-- Voice 4 -->
    <div class="testimonials-section__voice">
      <div class="testimonials-section__voice-left">
        <img :src="voice4Icon" alt="Voice 4" class="testimonials-section__voice-label" />
        <p class="testimonials-section__voice-customer">40代男性 K様</p>
        <div class="testimonials-section__voice-heading">
          <span class="testimonials-section__voice-heading-line">大型犬や爬虫類・鳥類・小動物等</span>
          <span class="testimonials-section__voice-heading-line">犬猫以外の動物とも暮らしたい</span>
        </div>
      </div>
      <div class="testimonials-section__voice-right">
        <div class="testimonials-section__voice-image-container">
          <img :src="voice4Image" alt="Voice 4のお客様" class="testimonials-section__voice-image" />
          <img :src="redLineImage" alt="" class="testimonials-section__red-line" />
        </div>
      </div>
      <p class="testimonials-section__voice-text">
        ワンちゃんや猫ちゃんはもちろんのこと、爬虫類や鳥類、小動物等のペットと暮らせる物件探しもしてくれました！<br />契約時に、ペットへのプレゼントも付いてきました！🎁<br />至れり尽くせりです！笑
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import bgImageWebp from '@/assets/images/testimonial-bg.webp';
import bgImagePng from '@/assets/images/testimonial-bg.png';
import voice1Icon from '@/assets/images/voice1.svg';

// WebP対応チェック
const supportsWebP = () => {
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};
const bgImage = supportsWebP() ? bgImageWebp : bgImagePng;
import voice2Icon from '@/assets/images/voice2.svg';
import voice3Icon from '@/assets/images/voice3.svg';
import voice4Icon from '@/assets/images/voice4.svg';
import redLineImage from '@/assets/images/red-line.svg';
import slashLeftImage from '@/assets/images/testimonial-slash-left.svg';
import slashRightImage from '@/assets/images/testimonial-slash-right.svg';
import sparkleImage from '@/assets/images/media-sparkle.png';
import voice1Image from '@/assets/images/voicease/voice1.jpg';
import voice2Image from '@/assets/images/voicease/voice2.jpg';
import voice3Image from '@/assets/images/voicease/voice3.jpg';
import voice4Image from '@/assets/images/voicease/voice4.jpg';

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
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.testimonials-section {
  position: relative;
  width: 100%;
  max-width: $max-container-width;
  margin: 0 auto;
  padding: 30px 20px 0;
  box-sizing: border-box;
  background: $white;
  overflow: hidden;

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }

  &__bg-1,
  &__bg-2,
  &__bg-3,
  &__bg-4 {
    position: absolute;
    width: 270px;
    height: 260px;
    object-fit: contain;
    opacity: 0.4;
  }

  &__bg-1 {
    left: -56px;
    top: 65px;
    transform: rotate(190deg);
  }

  &__bg-2 {
    right: -56px;
    top: 228px;
    transform: rotate(13deg);
  }

  &__bg-3 {
    left: -56px;
    top: 665px;
    transform: rotate(190deg);
  }

  &__bg-4 {
    right: -56px;
    top: 838px;
    transform: rotate(13deg);
  }

  &__header {
    position: relative;
    z-index: 1;
    text-align: center;
    margin-bottom: 30px;
  }

  &__subtitle {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: $font-gothic-a1;
    font-weight: $font-weight-bold;
    font-size: $font-sm;
    line-height: 14px;
    letter-spacing: 1.4px;
    color: $text-brown;
    margin: 0 0 10px;
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

  &__slash {
    width: 9px;
    height: 16px;
  }

  &__title {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 40px;
    line-height: 40px;
    letter-spacing: -2px;
    margin: 0;
    @include gradient-pink-text;
  }

  &__voice {
    position: relative;
    z-index: 1;
    margin-bottom: 20px;
  }

  &__voice-left {
    position: relative;
  }

  &__voice-label {
    width: 112px;
    height: 36px;
    object-fit: contain;
    margin-bottom: 10px;
  }

  &__voice-customer {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: $font-xs;
    line-height: 20px;
    color: $text-brown;
    margin: 0 0 10px;
  }

  &__voice-heading {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 10px;
    position: relative;
    z-index: 3;
  }

  &__voice-heading-line {
    display: inline-block;
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 15px;
    line-height: 24px;
    color: $white;
    background: linear-gradient(90deg, #5c442a 0%, #ee7f81 100%);
    padding: 2px 5px 4px;
    width: fit-content;
    white-space: nowrap;
  }

  &__voice-right {
    position: absolute;
    top: 0;
    right: 0;
    width: 114px;
    height: 143px;
  }

  &__voice-image-placeholder {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #d9d9d9;
      clip-path: polygon(30px 0, 100% 0, 100% 100%, 0 100%, 0 30px);
    }
  }

  &__voice-image-container {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: visible;
  }

  &__voice-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    clip-path: polygon(30px 0, 100% 0, 100% 100%, 0 100%, 0 30px);
  }

  &__red-line {
    position: absolute;
    top: -25px;
    left: -5px;
    width: 40px;
    height: 80px;
    z-index: 2;
  }

  &__voice-text {
    font-family: $font-gothic-a1;
    font-weight: $font-weight-medium;
    font-size: 13px;
    line-height: 20px;
    color: $text-brown;
    margin: 0;
  }

  &__more {
    position: relative;
    z-index: 1;
    display: flex;
    gap: 10px;
    margin: 30px 0;
    padding: 12px 4px 16px;
  }

  &__more-item {
    position: relative;
    flex: 1;
    animation: testimonialMoreBounce 1.8s ease-in-out infinite;

    &--delay {
      animation-delay: 0.3s;
    }
  }

  @keyframes testimonialMoreBounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-6px);
    }
  }

  &__more-sparkle {
    position: absolute;
    width: 22px;
    height: 22px;
    object-fit: contain;
    pointer-events: none;
    z-index: 2;
    opacity: 0;
    animation: testimonialMoreTwinkle 1.6s ease-in-out infinite;

    &--tl {
      top: -10px;
      left: -8px;
      transform: rotate(-15deg);
    }

    &--br {
      bottom: -6px;
      right: -6px;
      width: 16px;
      height: 16px;
      transform: rotate(160deg);
      animation-delay: 0.8s;
    }
  }

  @keyframes testimonialMoreTwinkle {
    0%, 100% {
      opacity: 0;
      filter: brightness(0.9);
    }
    40%, 60% {
      opacity: 1;
      filter: brightness(1.2);
    }
  }

  &__more-button {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    padding: 14px 8px;
    border-radius: 8px;
    background: linear-gradient(90deg, #5c442a 0%, #ee7f81 100%);
    color: $white;
    text-decoration: none;
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: $font-md;
    line-height: 20px;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 10px rgba(92, 68, 42, 0.25);
    overflow: hidden;
    transition: box-shadow 0.2s ease, filter 0.2s ease;

    // シマー（光沢の流れ）
    &::before {
      content: '';
      position: absolute;
      top: -50%;
      left: -75%;
      width: 50%;
      height: 200%;
      background: linear-gradient(
        115deg,
        transparent 0%,
        transparent 40%,
        rgba(255, 255, 255, 0.55) 50%,
        transparent 60%,
        transparent 100%
      );
      transform: skewX(-20deg);
      animation: testimonialMoreShimmer 3.2s ease-in-out infinite;
      pointer-events: none;
    }

    &:hover {
      filter: brightness(1.05);
      box-shadow: 0 6px 14px rgba(92, 68, 42, 0.3);
    }

    &:active {
      filter: brightness(0.97);
      box-shadow: 0 2px 4px rgba(92, 68, 42, 0.25);
    }

    &--gold {
      background: linear-gradient(90deg, #5c442a 0%, #d4a849 100%);

      &::before {
        animation-delay: 1.2s;
      }
    }
  }

  @keyframes testimonialMoreShimmer {
    0% {
      left: -75%;
    }
    60%, 100% {
      left: 125%;
    }
  }

  &__more-line {
    display: block;
    white-space: nowrap;
    position: relative;
    z-index: 1;
  }

  &__divider {
    width: 335px;
    height: 1.4px;
    background: repeating-linear-gradient(
      90deg,
      #d5cabe 0px,
      #d5cabe 4px,
      transparent 4px,
      transparent 8px
    );
    mask-image: linear-gradient(
      90deg,
      transparent 0%,
      black 5%,
      black 95%,
      transparent 100%
    );
    -webkit-mask-image: linear-gradient(
      90deg,
      transparent 0%,
      black 5%,
      black 95%,
      transparent 100%
    );
    margin: 30px 0;
    position: relative;
    z-index: 1;
  }
}
</style>
