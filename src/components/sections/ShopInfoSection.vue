<template>
  <section class="shop-info">
    <h2 class="shop-info__title">店舗情報</h2>

    <div class="shop-info__card">
      <div class="shop-info__image">
        <img src="@/assets/images/offices/office.jpg" alt="恵比寿オフィス" />
      </div>

      <div class="shop-info__details">
        <h3 class="shop-info__name">株式会社GLH</h3>
        <div class="shop-info__divider shop-info__divider--thick"></div>

        <div class="shop-info__item">
          <span class="shop-info__label">所在地</span>
          <div class="shop-info__value">
            <p>〒150-0002</p>
            <p>東京都渋谷区渋谷１丁目１−３ アミーホール THE HUB 青山WEST  403</p>
            <a href="https://www.google.co.jp/maps?q=35.6614533,139.7073725" target="_blank" class="shop-info__map-link">
              <span class="shop-info__map-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 1.66666C6.77504 1.66666 4.16671 4.27499 4.16671 7.49999C4.16671 11.875 10 18.3333 10 18.3333C10 18.3333 15.8334 11.875 15.8334 7.49999C15.8334 4.27499 13.225 1.66666 10 1.66666ZM10 9.58332C8.85004 9.58332 7.91671 8.64999 7.91671 7.49999C7.91671 6.34999 8.85004 5.41666 10 5.41666C11.15 5.41666 12.0834 6.34999 12.0834 7.49999C12.0834 8.64999 11.15 9.58332 10 9.58332Z" fill="#5C442A"/>
                </svg>
              </span>
              <span class="shop-info__map-text">Google Map</span>
            </a>
          </div>
        </div>
        <div class="shop-info__divider"></div>

        <div class="shop-info__item">
          <span class="shop-info__label">アクセス</span>
          <div class="shop-info__value">
            <p>JR「渋谷」（宮益坂方面出口）徒歩6分</p>
            <p>東京メトロ「表参道」（B2出口）徒歩6分</p>
          </div>
        </div>
        <div class="shop-info__divider"></div>

        <div class="shop-info__item">
          <span class="shop-info__label">TEL</span>
          <div class="shop-info__value">
            <p>0353242316</p>
          </div>
        </div>
        <div class="shop-info__divider"></div>

        <div class="shop-info__item">
          <span class="shop-info__label">営業時間</span>
          <div class="shop-info__value">
            <p>24時間</p>
          </div>
        </div>
        <div class="shop-info__divider"></div>

        <div class="shop-info__item">
          <span class="shop-info__label">定休日</span>
          <div class="shop-info__value">
            <p>なし</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// ShopInfoSection component
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/mixins';

.shop-info {
  max-width: $max-container-width;
  margin: 0 auto;
  background: #F7D3BC;
  padding: 30px 20px;
  box-sizing: border-box;

  &__title {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 26px;
    line-height: 40px;
    color: $text-brown;
    text-align: center;
    margin-bottom: 20px;
  }

  &__card {
    background: #fff;
    border: 1px solid #F7D3BC;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__image {
    width: 100%;
    height: 300px;
    border-radius: 4px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__name {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 16px;
    line-height: 24px;
    color: $text-brown;
  }

  &__divider {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed rgba(92, 68, 42, 0.3);

    &--thick {
      border-bottom: 1px solid rgba(92, 68, 42, 0.3);
    }
  }

  &__item {
    display: flex;
    align-items: flex-start;
  }

  &__label {
    font-family: $font-gothic;
    font-weight: $font-weight-medium;
    font-size: 12px;
    line-height: 18px;
    color: $text-brown;
    opacity: 0.6;
    width: 65px;
    flex-shrink: 0;
  }

  &__value {
    font-family: $font-gothic;
    font-weight: $font-weight-medium;
    font-size: 14px;
    line-height: 22px;
    color: $text-brown;
    flex: 1;

    p {
      margin: 0;
    }
  }

  &__map-link {
    display: inline-flex;
    align-items: center;
    gap: 0;
    text-decoration: none;
    margin-top: 2px;
  }

  &__map-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
  }

  &__map-text {
    font-family: $font-gothic;
    font-weight: $font-weight-bold;
    font-size: 14px;
    line-height: 22px;
    color: $text-brown;
    text-decoration: underline;
  }
}
</style>
