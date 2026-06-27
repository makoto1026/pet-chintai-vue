<template>
  <main class="property-purchase-page">
    <section class="hero">
      <img src="@/assets/images/logo.svg" alt="ペット住まいラボ" class="hero__logo" />
      <p class="hero__eyebrow">不動産購入をご検討中の方向け</p>
      <h1 class="hero__title">物件購入ガイド</h1>
      <p class="hero__lead">
        ペットと暮らす住まい探しで確認しておきたいポイントを、資料でご覧いただけます。
      </p>
      <a
        :href="pdfUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="hero__button"
        @click="trackEvent('物件購入ガイド_PDFを開く')"
      >
        資料を開く
      </a>
    </section>

    <section class="notes">
      <h2 class="notes__title">ご案内</h2>
      <ul class="notes__list">
        <li>資料は別タブで開きます。</li>
        <li>表示に時間がかかる場合は、通信環境のよい場所で再度お試しください。</li>
        <li>詳しいご相談はLINEからお気軽にお問い合わせください。</li>
      </ul>
      <a
        href="https://s.lmes.jp/landing-qr/2002059008-M8KDDdoP?uLand=zI2YQN"
        target="_blank"
        rel="noopener noreferrer"
        class="notes__line"
        @click="trackEvent('物件購入ガイド_LINE相談')"
      >
        LINEで相談する
      </a>
    </section>
  </main>
</template>

<script setup lang="ts">
const pdfUrl = 'https://firebasestorage.googleapis.com/v0/b/pet-chintai-vue.firebasestorage.app/o/documents%2Fproperty-purchase.pdf?alt=media';

interface WindowWithPT extends Window {
  _pt_sp_2?: { push: (method: string, data: { eventName: string }) => void };
}

const trackEvent = (eventName: string) => {
  const w = window as WindowWithPT;
  w._pt_sp_2?.push('setCustomEvent', { eventName });
};
</script>

<style scoped lang="scss">
.property-purchase-page {
  min-height: 100dvh;
  background:
    linear-gradient(180deg, rgba(255, 248, 232, 0.95) 0%, rgba(255, 255, 255, 1) 58%),
    #fff;
  color: #4c3524;
  font-family: 'Zen Kaku Gothic New', system-ui, sans-serif;
}

.hero {
  padding: 34px 24px 30px;
  text-align: center;

  &__logo {
    width: 148px;
    height: auto;
    margin-bottom: 28px;
  }

  &__eyebrow {
    display: inline-block;
    margin-bottom: 14px;
    padding: 6px 14px;
    border: 1px solid #f0c46d;
    border-radius: 999px;
    color: #8a5a12;
    font-size: 13px;
    font-weight: 700;
    background: #fff9e8;
  }

  &__title {
    margin: 0;
    color: #5c442a;
    font-family: 'Shippori Mincho', serif;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.25;
  }

  &__lead {
    margin: 18px auto 28px;
    max-width: 330px;
    color: #6c5a49;
    font-size: 15px;
    font-weight: 500;
    line-height: 1.8;
  }

  &__button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: min(100%, 320px);
    min-height: 56px;
    border-radius: 999px;
    background: #26a64a;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    text-decoration: none;
    box-shadow: 0 8px 18px rgba(38, 166, 74, 0.24);
  }
}

.notes {
  margin: 0 20px 30px;
  padding: 20px;
  border: 1px solid #f1dfc7;
  border-radius: 8px;
  background: #fff;

  &__title {
    margin: 0 0 12px;
    color: #5c442a;
    font-size: 16px;
    font-weight: 700;
  }

  &__list {
    display: grid;
    gap: 8px;
    margin: 0;
    padding-left: 20px;
    color: #6c5a49;
    font-size: 14px;
    line-height: 1.7;
  }

  &__line {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 48px;
    margin-top: 18px;
    border: 1px solid #26a64a;
    border-radius: 999px;
    color: #168a36;
    font-size: 15px;
    font-weight: 700;
    text-decoration: none;
  }
}
</style>
