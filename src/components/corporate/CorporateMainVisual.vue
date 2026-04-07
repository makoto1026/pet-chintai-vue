<template>
  <section id="fv" class="fv-section">
    <!-- メイン画像エリア -->
    <div class="fv-image-area">
      <img src="@/assets/images/corporate/fv-image.png" alt="メインビジュアル" class="fv-main-image" />

      <!-- 縦書きキャッチコピー（画像上） -->
      <div class="fv-catch-top">
        <p class="catch-line left">住まいのパートナー。</p>
        <p class="catch-line">暮らしに寄り添う、</p>
      </div>

      <!-- CTAボタン -->
      <div class="fv-cta">
        <a href="https://liff.line.me/2002059008-9pWGGjdz?unique_key=6JG99T&ts=1770185262" class="cta-button">
          <span>お部屋を借りる</span>
          <span class="arrow-circle">
            <img src="@/assets/images/corporate/vector.svg" alt="" />
          </span>
        </a>
        <a href="https://liff.line.me/2002059008-9pWGGjdz?unique_key=F9R5AT&ts=1770185262" class="cta-button">
          <span>住まいを購入する</span>
          <span class="arrow-circle">
            <img src="@/assets/images/corporate/vector.svg" alt="" />
          </span>
        </a>
      </div>
    </div>

    <!-- サブ画像エリア -->
    <div class="fv-sub-area">
      <div class="sub-image-wrapper">
        <img src="@/assets/images/corporate/section-image.png" alt="暮らしのイメージ" class="sub-image" />
        <div class="sub-image-overlay"></div>
      </div>

      <!-- 装飾アイコン -->
      <img src="@/assets/images/corporate/red-circle-big.svg" alt="" class="deco deco-red-big" />
      <img src="@/assets/images/corporate/yellow-circle-small.svg" alt="" class="deco deco-yellow-small" />
      <img src="@/assets/images/corporate/red-circle-small.svg" alt="" class="deco deco-red-small" />
      <img src="@/assets/images/corporate/yellow-circle-big.svg" alt="" class="deco deco-yellow-big" />
      <img src="@/assets/images/corporate/figrine.svg" alt="" class="deco deco-plant" />
      <img src="@/assets/images/corporate/electricity.svg" alt="" class="deco deco-lamp" />

      <!-- 縦書きキャッチコピー -->
      <div class="fv-catch-bottom">
        <p class="catch-line-brown left">住まいのパートナー。</p>
        <p class="catch-line-brown">暮らしに寄り添う、</p>
      </div>
    </div>

    <!-- テキストコンテンツ -->
    <div class="fv-text">
      <p>
        住まい探しは、物件を選ぶことがゴールではありません。<br />
        その先にある、日々の暮らしまで見据えることが大切だと、私たちは考えています。
      </p>
      <p>
        お客様一人ひとりの想いや背景に丁寧に向き合い、<br />
        理想の暮らしを一緒に描いていくこと。<br />
        地域に根ざした不動産会社として、<br />
        安心して相談できる存在であり続けたいと考えています。
      </p>
    </div>

    <!-- 会社概要ボタン -->
    <div class="fv-company-btn">
      <a href="#company" class="company-button">
        <span>会社概要を見る</span>
        <span class="arrow-circle-small">
          <img src="@/assets/images/corporate/vector.svg" alt="" />
        </span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.fv-section {
  background: $corp-base-white;
  padding-top: 50px; // ヘッダー分
}

.fv-image-area {
  position: relative;
  width: 100%;
  overflow: hidden;

  .fv-main-image {
    width: 100%;
    height: 100%;
    object-position: center;
  }

  .fv-catch-top {
    position: absolute;
    top: 65px;
    left: 70px;
    display: flex;
    gap: 14px;

    .catch-line {
      writing-mode: vertical-rl;
      font-family: $font-maru-gothic;
      font-weight: 700;
      font-size: 26px;
      line-height: 28px;
      color: white;
      filter: drop-shadow(0 0 3px #422712) drop-shadow(0 0 16px #422712);
    }

    .catch-line.left {
      margin-top: 28px;
    }
  }
}

.fv-cta {
  position: absolute;
  bottom: 75px;
  left: 0;
  right: 0;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  z-index: 10;

  .cta-button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    gap: 10px;
    width: 80%;
    padding: 24px;
    background: $corp-main-orange;
    background: linear-gradient(135deg, lighten($corp-main-orange, 5%) 0%, $corp-main-orange 100%);
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 10px;
    text-decoration: none;

    span {
      font-family: $font-maru-gothic;
      font-weight: 700;
      font-size: 28px;
      line-height: 30px;
      color: white;
    }

    .arrow-circle {
      width: 28px;
      height: 28px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 18px;
        height: 18px;
      }
    }
  }
}

.fv-sub-area {
  position: relative;
  width: 100%;
  padding-bottom: 350px;

  .sub-image-wrapper {
    position: relative;
    width: 100%;
    height: 389px;

    .sub-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .sub-image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 120px;
      background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
      pointer-events: none;
    }
  }

  .fv-catch-bottom {
    position: absolute;
    top: 400px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 14px;

    .catch-line-brown {
      writing-mode: vertical-rl;
      font-family: $font-maru-gothic;
      font-weight: 700;
      font-size: 26px;
      line-height: 28px;
      color: $corp-text;
    }

    .catch-line-brown.left {
      margin-top: 28px;
    }
  }

  .deco {
    position: absolute;

    &.deco-red-big {
      top: 315px;
      left: 100px;
      width: 42px;
      height: 42px;
    }

    &.deco-yellow-small {
      top: 365px;
      left: 70px;
      width: 20px;
      height: 20px;
    }

    &.deco-red-small {
      top: 655px;
      right: 100px;
      width: 26px;
      height: 26px;
    }

    &.deco-yellow-big {
      top: 580px;
      right: 0px;
      width: 90px;
      height: 90px;
    }

    &.deco-plant {
      bottom: 0;
      left: 17px;
      width: 115px;
      height: auto;
    }

    &.deco-lamp {
      top: 340px;
      right: 50px;
      width: 60px;
      height: auto;
    }
  }
}

.fv-text {
  padding: 30px 20px;

  p {
    font-family: $font-maru-gothic;
    font-weight: 500;
    font-size: 13.5px;
    line-height: 26px;
    color: $corp-text;
    margin-bottom: 26px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.fv-company-btn {
  display: flex;
  justify-content: center;
  padding: 0 20px 30px;

  .company-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 260px;
    height: 58px;
    background: $corp-main-orange;
    background: linear-gradient(135deg, lighten($corp-main-orange, 5%) 0%, $corp-main-orange 100%);
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 60px;
    text-decoration: none;

    span {
      font-family: $font-maru-gothic;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      color: white;
    }

    .arrow-circle-small {
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 13px;
        height: 13px;
      }
    }
  }
}
</style>
