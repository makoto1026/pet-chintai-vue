<template>
  <section id="company" class="company-section">
    <div class="section-bg-top"></div>

    <div class="company-content">
      <div class="section-header">
        <h2 class="section-title">Company</h2>
        <p class="section-subtitle">会社概要</p>
      </div>

      <div class="company-image">
        <img src="@/assets/images/corporate/company-image.png" alt="会社イメージ" />
      </div>

      <div class="company-info">
        <div class="info-row">
          <span class="info-label">社名</span>
          <span class="info-value">株式会社GLH</span>
        </div>
        <div class="info-row">
          <span class="info-label">所在地</span>
          <span class="info-value">
            〒150-0001<br />
            東京都渋谷区神宮前２丁目３−１４<br />
            サンフェル神宮前 208
          </span>
        </div>
        <div class="info-row">
          <span class="info-label">電話番号</span>
          <span class="info-value">03-5962-5376</span>
        </div>
        <div class="info-row">
          <span class="info-label">E-mail</span>
          <span class="info-value">info@glh613.com</span>
        </div>
        <div class="info-row">
          <span class="info-label">設立</span>
          <span class="info-value">2025年6月13日</span>
        </div>
        <div class="info-row">
          <span class="info-label">代表</span>
          <span class="info-value">印貢 幸実</span>
        </div>
        <div class="info-row">
          <span class="info-label">事業内容</span>
          <span class="info-value">不動産の取得・賃貸・売買事業</span>
        </div>
        <div class="info-row last">
          <span class="info-label">免許番号</span>
          <span class="info-value">
            東京都知事（1）第112969号<br />
          </span>
        </div>
      </div>

      <div class="company-map">
        <iframe
          src="https://maps.google.com/maps?q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%8B%E8%B0%B7%E5%8C%BA%E7%A5%9E%E5%AE%AE%E5%89%8D2%E4%B8%81%E7%9B%AE3-14&t=&z=17&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.company-section {
  background: $corp-base-white;
  position: relative;

  .section-bg-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 83px;
    background: $corp-base-cream;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, rgba(255, 246, 235, 0), $corp-base-cream);
    pointer-events: none;
  }
}

.company-content {
  position: relative;
  padding: 60px 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.section-header {
  width: 100%;
  text-align: left;

  .section-title {
    font-family: $font-maru-gothic;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    color: $corp-text;
    margin: 0 0 10px;
  }

  .section-subtitle {
    font-family: $font-maru-gothic;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 1.2px;
    color: $corp-main-orange;
    margin: 0;
  }
}

.company-image {
  width: 100%;
  height: 260px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.company-info {
  width: 100%;

  .info-row {
    display: flex;
    gap: 10px;
    padding: 20px 0;
    border-top: 1px solid $corp-text-light;

    &.last {
      border-bottom: 1px solid $corp-text-light;
    }

    .info-label {
      font-family: $font-maru-gothic;
      font-weight: 700;
      font-size: 13.5px;
      line-height: 26px;
      color: $corp-text;
      width: 90px;
      flex-shrink: 0;
    }

    .info-value {
      font-family: $font-maru-gothic;
      font-weight: 500;
      font-size: 13.5px;
      line-height: 26px;
      color: $corp-text;
      flex: 1;
    }
  }
}

.company-map {
  width: 100%;
  height: 280px;
  overflow: hidden;
  position: relative;
  z-index: 1;

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
}
</style>
