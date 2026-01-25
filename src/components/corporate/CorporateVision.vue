<template>
  <section class="section">
    <div class="box" ref="box">
      <h2 class="title">Vision</h2>
      <h2 class="sub-title">「ペットライフの総合プラットフォーマーとして、業界をリードする存在になる」</h2>
      <p>
        不動産領域でのパイオニアとしての地位を確立し、ペットライフ全般のワンストップサービスを実現します。<br>ペットと暮らすための業界標準とベストプラクティスを創造し、全国のペットオーナーから最初に選ばれる、信頼されるブランドを目指します。
      </p>
      </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  width: 80%;
  padding: 60px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 90%;
    padding: 20px 0;
  }

  .container {
    display: flex;
    align-items: center;
    gap: 40px;

    img {
      width: 50%;
    }
  }

  .box {
    position: relative;
    padding: 40px 20px;
    border: 2px solid #6c757d;
    border-radius: 12px;
    text-align: center;

    @media screen and (max-width: 500px) {
      padding: 20px;
    }

    h2.title {
      position: absolute;
      top: -25px;
      left: 50%;
      transform: translateX(-50%);
      background-color: #fff;
      padding: 0 10px;
      font-size: 2.5rem;
      color: #343a40;

      @media screen and (max-width: 500px) {
        top: -15px;
        font-size: 24px;
        margin-bottom: 20px;
        text-align: center;
      }
    }

    h2.sub-title {
      font-size: 1.6rem;
      color: #343a40;
      margin-bottom: 20px;
      text-align: left;

      @media screen and (max-width: 500px) {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }

    p {
      font-size: 1.4rem;
      font-weight: 700;
      color: #6c757d;
      margin-top: 40px;
      line-height: 40px;

      @media screen and (max-width: 500px) {
        font-size: 12px;
        line-height: 30px;
        margin-top: 20px;
        text-align: left;
      }
    }
  }
}
</style>
