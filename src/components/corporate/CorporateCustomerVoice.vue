<template>
  <section class="customer-voice-section">
    <h2>Customer Voice</h2>
    <div class="container">
      <div class="card card1">
        <div class="name-box">
          <img src="@/assets/images/corporate/woman.png" alt="customer1" />
          <p class="name">Y.H 様</p>
        </div>
        <p class="content">
          「今回色々と無理をお願いし、真摯に受け止めてくださり、本当に助かりました。ありがとうございました。世間にペット不動産屋さんはあるものの、御社、皆さまとのご縁は特別で感謝しかないです。末永いお付き合いを今後ともよろしくお願いいたします。」
        </p>
      </div>
      <div class="card card2">
        <div class="name-box">
          <img src="@/assets/images/corporate/man.png" alt="customer1" />
          <p class="name">R.F 様</p>
        </div>
        <p class="content">
          「ペット賃貸さんにお世話になりました！要望が多い私の条件にも、親身になって話を聞いていただきとても素敵な物件を紹介していただきました。店舗来店した際もみなさんで愛犬も可愛がっていただき、嬉しい気持ちでいっぱいでした。またお会いできることを楽しみにしています。」

        </p>
      </div>
      <div class="card card3">
        <div class="name-box">
          <img src="@/assets/images/corporate/woman.png" alt="customer1" />
          <p class="name">K.S 様</p>
        </div>
        <p class="content">
          「今回ご紹介でペット賃貸さんにお願いしました！とても親切だよとご紹介いただいた通りで、最初からお引越し後までご親切に対応いただきました。たくさん悩んでしまい、内見も何度もお付き合いいただきましたが、嫌な顔ひとつせず、お付き合いいただき本当に感謝の気持ちでいっぱいです。おかげさまで妥協せず良い物件と巡り合うことができ、愛犬も広くなったお部屋に大満足で過ごしています。この度はありがとうございました！」
        </p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.customer-voice-section {
  width: 80%;
  padding: 60px 0;
  text-align: center;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 90%;
    padding: 20px 0;
  }

  h2 {
    font-size: 2.5rem;
    margin-bottom: 2rem;
    color: #343a40;

    @media screen and (max-width: 500px) {
      font-size: 24px;
      margin-bottom: 20px;
      text-align: center;
    }
  }

  .container {
    display: flex;
    gap: 20px;

    @media screen and (max-width: 500px) {
      flex-direction: column;
    }

    .card {
      border-radius: 20px;
      border: 4px solid #6c757d;
      padding: 20px;

      @media screen and (max-width: 500px) {
        border: 2px solid #6c757d;
        padding: 10px;
      }
    }

    .name-box {
      display: flex;
      align-items: center;
      gap: 20px;

      img {
        width: 100px;

        @media screen and (max-width: 500px) {
          width: 50px;
        }
      }

      .name {
        font-size: 30px;
        font-weight: bold;

        @media screen and (max-width: 500px) {
          font-size: 20px;
        }
      }
    }
    .content {
      font-size: 1.0rem;
      color: #6c757d;
      text-align: left;

      @media screen and (max-width: 500px) {
        font-size: 12px;
      }
    }
  }
}
</style>
