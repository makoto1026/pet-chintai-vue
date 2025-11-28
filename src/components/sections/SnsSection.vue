<template>
  <section ref="sectionRef" class="sns-section">
    <!-- 背景白部分 -->
    <div class="sns-section__card">
      <!-- スマホモック（2つ重なっている） -->
      <div
        :class="['sns-section__phone-mock', { 'sns-section__phone-mock--animated': isPhoneVisible }]"
      >
        <div class="sns-section__phone-back">
          <img
            :src="phoneMockImage"
            alt=""
            class="sns-section__phone-back-image"
          />
        </div>
        <div class="sns-section__phone-front">
          <img
            :src="phoneMockImage"
            alt="Instagram"
            class="sns-section__phone-front-image"
          />
        </div>
      </div>

      <!-- 総合フォロワー -->
      <div class="sns-section__follower">
        <img
          :src="followerDecorationImage"
          alt=""
          class="sns-section__follower-decoration"
        />
        <div class="sns-section__follower-text">
          <p class="sns-section__follower-label">総合フォロワー</p>
          <p class="sns-section__follower-count">
            <span class="sns-section__follower-number">１</span>
            <span class="sns-section__follower-unit">万人</span>
          </p>
        </div>
      </div>

      <!-- Instagramロゴ -->
      <div class="sns-section__instagram-logo">
        <img
          :src="instagramLogoImage"
          alt="Instagram"
          class="sns-section__instagram-image"
        />
      </div>

      <!-- アカウント名 -->
      <p class="sns-section__account">@petestate.jp</p>
    </div>

    <!-- 見出し -->
    <h2 class="sns-section__title">様々な物件を紹介中！</h2>
    <div class="sns-section__title-line"></div>

    <!-- SNSボタン -->
    <div class="sns-section__buttons">
      <a href="https://www.instagram.com/petestate.jp/" target="_blank" rel="noopener noreferrer" class="sns-section__sns-link">
        <img :src="instaIcon" alt="Instagram" class="sns-section__sns-icon sns-section__sns-icon--pulse" />
      </a>
      <a href="https://www.tiktok.com/@petestate.jp" target="_blank" rel="noopener noreferrer" class="sns-section__sns-link">
        <img :src="tiktokIcon" alt="TikTok" class="sns-section__sns-icon sns-section__sns-icon--pulse" />
      </a>
      <a href="https://www.youtube.com/@petestate" target="_blank" rel="noopener noreferrer" class="sns-section__sns-link">
        <img :src="youtubeIcon" alt="YouTube" class="sns-section__sns-icon sns-section__sns-icon--pulse" />
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import phoneMockImage from '@/assets/images/sns-phone-mock.png';
import instagramLogoImage from '@/assets/images/sns-instagram-logo.png';
import followerDecorationImage from '@/assets/images/sns-follower-decoration.png';
import instaIcon from '@/assets/images/insta.svg';
import tiktokIcon from '@/assets/images/tiktok.svg';
import youtubeIcon from '@/assets/images/youtube.svg';

// スクロールアニメーション用
const sectionRef = ref<HTMLElement | null>(null);
const isPhoneVisible = ref(false);
let observer: IntersectionObserver | null = null;

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isPhoneVisible.value = entry.isIntersecting;
      });
    },
    { threshold: 0.2 }
  );
  if (sectionRef.value) {
    observer.observe(sectionRef.value);
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

.sns-section {
  position: relative;
  width: 100%;
  max-width: 375px;
  height: 358px;
  margin: 0 auto;
  padding: 16px;
  box-sizing: border-box;
  overflow: hidden;
  background: linear-gradient(
    225.995deg,
    rgba(255, 226, 151, 0) 60.923%,
    rgb(255, 226, 151) 100%
  ),
  linear-gradient(
    47.3137deg,
    rgba(246, 128, 216, 0) 61.226%,
    rgba(246, 128, 216, 0.5) 101.56%
  ),
  linear-gradient(90deg, rgb(255, 187, 197) 0%, rgb(255, 187, 197) 100%);

  &__card {
    position: relative;
    width: 343px;
    height: 270px;
    background: $white;
    border-radius: 20px;
    overflow: visible;
  }

  &__phone-mock {
    position: absolute;
    left: -10px;
    top: 85px;
    width: 220px;
    height: 296px;
    z-index: 2;
    transform: translate(-100%, 100%);
    opacity: 0;

    &--animated {
      animation: slideInFromBottomLeft 0.8s ease-out forwards;
    }
  }

  @keyframes slideInFromBottomLeft {
    0% {
      transform: translate(-100%, 100%);
      opacity: 0;
    }
    100% {
      transform: translate(0, 0);
      opacity: 1;
    }
  }

  // 後ろのスマホ（外枠）
  &__phone-back {
    position: absolute;
    left: 0;
    top: 0;
    width: 182px;
    height: 273px;
    transform: rotate(8.109deg);
    overflow: hidden;
  }

  &__phone-back-image {
    position: absolute;
    width: 412px;
    height: 515px;
    left: -146px;
    top: -36px;
    object-fit: cover;
  }

  // 前のスマホ（画面部分）
  &__phone-front {
    position: absolute;
    left: 12px;
    top: 13px;
    width: 158px;
    height: 262px;
    transform: rotate(8.109deg);
    border-radius: 15px 15px 0 0;
    overflow: hidden;
  }

  &__phone-front-image {
    position: absolute;
    width: 412px;
    height: 515px;
    left: -158px;
    top: -47px;
    object-fit: cover;
  }

  &__follower {
    position: absolute;
    right: 6px;
    top: 69px;
    width: 141px;
    height: 114px;
    z-index: 1;
  }

  &__follower-decoration {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__follower-text {
    position: absolute;
    top: 36px;
    left: 0;
    right: 0;
    text-align: center;
  }

  &__follower-label {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: $font-xs;
    line-height: 18px;
    color: #5c442a;
    margin: 0;
  }

  &__follower-count {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    line-height: 24px;
    color: #ed797b;
    margin: 0;
  }

  &__follower-number {
    font-size: $font-4xl;
    letter-spacing: -2.2px;
  }

  &__follower-unit {
    font-size: $font-lg;
  }

  &__instagram-logo {
    position: absolute;
    right: 38px;
    top: 181px;
    width: 56px;
    height: 56px;
    box-shadow:
      0px 0px 18px $white,
      0px 0px 18px $white,
      0px 0px 18px $white;
    border-radius: 12px;
  }

  &__instagram-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  &__account {
    position: absolute;
    right: 0;
    bottom: 12px;
    width: 140px;
    font-family: $font-gothic-a1;
    font-weight: $font-weight-medium;
    font-size: $font-xs;
    line-height: 18px;
    color: #5c442a;
    text-align: center;
    margin: 0;
  }

  &__title {
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 26px;
    line-height: 40px;
    text-align: center;
    white-space: nowrap;
    margin: 0;
    @include gradient-pink-text;
  }

  &__title-line {
    position: absolute;
    top: 75px;
    left: 57px;
    width: 260px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent 0%,
      #fb6e71 20%,
      #fb6e71 80%,
      transparent 100%
    );
  }

  &__buttons {
    position: absolute;
    left: 216px;
    bottom: 16px;
    display: flex;
    gap: 10px;
  }

  &__sns-link {
    display: block;
    text-decoration: none;
  }

  &__sns-icon {
    width: 36px;
    height: 36px;
    filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.25));

    &--pulse {
      animation: pulse 1.2s ease-in-out infinite;
    }
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.93);
    }
  }
}
</style>
