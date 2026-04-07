<template>
  <section class="sns-attention-section">
    <!-- 背景楕円グラデーション -->
    <img
      src="@/assets/images/sns-bg-ellipse-top.svg"
      alt=""
      class="sns-attention-section__bg sns-attention-section__bg--top1"
    />
    <img
      src="@/assets/images/sns-bg-ellipse-top.svg"
      alt=""
      class="sns-attention-section__bg sns-attention-section__bg--top2"
    />
    <img
      src="@/assets/images/sns-bg-ellipse-bottom.svg"
      alt=""
      class="sns-attention-section__bg sns-attention-section__bg--bottom"
    />

    <!-- 装飾アイコン -->
    <img
      src="@/assets/images/sns-deco-sparkle2.png"
      alt=""
      class="sns-attention-section__deco sns-attention-section__deco--sparkle-tl"
    />
    <img
      src="@/assets/images/sns-deco-sparkle1.png"
      alt=""
      class="sns-attention-section__deco sns-attention-section__deco--sparkle-tr"
    />
    <img
      src="@/assets/images/sns-deco-thumb.png"
      alt=""
      class="sns-attention-section__deco sns-attention-section__deco--thumb"
    />
    <img
      src="@/assets/images/sns-deco-heart.png"
      alt=""
      class="sns-attention-section__deco sns-attention-section__deco--heart"
    />

    <div class="sns-attention-section__header">
      <p class="sns-attention-section__sara">＼ さらに ／</p>
      <span class="sns-attention-section__badge">人気急上昇中</span>
      <h2 class="sns-attention-section__title">
        <span class="sns-attention-section__title-line">
          <span class="sns-attention-section__title-strong">SNS</span>や<span class="sns-attention-section__title-strong">各メディア</span>で
        </span>
        <span class="sns-attention-section__title-line sns-attention-section__title-line--accent">
          注目されています
        </span>
      </h2>
    </div>

    <div class="sns-attention-section__media">
      <img
        src="@/assets/images/sns-media-claudy.png"
        alt="CLAUDY 雑誌掲載"
        class="sns-attention-section__img sns-attention-section__img--claudy"
      />
      <img
        src="@/assets/images/sns-media-interview.png"
        alt="Expert Interview"
        class="sns-attention-section__img sns-attention-section__img--interview"
      />
      <img
        src="@/assets/images/sns-media-myhome.png"
        alt="マイホーム計画 メディア掲載"
        class="sns-attention-section__img sns-attention-section__img--myhome"
      />
      <div class="sns-attention-section__balloon">
        <p>
          ペットと<br />
          暮らしたくなる<br />
          お部屋<span class="sns-attention-section__balloon-highlight">として</span><br />
          <span class="sns-attention-section__balloon-highlight">紹介されました！</span>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// SNS・メディア注目セクション
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.sns-attention-section {
  position: relative;
  width: 100%;
  max-width: $max-container-width;
  margin: 0 auto;
  background: #fff8e8;
  padding: 25px 0 40px 0;
  overflow: hidden;

  // 背景の楕円グラデーション（Figma: Ellipse4 ×2, Ellipse6）
  &__bg {
    position: absolute;
    pointer-events: none;
    z-index: 0;

    // Ellipse4 #1: 339×180, top:25, center, inset -22.22% -11.8%
    &--top1 {
      top: calc(25px - 40px);
      left: 50%;
      width: calc(339px * 1.236);
      height: calc(180px * 1.4444);
      transform: translateX(-50%);
    }

    // Ellipse4 #2: 339×180, top:41, center
    &--top2 {
      top: calc(41px - 40px);
      left: 50%;
      width: 100%;
      height: calc(180px * 1.4444);
      transform: translateX(-50%);
    }

    // Ellipse6: 298×291, top:173, center, inset -13.75% -13.42%
    &--bottom {
      top: 100px;
      left: 50%;
      width: 120%;
      height: 480px;
      transform: translateX(-50%);
    }
  }

  // 装飾アイコン（Figma座標を絶対配置）
  &__deco {
    position: absolute;
    pointer-events: none;
    opacity: 0.7;
    z-index: 1;

    // sparkle 左上 (img501): left:57, top:42, 45.5×42.66, rotate -15
    &--sparkle-tl {
      top: 30px;
      left: 18%;
      width: 45.5px;
      height: 42.66px;
      transform: rotate(-15deg);
    }

    // sparkle 右上 (img511): left:275, top:44, 49.49×47.88, rotate 15
    &--sparkle-tr {
      top: 34px;
      right: 18%;
      width: 49.5px;
      height: 47.9px;
      transform: rotate(15deg);
    }

    // thumb 左 (img5221): left:18, top:79, 41×40, flipped
    &--thumb {
      top: 79px;
      left: 10%;
      width: 41px;
      height: 40px;
      transform: scaleX(-1);
    }

    // heart 右 (img521): left:316, top:79, 41×40
    &--heart {
      top: 79px;
      right: 10%;
      width: 41px;
      height: 40px;
    }
  }

  &__header {
    position: relative;
    text-align: center;
    margin-bottom: 32px;
    z-index: 2;
  }

  &__sara {
    font-family: $font-gothic;
    font-size: $font-md;
    font-weight: $font-weight-bold;
    color: $text-brown;
    letter-spacing: 0.1em;
    margin: 0 0 12px;
  }

  &__badge {
    display: inline-block;
    background: $accent-pink;
    color: $white;
    font-family: $font-gothic;
    font-size: $font-md;
    font-weight: $font-weight-bold;
    letter-spacing: 0.1em;
    padding: 6px 12px 4px;
    margin-bottom: 18px;
  }

  &__title {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    color: $text-brown;
    margin: 0;
    line-height: 1.5;
  }

  &__title-line {
    display: block;
    font-size: 21px;

    &--accent {
      font-size: 28px;
      background: linear-gradient(180deg, $accent-pink 19.231%, $accent-pink-dark 100%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-top: 8px;
    }
  }

  &__title-strong {
    font-size: $font-6xl;
    background: linear-gradient(180deg, $accent-orange-light 51.22%, $accent-orange-dark 100%);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  &__media {
    position: relative;
    width: 301px;
    height: 273px;
    margin: 0 auto;
    z-index: 2;
  }

  &__img {
    position: absolute;
    display: block;
    object-fit: cover;

    &--claudy {
      top: 0;
      left: 0;
      width: 95px;
      height: 120px;
    }

    &--interview {
      top: 10px;
      left: 105px;
      width: 196px;
      height: 100px;
    }

    &--myhome {
      top: 130px;
      left: 57px;
      width: 213px;
      height: 136px;
      z-index: 1;
    }
  }

  &__balloon {
    position: absolute;
    top: 183px;
    left: 32px;
    background: $accent-pink;
    border-radius: 20px;
    width: 123px;
    height: 90px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;

    p {
      margin: 0;
      font-family: $font-gothic;
      font-size: $font-xs;
      font-weight: $font-weight-bold;
      color: #FFF291;
      line-height: 17px;
      text-align: center;
    }

    &::after {
      content: '';
      position: absolute;
      top: 20px;
      left: 90%;
      width: 0;
      height: 0;
      border-top: 11px solid transparent;
      border-bottom: 11px solid transparent;
      border-left: 30px solid $accent-pink;
      transform: rotate(-40deg);
      transform-origin: left center;
    }
  }

  &__balloon-highlight {
    color: white;
  }
}
</style>
