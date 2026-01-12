<template>
  <section id="contact" class="contact-section">
    <h2>Contact</h2>
    <div class="contact-container">
      <!-- 電話番号 -->
      <div class="contact-box">
        <a href="tel:03-64550296">03-64550296</a>
      </div>
      <!-- メールアドレス -->
      <div class="contact-box">
        <a href="mailto:lif.oshizumi@gmail.com?subject=お問い合わせ&body=こちらに詳細を記入してください。">lif.oshizumi@gmail.com</a>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.contact-section {
  padding: 60px;
  text-align: center;

  @media screen and (max-width: 500px) {
    width: 90%;
    padding: 20px 0;
    margin: 0 auto;
  }

  .contact-container {
    padding-top: 40px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 100px;

    @media screen and (max-width: 500px) {
      flex-direction: column;
      gap: 20px;
    }

    .contact-box {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 4px;
      font-size: 1.6rem;
    }
  }

  h2 {
    font-size: 2.5rem;
    color: #343a40;
    margin-bottom: 2rem;

    @media screen and (max-width: 500px) {
      font-size: 24px;
      margin-bottom: 20px;
      text-align: center;
    }
  }

  a {
    display: inline-block;

    @media screen and (max-width: 500px) {
      font-size: 18px;
    }

    img {
      width: 120px;
      height: auto;
      border-radius: 8px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
