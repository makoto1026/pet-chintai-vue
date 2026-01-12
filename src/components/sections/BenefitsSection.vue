<template>
  <section class="benefits-section">
    <!-- 背景テクスチャ -->
    <div class="background">
      <img :src="bgTexture" alt="" class="bg-texture" />
      <img :src="bgOverlay" alt="" class="bg-overlay" />
    </div>

    <!-- 優待セクション -->
    <div class="benefits-upper">
      <!-- 優待ラベル -->
      <div class="label-container">
        <img :src="labelBg" alt="" class="label-bg" />
        <p class="label-text">ペット住まいラボご契約限定</p>
      </div>

      <!-- 優待ボックス -->
      <div class="benefits-box">
        <div class="benefits-box-border"></div>
        <div class="benefits-box-content">
          <div class="benefits-title">
            <span class="title-main">特別優待</span>
            <span class="title-sub">つき</span>
          </div>
          <a
            href="https://www.instagram.com/glh_petsumailab/"
            target="_blank"
            rel="noopener noreferrer"
            class="check-button"
            @click="trackEvent('優待特典_特典内容CHECKボタン')"
          >
            <span class="btn-highlight">特典内容</span>
            <span class="btn-text">をCHECKする</span>
          </a>
        </div>
        <!-- 装飾 -->
        <img :src="decoration" alt="" class="box-decoration" />
      </div>
    </div>

    <!-- 区切り線 -->
    <div class="divider">
      <img :src="dividerLine" alt="" class="divider-line" />
      <div class="divider-center">
        <img :src="badgeBg" alt="" class="badge-bg" />
        <img :src="plusIcon" alt="" class="plus-icon" />
      </div>
    </div>

    <!-- プレゼントセクション -->
    <div class="presents-section">
      <!-- 背景 -->
      <div class="presents-bg">
        <img :src="presentBg" alt="" class="present-bg-img" />
      </div>

      <!-- 装飾 -->
      <img :src="pawLeft" alt="" class="paw-left" />
      <img :src="pawRight" alt="" class="paw-right" />

      <!-- タイトル -->
      <div class="presents-title">
        <div class="title-row">
          <span class="title-gouka">豪華</span>
          <span class="title-number">4</span>
          <span class="title-daitokuten">大特典</span>
        </div>
        <p class="title-present">無料プレゼント</p>
      </div>

      <!-- 特典リスト -->
      <div class="benefits-list">
        <div class="benefit-card" v-for="(benefit, index) in benefits" :key="index">
          <div class="benefit-badge">
            <img :src="badgeBg" alt="" class="badge-img" />
            <div class="badge-content">
              <span class="badge-label">特典</span>
              <span class="badge-number">{{ index + 1 }}</span>
            </div>
          </div>
          <div class="benefit-text">
            <p v-html="benefit.text"></p>
          </div>
        </div>
      </div>

      <!-- 詳細ボタン -->
      <a
        href="https://www.instagram.com/glh_petsumailab/"
        target="_blank"
        rel="noopener noreferrer"
        class="detail-button"
        @click="trackEvent('優待特典_優待先一覧ボタン')"
      >
        詳しくは優待先一覧へ
      </a>
    </div>

    <!-- 下部グラデーション -->
    <div class="bottom-gradient"></div>
  </section>
</template>

<script setup lang="ts">
// 画像インポート
import bgTexture from '@/assets/images/benefits/bg-texture.png';
import bgOverlay from '@/assets/images/benefits/bg-overlay.png';
import presentBg from '@/assets/images/benefits/present-bg.png';
import pawLeft from '@/assets/images/benefits/paw-left.png';
import pawRight from '@/assets/images/benefits/paw-right.png';
import badgeBg from '@/assets/images/benefits/badge-bg.png';
import decoration from '@/assets/images/benefits/decoration.png';
import labelBg from '@/assets/images/benefits/label-bg.png';
import dividerLine from '@/assets/images/benefits/divider-line.svg';
import plusIcon from '@/assets/images/benefits/plus-icon.svg';

// PTエンジンのイベントトラッキング
declare const _pt_sp_2: { push: (method: string, data: { eventName: string }) => void } | undefined;
const trackEvent = (eventName: string) => {
  _pt_sp_2?.push('setCustomEvent', { eventName });
};

const benefits = [
  {
    text: 'お引越し先の<span class="highlight">動物病院</span>や<br><span class="highlight">トリミングサロンご紹介</span>'
  },
  {
    text: '優待先の<span class="highlight">フォトスタジオ</span>や<br><span class="highlight">ペット可カフェ特別特典付与</span>'
  },
  {
    text: '<span class="highlight">ペットへのプレゼント</span>を<br>ご用意'
  },
  {
    text: '<span class="highlight">電気・水道・ライフライン</span>も<br><span class="highlight">お安くご紹介</span>'
  }
];
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.benefits-section {
  position: relative;
  width: 100%;
  overflow: hidden;
}

// 背景
.background {
  position: absolute;
  inset: 0;
  pointer-events: none;

  .bg-texture {
    position: absolute;
    width: 108%;
    height: auto;
    left: -4%;
    top: -31%;
    max-width: none;
  }

  .bg-overlay {
    position: absolute;
    width: 126%;
    height: auto;
    left: -13%;
    top: -40%;
    max-width: none;
    mix-blend-mode: screen;
  }
}

// 優待セクション（上部）
.benefits-upper {
  position: relative;
  padding: 30px 16px 0;
}

.label-container {
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: -24px;
  z-index: 2;

  .label-bg {
    width: 320px;
    height: auto;
  }

  .label-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: $font-mincho;
    font-weight: $font-weight-bold;
    font-size: $font-3xl;
    color: $text-brown;
    white-space: nowrap;
    text-shadow: 0 0 4px $white, 0 0 10px $white;
  }
}

.benefits-box {
  position: relative;
  background: $white;
  padding: 40px 0 20px;
  margin: 0 auto 60px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.benefits-box-border {
  position: absolute;
  top: 4px;
  left: 4px;
  right: 4px;
  bottom: 4px;
  border: 1px solid $white;
  pointer-events: none;
}

.benefits-box-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.benefits-title {
  display: flex;
  align-items: flex-end;
  justify-content: center;
  letter-spacing: -2px;

  .title-main {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: $font-8xl;
    line-height: $font-8xl;
    background: linear-gradient(180deg, $accent-pink 19.231%, $accent-pink-dark 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .title-sub {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: $font-6xl;
    line-height: $font-6xl;
    color: $text-brown;
  }
}

.check-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 310px;
  padding: 16px 0;
  border-radius: 10px;
  border: 2px solid rgba(255, 137, 53, 0.6);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 6.5%, rgba(255, 255, 255, 0) 21%),
              linear-gradient(180deg, rgba(246, 95, 0, 0) 50%, rgba(246, 95, 0, 0.2) 87.805%),
              linear-gradient(90deg, #FF8935 0%, #FF8935 100%);
  box-shadow: 0 0 10px $white, 0 0 10px $white;
  text-decoration: none;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);

  .btn-highlight {
    font-family: $font-mincho;
    font-weight: $font-weight-bold;
    font-size: 28px;
    line-height: 30px;
    color: #FFEC5B;
  }

  .btn-text {
    font-family: $font-mincho;
    font-weight: $font-weight-bold;
    font-size: $font-3xl;
    line-height: 30px;
    color: $white;
  }
}

.box-decoration {
  position: absolute;
  width: 76px;
  height: auto;
  top: 31px;
  right: 8px;
  transform: rotate(-31deg);
  mix-blend-mode: multiply;
  opacity: 0.5;
}

// 区切り線
.divider {
  position: relative;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: -4px;

  img {
    height: 12px;
  }

  .divider-line {
    position: absolute;
    width: 100%;
    left: 0;
  }

  .divider-center {
    position: relative;
    width: 38px;
    height: 38px;
    z-index: 1;

    .badge-bg {
      width: 100%;
      height: 100%;
      border-radius: 100px;
      object-fit: cover;
    }

    .plus-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 20px;
      height: 20px;
    }
  }
}

// プレゼントセクション
.presents-section {
  position: relative;
  padding: 20px 20px 50px;
  min-height: 716px;
}

.presents-bg {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 802px;
  overflow: hidden;

  .present-bg-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: hue-rotate(0deg) saturate(1.2);
    mix-blend-mode: normal;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: #FFAF00;
    mix-blend-mode: hue;
  }
}

.paw-left {
  position: absolute;
  width: 166px;
  height: auto;
  top: -20px;
  left: -134px;
  transform: rotate(-24deg);
}

.paw-right {
  position: absolute;
  width: 127px;
  height: auto;
  top: 3px;
  right: -18px;
}

.presents-title {
  position: relative;
  text-align: center;
  margin-bottom: 30px;

  .title-row {
    display: flex;
    align-items: flex-end;
    justify-content: center;
    padding-right: 16px;
    margin-bottom: 12px;
  }

  .title-gouka,
  .title-daitokuten {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: $font-8xl;
    line-height: 50px;
    background: linear-gradient(180deg, #572D00 0%, #E99102 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-right: 0;
  }

  .title-number {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 80px;
    line-height: 80px;
    background: linear-gradient(180deg, #572D00 0%, #E99102 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-right: 0;
  }

  .title-present {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 36px;
    line-height: 50px;
    background: linear-gradient(180deg, #572D00 0%, #E99102 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-top: -10px;
  }
}

// 特典リスト
.benefits-list {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
}

.benefit-card {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: $white;
  border: 1px solid #FED88D;
}

.benefit-badge {
  position: relative;
  width: 50px;
  height: 59px;
  flex-shrink: 0;

  .badge-img {
    width: 100%;
    height: 58px;
    object-fit: cover;
  }

  .badge-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    .badge-label {
      font-family: $font-mincho;
      font-weight: $font-weight-semibold;
      font-size: $font-xs;
      line-height: $font-xs;
      background: linear-gradient(180deg, #572D00 0%, #E99102 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .badge-number {
      font-family: $font-mincho;
      font-weight: $font-weight-semibold;
      font-size: $font-6xl;
      line-height: $font-6xl;
      background: linear-gradient(180deg, #572D00 0%, #E99102 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }
}

.benefit-text {
  flex: 1;
  font-family: $font-mincho;
  font-weight: $font-weight-semibold;
  font-size: $font-2xl;
  line-height: 28px;
  color: $text-brown;

  :deep(.highlight) {
    font-weight: $font-weight-bold;
    background: linear-gradient(180deg, $accent-pink 19.231%, $accent-pink-dark 100%),
                linear-gradient(90deg, $text-brown 0%, $text-brown 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
}

// 詳細ボタン
.detail-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 310px;
  margin: 30px auto 0;
  padding: 16px 0;
  border-radius: 10px;
  border: 2px solid rgba(255, 137, 53, 0.6);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.35) 6.5%, rgba(255, 255, 255, 0) 21%),
              linear-gradient(180deg, #572D00 0%, #E99102 100%),
              linear-gradient(180deg, rgba(246, 95, 0, 0) 50%, rgba(246, 95, 0, 0.2) 87.805%),
              linear-gradient(90deg, #FF8935 0%, #FF8935 100%);
  box-shadow: 0 0 10px $white, 0 0 10px $white;
  font-family: $font-mincho;
  font-weight: $font-weight-bold;
  font-size: $font-5xl;
  line-height: 30px;
  color: $white;
  text-decoration: none;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.3);
}

// 下部グラデーション
.bottom-gradient {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: linear-gradient(180deg, rgba(253, 246, 229, 0) 0%, #FDF6E5 82.569%);
  transform: rotate(180deg);
  pointer-events: none;
}
</style>
