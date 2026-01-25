<template>
  <section class="company-section">
    <h2 class="company-title">Company</h2>
    <ul>
      <li>
        <p class="left">代表者名</p>
        <p>印貢 幸実</p>
      </li>
      <li>
        <p class="left">会社所在地</p>
        <p>東京都渋谷区渋谷３丁目１５−５ パールビル 4F</p>
      </li>
      <li>
        <p class="left">メールアドレス</p>
        <a href="mailto:lif.oshizumi@gmail.com?subject=お問い合わせ&body=こちらに詳細を記入してください。">lif.oshizumi@gmail.com</a>
      </li>
    </ul>
  </section>
</template>

<style scoped lang="scss">
.company-section {
  width: 80%;
  padding: 60px 0;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 90%;
    padding: 20px 0;
  }

  .company-title {
    font-size: 2.5rem;
    color: #343a40;
    margin-bottom: 40px;
  }

  ul {
    text-decoration: none;
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      margin: 0 20px;
      padding: 10px;
      border-bottom: 1px solid #6c757d;
      text-align: center;
      font-size: 12px;
      color: #6c757d;
      display: flex;
      gap: 40px;

      @media screen and (max-width: 500px) {
        margin: 0 10px;
        padding: 10px;
      }

      .left {
        width: 100px;
      }

      p {
        margin: 0;
      }
    }
  }
}
</style>
