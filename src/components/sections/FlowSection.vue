<template>
  <section class="flow-section">
    <div class="flow-section__title-area">
      <h2 class="flow-section__title">お部屋探しの流れ</h2>
    </div>

    <div class="flow-section__steps">
      <!-- STEP 1 - 左寄せ -->
      <div class="flow-section__step flow-section__step--left">
        <div class="flow-section__step-header flow-section__step-header--left">
          <div class="flow-section__step-label">
            <span class="flow-section__step-text-step">STEP</span>
            <span class="flow-section__step-num">1</span>
          </div>
          <p class="flow-section__step-title">まずはLINEで気軽に相談</p>
        </div>
        <div class="flow-section__step-content flow-section__step-content--left">
          <p class="flow-section__step-description">
            ペットの詳細やご希望条件、初期費用・審査のことまで、なんでもLINEでご相談ください。
          </p>
          <div class="flow-section__step-icon">
            <img src="@/assets/images/flow-icon-1.png" alt="" />
          </div>
        </div>
      </div>

      <!-- STEP 2 - 右寄せ -->
      <div class="flow-section__step flow-section__step--right">
        <div class="flow-section__step-header flow-section__step-header--right">
          <div class="flow-section__step-label">
            <span class="flow-section__step-text-step">STEP</span>
            <span class="flow-section__step-num">2</span>
          </div>
          <p class="flow-section__step-title">気になるお部屋を内見</p>
        </div>
        <div class="flow-section__step-content flow-section__step-content--right">
          <p class="flow-section__step-description">
            ペットと安心して暮らせるお部屋をご案内。<br />
            当日の内見も可能です。
          </p>
          <div class="flow-section__step-icon">
            <img src="@/assets/images/flow-icon-2.png" alt="" />
          </div>
        </div>
      </div>

      <!-- STEP 3 - 左寄せ -->
      <div class="flow-section__step flow-section__step--left">
        <div class="flow-section__step-header flow-section__step-header--left">
          <div class="flow-section__step-label">
            <span class="flow-section__step-text-step">STEP</span>
            <span class="flow-section__step-num">3</span>
          </div>
          <p class="flow-section__step-title">お申し込み・審査もスムーズに</p>
        </div>
        <div class="flow-section__step-content flow-section__step-content--left">
          <p class="flow-section__step-description">
            ペット可物件に詳しいスタッフがサポート。<br />
            スピーディなご案内でお手続きも安心です。
          </p>
          <div class="flow-section__step-icon">
            <img src="@/assets/images/flow-icon-3.png" alt="" />
          </div>
        </div>
      </div>

      <!-- STEP 4 - 右寄せ -->
      <div class="flow-section__step flow-section__step--right">
        <div class="flow-section__step-header flow-section__step-header--right">
          <div class="flow-section__step-label">
            <span class="flow-section__step-text-step">STEP</span>
            <span class="flow-section__step-num">4</span>
          </div>
          <p class="flow-section__step-title">ご契約・ご入居</p>
        </div>
        <div class="flow-section__step-content flow-section__step-content--right">
          <p class="flow-section__step-description">
            入居後のペットOKの細かなルールなども丁寧にフォローいたします。
          </p>
          <div class="flow-section__step-icon">
            <img src="@/assets/images/flow-icon-4.png" alt="" />
          </div>
        </div>
      </div>

      <!-- STEP 5 - 左寄せ -->
      <div class="flow-section__step flow-section__step--left">
        <div class="flow-section__step-header flow-section__step-header--left">
          <div class="flow-section__step-label">
            <span class="flow-section__step-text-step">STEP</span>
            <span class="flow-section__step-num">5</span>
          </div>
          <p class="flow-section__step-title">特別優待先のご紹介</p>
        </div>
        <div class="flow-section__step-content flow-section__step-content--left">
          <p class="flow-section__step-description">
            ご契約後は、ペット住まいラボ限定の特別優待サービスをご案内。
          </p>
          <div class="flow-section__step-icon">
            <img src="@/assets/images/flow-icon-5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// FlowSection component
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/mixins';

.flow-section {
  background: #ffffff;
  padding: 0 0 60px;
  position: relative;
  overflow: hidden;

  // 下部のグラデーション（白へフェード）
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #ffffff 100%);
    pointer-events: none;
    z-index: 2;
  }


  &__title-area {
    position: relative;
    z-index: 1;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 100%);
    padding: 30px 0 40px;
  }

  &__title {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 26px;
    line-height: 40px;
    text-align: center;
    background: linear-gradient(180deg, #FB6E71 19.231%, #EE4548 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    filter: drop-shadow(0px 0px 4px #ffffff) drop-shadow(0px 0px 4px #ffffff) drop-shadow(0px 0px 10px #ffffff);
  }

  &__steps {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    gap: 20px;
    filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2));
  }

  &__step {
    display: flex;
    flex-direction: column;
    width: 355px;

    &--left {
      margin-left: 0;
      margin-right: auto;
    }

    &--right {
      margin-left: auto;
      margin-right: 0;
    }
  }

  &__step-header {
    display: flex;
    flex-direction: column;
    gap: 5px;
    background: linear-gradient(102.305deg, #5C442A 0%, #EE7F81 100%);
    padding: 10px 20px;

    &--left {
      border-radius: 0 10px 0 0;
    }

    &--right {
      border-radius: 10px 0 0 0;
    }
  }

  &__step-label {
    display: flex;
    align-items: baseline;
  }

  &__step-text-step {
    font-family: $font-mincho;
    font-weight: $font-weight-bold;
    font-size: 18px;
    line-height: 18px;
    color: #fff;
    letter-spacing: 0;

    &::after {
      content: '';
      display: inline;
      letter-spacing: 1.8px;
    }
  }

  &__step-num {
    font-family: $font-mincho;
    font-weight: $font-weight-bold;
    font-size: 22px;
    line-height: 18px;
    color: #fff;
    margin-left: 2px;
  }

  &__step-title {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
  }

  &__step-content {
    background: #fff;
    padding: 20px;
    position: relative;
    min-height: 66px;
    display: flex;
    align-items: flex-start;

    &--left {
      border-radius: 0 0 10px 0;
    }

    &--right {
      border-radius: 0 0 0 10px;
    }
  }

  &__step-description {
    font-family: $font-gothic;
    font-weight: $font-weight-medium;
    font-size: 14px;
    line-height: 22px;
    color: $text-brown;
    width: 221px;
  }

  &__step-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    width: 70px;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.2;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  }
}
</style>
