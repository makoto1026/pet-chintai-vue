<template>
  <section class="first-view">
    <!-- ヘッダー -->
    <header class="header">
      <img
        src="@/assets/images/logo.svg"
        alt="ペット住まいラボ"
        class="header__logo"
      />
      <img
        src="@/assets/images/glh-logo.svg"
        alt="GLH Inc."
        class="header__glh-logo"
      />
    </header>

    <!-- メイン画像エリア -->
    <div class="main-visual">
      <img
        src="@/assets/images/fv-dog.png"
        alt="犬の画像"
        class="main-visual__image"
      />
      <img
        src="@/assets/images/fv-bg-texture.png"
        alt=""
        class="main-visual__texture"
      />
      <div class="main-visual__overlay"></div>
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

    <!-- メインタイトル -->
    <div class="main-title">
      <img
        src="@/assets/images/fv-logo.svg"
        alt="ペット住まいラボ"
        class="main-title__logo"
      />
    </div>

    <!-- サブタイトル -->
    <p class="sub-title">
      メディア掲載<span class="sub-title__amp">&amp;</span>有名人担当多数！
    </p>

    <!-- バッジエリア -->
    <div class="badges">
      <div class="badge">
        <img
          src="@/assets/images/badge-bg.png"
          alt=""
          class="badge__bg"
        />
        <div class="badge__content">
          <span class="badge__label">安価~高級<span class="badge__label-small">まで</span></span>
          <span class="badge__value">幅広い</span>
        </div>
      </div>
      <div class="badge">
        <img
          src="@/assets/images/badge-bg.png"
          alt=""
          class="badge__bg"
        />
        <div class="badge__content">
          <span class="badge__label">物件数</span>
          <span class="badge__value badge__value--small">トップクラス</span>
        </div>
      </div>
      <div class="badge">
        <img
          src="@/assets/images/badge-bg.png"
          alt=""
          class="badge__bg"
        />
        <div class="badge__content">
          <span class="badge__label badge__label--small">SNS総フォロワー</span>
          <span class="badge__value badge__value--large"><span class="badge__value-number">1</span>万人</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ファーストビューセクション
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.first-view {
  position: relative;
  width: 100%;
  max-width: 375px;
  height: 626px;
  margin: 0 auto;
  overflow: hidden;
  background: $white;
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
  height: 512px;
  overflow: hidden;

  &__image {
    position: absolute;
    top: -22%;
    left: -116%;
    width: 246%;
    height: 120%;
    object-fit: cover;
  }

  &__texture {
    position: absolute;
    top: -11%;
    left: -64%;
    width: 247%;
    height: 102%;
    object-fit: cover;
    mix-blend-mode: soft-light;
    opacity: 0.35;
    pointer-events: none;
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
      rgba(255, 255, 255, 1) 95.14%
    );
    pointer-events: none;
  }
}

// 背景素材（下部）
.bottom-bg {
  position: absolute;
  top: 490px;
  left: 0;
  width: 375px;
  height: 153px;
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

// メインタイトル
.main-title {
  position: absolute;
  top: 419px;
  left: 5.33%;
  right: 5.33%;
  z-index: 5;
  text-align: center;

  &__logo {
    width: 335px;
    height: 41px;
  }
}

// サブタイトル
.sub-title {
  position: absolute;
  top: 470px;
  left: 50%;
  transform: translateX(-50%);
  width: 327px;
  font-family: $font-mincho;
  font-size: $font-4xl;
  font-weight: $font-weight-semibold;
  line-height: 22px;
  text-align: center;
  z-index: 5;
  margin: 0;
  // グラデーションテキストをfilterで実現
  color: #BA800F;
  text-shadow:
    0px 0px 10px $white,
    0px 0px 4px $white,
    0px 0px 4px $white;

  &__amp {
    font-size: $font-3xl;
  }
}

// バッジ
.badges {
  position: absolute;
  top: 508px;
  left: 28px;
  right: 28px;
  display: flex;
  justify-content: space-between;
  z-index: 5;
}

.badge {
  position: relative;
  width: 98px;
  height: 98px;

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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 90%;
    margin-top: 8px;
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
</style>
