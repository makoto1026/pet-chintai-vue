<template>
  <footer class="corp-footer">
    <div class="footer-main">
      <div class="footer-content">
        <div class="footer-logo">
          <img src="@/assets/images/corporate/logo.svg" alt="GLH Inc." />
        </div>

        <div class="footer-company">
          <p class="company-name">株式会社GLH</p>
          <p class="company-license">
            土交通大臣（~~）第~~~~号<br />
            XX-ユ-XXXXXX
          </p>
        </div>

        <div class="footer-info">
          <p>〒150-0001</p>
          <p>東京都渋谷区神宮前２丁目３−１４ サンフェル神宮前 208</p>
          <p>Tel : 03-6455-0296</p>
          <p>E-Mail : lif.oshizumi@gmail.com</p>
        </div>

        <div class="footer-cta">
          <a href="mailto:lif.oshizumi@gmail.com" class="footer-btn">
            <span class="icon-wrap">
              <img src="@/assets/images/corporate/email-white.svg" alt="" />
            </span>
            <span>お問い合わせ</span>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2026 GLH.inc All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.corp-footer {
  .footer-main {
    background: $corp-main-brown;
    padding: 0 20px 60px;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  .footer-logo {
    img {
      height: 54px;
      width: auto;
      filter: brightness(0) invert(1);
    }
  }

  .footer-company {
    .company-name {
      font-family: $font-maru-gothic;
      font-weight: 700;
      font-size: 18px;
      line-height: 30px;
      color: white;
      margin: 0 0 8px;
    }

    .company-license {
      font-family: $font-maru-gothic;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      color: white;
      margin: 0;
    }
  }

  .footer-info {
    p {
      font-family: $font-maru-gothic;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      color: white;
      margin: 0;
    }
  }

  .footer-cta {
    display: flex;
    justify-content: center;

    .footer-btn {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      width: 240px;
      height: 64px;
      border: 1.5px solid white;
      border-radius: 100px;
      text-decoration: none;
      padding-right: 6px;

      .icon-wrap {
        width: 42px;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      span {
        font-family: $font-maru-gothic;
        font-weight: 700;
        font-size: 16px;
        line-height: 24px;
        color: white;
      }
    }
  }
}

.footer-bottom {
  background: $corp-base-cream;
  padding: 30px 20px;

  p {
    font-family: $font-maru-gothic;
    font-weight: 700;
    font-size: 12px;
    line-height: 24px;
    color: $corp-text;
    text-align: center;
    margin: 0;
  }
}
</style>
