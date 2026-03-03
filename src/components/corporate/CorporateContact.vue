<template>
  <section id="contact" class="contact-section">
    <div class="contact-bg-bottom"></div>

    <div class="contact-box">
      <div class="section-header">
        <h2 class="section-title">Contact</h2>
        <p class="section-subtitle">お問い合わせ</p>
      </div>

      <p class="contact-lead">
        ご質問やご相談などございましたら<br />
        下記よりお気軽にご連絡ください
      </p>

      <div class="contact-methods">
        <!-- 電話 -->
        <div class="contact-method">
          <p class="method-title">お電話でのお問い合わせ</p>
          <div class="phone-row">
            <img src="@/assets/images/corporate/phone.svg" alt="" class="phone-icon" />
            <a href="tel:03-6455-0296" class="phone-number">03-6455-0296</a>
          </div>
          <p class="phone-note">受付時間： 平日XX:00〜XX:00</p>
        </div>

        <!-- LINE -->
        <div class="contact-method">
          <p class="method-title">LINEでのお問い合わせ</p>
          <a href="#" class="line-button">
            <span class="line-icon-wrap">
              <img src="@/assets/images/corporate/line-icon.svg" alt="" />
            </span>
            <span>お問い合わせ</span>
          </a>
        </div>

        <!-- メール -->
        <div class="contact-method">
          <p class="method-title">メールでのお問い合わせ</p>
          <a href="mailto:lif.oshizumi@gmail.com" class="mail-button">
            <img src="@/assets/images/corporate/inquiry-button.png" alt="お問い合わせ" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.contact-section {
  background: $corp-base-cream;
  padding: 30px 20px 60px;
  position: relative;

  .contact-bg-bottom {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 180px;
    background: $corp-main-brown;
    border-radius: 20px 20px 0 0;
  }
}

.contact-box {
  position: relative;
  background: $corp-base-white;
  border: 4px solid $corp-main-brown;
  border-radius: 20px;
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.section-header {
  width: 100%;
  text-align: center;

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

.contact-lead {
  font-family: $font-maru-gothic;
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: $corp-text;
  text-align: center;
  margin: 0;
}

.contact-methods {
  width: 100%;

  .contact-method {
    padding: 20px 0;
    border-top: 1px solid $corp-text-light;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;

    &:last-child {
      gap: 16px;
    }

    .method-title {
      font-family: $font-maru-gothic;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: $corp-text;
      text-align: center;
      margin: 0;
    }

    .phone-row {
      display: flex;
      align-items: center;
      gap: 8px;

      .phone-icon {
        width: 30px;
        height: 30px;
      }

      .phone-number {
        font-family: $font-maru-gothic;
        font-weight: 700;
        font-size: 32px;
        line-height: 40px;
        color: $corp-main-orange;
        text-decoration: underline;
      }
    }

    .phone-note {
      font-family: $font-maru-gothic;
      font-weight: 500;
      font-size: 12px;
      line-height: 24px;
      color: $corp-text;
      margin: 0;
    }
  }
}

.line-button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  width: 200px;
  height: 50px;
  background: $corp-line-green;
  border-radius: 100px;
  text-decoration: none;
  padding-right: 5px;

  .line-icon-wrap {
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

.mail-button {
  display: block;
  text-decoration: none;

  img {
    width: 200px;
    height: auto;
  }
}
</style>
