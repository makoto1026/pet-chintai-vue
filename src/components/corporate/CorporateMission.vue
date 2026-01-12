<template>
  <section class="section">
    <div class="container">
      <img class="mission-img" src="@/assets/images/corporate/mission.png" >
      <div class="box" ref="box">
        <h2 class="title">Mission</h2>
        <h2 class="sub-title">「ペットと人が共に幸せに暮らせる社会を創造する」</h2>
        <p>
          私たちは、ペットを家族の一員として受け入れる社会を実現することで、人とペットの豊かな共生社会の実現に貢献します。<br>単なる住まい探しではなく、人とペットの新しい暮らしの在り方を提案し、社会に変革をもたらすことを使命としています。
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.section {
  width: 80%;
  padding: 60px 0;
  display: flex;
  justify-content: top;
  align-items: start;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    padding: 0;
    width: 100%;
  }

  .container {
    display: flex;
    align-items: start;
    gap: 40px;

    @media screen and (max-width: 500px) {
      flex-direction: column;
      gap: 0px;
    }

    img {
      width: 50%;

      @media screen and (max-width: 500px) {
        width: 100%;
      }
    }
  }

  .box {
    width: 90%;
    padding: 0 20px;
    text-align: center;
    margin: 0 auto;

    @media screen and (max-width: 500px) {
      padding: 20px 0;
    }

    h2.title {
      font-size: 2.5rem;
      color: #343a40;
      text-align: left;
      margin-bottom: 40px;

      @media screen and (max-width: 500px) {
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
      text-align: left;

      @media screen and (max-width: 500px) {
        font-size: 12px;
        line-height: 30px;
        margin-top: 20px;
      }
    }
  }
}
</style>
