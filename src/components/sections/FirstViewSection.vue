<template>
  <section :class="['first-view', { 'first-view--loaded': isLoaded }]">
    <!-- ローディングオーバーレイ -->
    <div v-if="!isLoaded" class="loading-overlay">
      <div class="loading-spinner"></div>
    </div>

    <!-- ヘッダー -->
    <header class="header">
      <img
        src="@/assets/images/logo.svg"
        alt="ペット住まいラボ"
        class="header__logo"
      />
      <img
        src="@/assets/images/glh-logo.png"
        alt="GLH Inc."
        class="header__glh-logo"
      />
    </header>

    <!-- メイン画像エリア -->
    <div class="main-visual">
      <picture>
        <source srcset="@/assets/images/fv-room.webp" type="image/webp" />
        <img
          ref="roomImageRef"
          src="@/assets/images/fv-room.png"
          alt="ペット可賃貸の部屋"
          class="main-visual__image"
          loading="eager"
          @load="onImageLoad"
        />
      </picture>
      <img
        src="@/assets/images/fv-bg-texture.png"
        alt=""
        class="main-visual__texture main-visual__texture--soft-light"
      />
      <img
        src="@/assets/images/fv-bg-texture.png"
        alt=""
        class="main-visual__texture main-visual__texture--overlay"
      />
      <div class="main-visual__overlay"></div>

      <!-- ペットとお部屋探し -->
      <p class="main-visual__catch-copy">
        <span class="main-visual__catch-char" style="--char-index: 0">ペ</span>
        <span class="main-visual__catch-char" style="--char-index: 1">ッ</span>
        <span class="main-visual__catch-char" style="--char-index: 2">ト</span>
        <span class="main-visual__catch-char" style="--char-index: 3">と</span>
        <span class="main-visual__catch-char" style="--char-index: 4">お</span>
        <span class="main-visual__catch-char" style="--char-index: 5">部</span>
        <span class="main-visual__catch-char" style="--char-index: 6">屋</span>
        <span class="main-visual__catch-char" style="--char-index: 7">探</span>
        <span class="main-visual__catch-char" style="--char-index: 8">し</span>
      </p>

      <!-- メインタイトル（ペット住まいラボ） -->
      <div class="main-visual__title main-visual__title--animate">
        <picture>
          <source srcset="@/assets/images/fv-logo.webp" type="image/webp" />
          <img
            ref="logoImageRef"
            src="@/assets/images/fv-logo.png"
            alt="ペット住まいラボ"
            class="main-visual__title-logo"
            loading="eager"
            @load="onImageLoad"
          />
        </picture>
      </div>

      <!-- 犬と猫の画像 -->
      <div
        class="main-visual__dogs main-visual__dogs--animate"
      >
        <picture>
          <source srcset="@/assets/images/dogs.webp" type="image/webp" />
          <img
            ref="dogsImageRef"
            src="@/assets/images/dogs.png"
            alt="犬と猫"
            class="main-visual__dogs-img"
            loading="eager"
            @load="onImageLoad"
          />
        </picture>
      </div>
    </div>

    <!-- 背景素材（下部） -->
    <div class="bottom-bg">
      <img
        src="@/assets/images/fv-bottom-bg.png"
        alt=""
        class="bottom-bg__image"
      />
      <div class="bottom-bg__overlay"></div>
    </div>

    <!-- サブタイトル -->
    <p class="sub-title">
      <span class="sub-title__char">メ</span>
      <span class="sub-title__char">デ</span>
      <span class="sub-title__char">ィ</span>
      <span class="sub-title__char">ア</span>
      <span class="sub-title__char">掲</span>
      <span class="sub-title__char">載</span>
      <span class="sub-title__char sub-title__amp">&amp;</span>
      <span class="sub-title__char">有</span>
      <span class="sub-title__char">名</span>
      <span class="sub-title__char">人</span>
      <span class="sub-title__char">担</span>
      <span class="sub-title__char">当</span>
      <span class="sub-title__char">多</span>
      <span class="sub-title__char">数</span>
      <span class="sub-title__char">！</span>
    </p>

    <!-- バッジエリア -->
    <div class="badges">
      <div class="badge badge--animate" style="--badge-index: 0">
        <picture>
          <source srcset="@/assets/images/badge-bg.webp" type="image/webp" />
          <img src="@/assets/images/badge-bg.png" alt="" class="badge__bg" loading="lazy" />
        </picture>
        <div class="badge__content">
          <span class="badge__label">安価~高級<span class="badge__label-small">まで</span></span>
          <span class="badge__value">幅広い</span>
        </div>
      </div>
      <div class="badge badge--animate" style="--badge-index: 1">
        <picture>
          <source srcset="@/assets/images/badge-bg.webp" type="image/webp" />
          <img src="@/assets/images/badge-bg.png" alt="" class="badge__bg" loading="lazy" />
        </picture>
        <div class="badge__content">
          <span class="badge__label">物件数</span>
          <span class="badge__value badge__value--small">トップクラス</span>
        </div>
      </div>
      <div class="badge badge--animate" style="--badge-index: 2">
        <picture>
          <source srcset="@/assets/images/badge-bg.webp" type="image/webp" />
          <img src="@/assets/images/badge-bg.png" alt="" class="badge__bg" loading="lazy" />
        </picture>
        <div class="badge__content">
          <span class="badge__label badge__label--small">SNS総フォロワー</span>
          <span class="badge__value badge__value--large"><span class="badge__value-number">1</span>万人</span>
        </div>
      </div>
    </div>

    <!-- CTAボタン -->
    <a
      href="https://s.lmes.jp/landing-qr/2002059008-M8KDDdoP?uLand=zI2YQN"
      target="_blank"
      class="cta-button lme_qr_add_friend"
      @click="trackEvent('FV_CTAボタン')"
    >
      <picture>
        <source srcset="@/assets/images/fv-button.webp" type="image/webp" />
        <img
          src="@/assets/images/fv-button.png"
          alt="繁忙期前にお得に物件CHECKする!"
          class="cta-button__img"
          loading="eager"
        />
      </picture>
    </a>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

// PTエンジンのイベントトラッキング
declare const _pt_sp_2: { push: (method: string, data: { eventName: string }) => void } | undefined;
const trackEvent = (eventName: string) => {
  _pt_sp_2?.push('setCustomEvent', { eventName });
};

// 画像読み込み状態
const isLoaded = ref(false);
const loadedCount = ref(0);
const totalImages = 3; // fv-room, fv-logo, dogs

// 画像要素のref
const roomImageRef = ref<HTMLImageElement | null>(null);
const logoImageRef = ref<HTMLImageElement | null>(null);
const dogsImageRef = ref<HTMLImageElement | null>(null);

// 画像読み込み完了時のハンドラ
const onImageLoad = () => {
  loadedCount.value++;
  if (loadedCount.value >= totalImages) {
    isLoaded.value = true;
  }
};

// マウント時に既にキャッシュされている画像をチェック
onMounted(() => {
  const images = [roomImageRef.value, logoImageRef.value, dogsImageRef.value];
  images.forEach((img) => {
    if (img?.complete) {
      onImageLoad();
    }
  });
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.first-view {
  position: relative;
  width: 100%;
  max-width: $max-container-width;
  // アスペクト比で高さを決定（375:700）
  aspect-ratio: 375 / 700;
  margin: 0 auto;
  overflow: hidden;
  background: $white;
}

// ローディングオーバーレイ
.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $white;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba($primary, 0.2);
  border-top-color: $primary;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

// ヘッダー
.header {
  position: absolute;
  top: 19px;
  left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  z-index: 10;

  &__logo {
    height: 15px;
    width: auto;
  }

  &__glh-logo {
    height: 17px;
    width: auto;
  }
}

// メインビジュアル
.main-visual {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 68%; // 478 / 700
  overflow: visible; // 犬猫画像がはみ出すことを許可

  &__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &__texture {
    position: absolute;
    top: -11%;
    left: -64%;
    width: 247%;
    height: 102%;
    object-fit: cover;
    pointer-events: none;

    &--soft-light {
      mix-blend-mode: soft-light;
      opacity: 0.35;
    }

    &--overlay {
      mix-blend-mode: overlay;
      opacity: 0.15;
    }
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.9) 5.77%,
      rgba(255, 255, 255, 0) 14.65%
    ),
    linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 79.79%,
      rgba(255, 255, 255, 1) 93.95%
    );
    pointer-events: none;
  }

  // ペットとお部屋探し
  &__catch-copy {
    position: absolute;
    top: 23%; // 85px / 478px
    left: 50%;
    transform: translateX(-50%);
    font-family: $font-mincho;
    font-size: clamp(20px, 5vw, 24px);
    font-weight: $font-weight-semibold;
    line-height: 1;
    color: $white;
    text-shadow:
      0px 0px 8px #db6e23,
      0px 0px 4px #db6e23,
      0px 0px 12px #db6e23,
      0px 0px 12px #db6e23,
      0px 0px 4px #fd6903;
    white-space: nowrap;
    z-index: 5;
    margin: 0;
    padding: 4%;
    display: flex;
  }

  &__catch-char {
    opacity: 0;
    display: inline-block;
    transform: scale(0);

    // 読み込み完了後にアニメーション開始
    .first-view--loaded & {
      animation: charZoomIn 0.3s ease-out forwards;
      animation-delay: calc(var(--char-index) * 0.08s);
    }
  }

  // メインタイトル（ペット住まいラボロゴ）
  &__title {
    position: absolute;
    top: 29%; // 123px / 478px
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    text-align: center;
    width: 97%;

    &--animate {
      opacity: 0;

      // 読み込み完了後にアニメーション開始
      .first-view--loaded & {
        animation: fadeIn 0.6s ease-out 1s forwards;
      }
    }
  }

  &__title-logo {
    width: 100%;
    height: auto;
  }

  // 犬と猫の画像
  &__dogs {
    position: absolute;
    top: 29%;
    left: 49%;
    transform: translateX(-50%);
    width: 100%;
    z-index: 4;

    &--animate {
      opacity: 0;
      transform: translateX(-50%) scale(0.5);

      // 読み込み完了後にアニメーション開始
      .first-view--loaded & {
        animation: zoomIn 0.6s ease-out 1.6s forwards;
      }
    }
  }

  &__dogs-img {
    width: 100%;
    height: auto;
  }
}

// FVアニメーション用キーフレーム
@keyframes charZoomIn {
  from {
    opacity: 0;
    transform: scale(0);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes zoomIn {
  from {
    opacity: 0;
    transform: translateX(-50%) scale(0.5);
  }
  to {
    opacity: 1;
    transform: translateX(-50%) scale(1);
  }
}

// 背景素材（下部）
.bottom-bg {
  position: absolute;
  top: 66%; // 460 / 700
  left: 0;
  width: 100%;
  height: 22%; // 153 / 700
  transform: scaleY(-1);
  overflow: hidden;

  &__image {
    position: absolute;
    top: -5%;
    left: 0;
    width: 100%;
    height: 138%;
    object-fit: cover;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 66.56%,
      rgba(255, 255, 255, 1) 100%
    ),
    linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 62.5%,
      rgba(255, 255, 255, 1) 80.39%
    );
    pointer-events: none;
  }
}

// サブタイトル
.sub-title {
  position: absolute;
  top: 64.5%; // 444 / 700
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-family: $font-mincho;
  font-size: clamp(18px, 5vw, $font-4xl);
  font-weight: $font-weight-semibold;
  line-height: 22px;
  text-align: center;
  z-index: 5;
  margin: 0;
  display: flex;
  justify-content: center;

  &__char {
    position: relative;
    display: inline-block;
    // グラデーションテキスト
    background: linear-gradient(180deg, #BA800F 0%, #5E381E 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    // 白いBlur効果
    filter: drop-shadow(0px 0px 8px rgba(255, 255, 255, 1))
            drop-shadow(0px 0px 12px rgba(255, 255, 255, 0.8))
            drop-shadow(0px 0px 4px rgba(255, 255, 255, 1));
  }

  &__amp {
    font-size: $font-3xl;
  }
}

// バッジ
.badges {
  position: absolute;
  top: 68%; // 478 / 700
  left: 50%;
  transform: translateX(-50%);
  width: 85%;
  max-width: 339px;
  display: flex;
  justify-content: space-between;
  z-index: 5;
}

// バッジアニメーション
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.badge {
  position: relative;
  width: 108px;
  height: 108px;

  &--animate {
    opacity: 0;

    // 読み込み完了後にアニメーション開始
    // 犬猫画像(2.2s終了)の後、2.4sから順次表示
    .first-view--loaded & {
      animation: fadeInUp 1s ease-out forwards;
      animation-delay: calc(2.4s + var(--badge-index) * 0.2s);
    }
  }

  &__bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__content {
    position: absolute;
    top: 37px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 90%;
  }

  &__label {
    font-family: $font-mincho;
    font-size: $font-xs;
    font-weight: $font-weight-semibold;
    line-height: 12px;
    color: #6F5151;
    text-shadow:
      0px 0px 10px rgba(255, 255, 255, 1),
      0px 0px 4px rgba(255, 255, 255, 1),
      0px 0px 4px rgba(255, 255, 255, 1);
    white-space: nowrap;

    &-small {
      font-size: 9px;
      letter-spacing: -1.62px;
    }

    &--small {
      font-size: 10px;
      letter-spacing: -1px;
    }
  }

  &__value {
    font-family: $font-mincho;
    font-size: $font-lg;
    font-weight: $font-weight-semibold;
    line-height: 16px;
    color: $white;
    text-shadow:
      0px 0px 10px #F75827,
      0px 0px 4px #F75827,
      0px 0px 4px #F75827;
    margin-top: 3px;

    &--small {
      font-size: $font-lg;
      letter-spacing: -3.2px;
    }

    &--large {
      font-size: 18px;
      line-height: 19px;
    }

    &-number {
      letter-spacing: 2.16px;
    }
  }
}

// CTAボタン
.cta-button {
  position: absolute;
  top: 85%; // 596 / 700
  left: 50%;
  transform: translateX(-50%);
  z-index: 5;
  display: block;
  width: 82%;
  max-width: 310px;

  &__img {
    width: 100%;
    height: auto;
    display: block;
  }
}
</style>
