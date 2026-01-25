<template>
  <section id="services" class="service-section">
    <h2>Service</h2>
    <div class="service-cards">
      <a href="https://petchintai.com/" class="card">
        <img src="@/assets/images/corporate/pet.png" alt="Pet" />
        <div class="overlay">
          <h3>ペット賃貸</h3>
          <p>ペットと一緒に楽しむ特別な空間。</p>
        </div>
      </a>
      <a href="/family" class="card">
        <img src="@/assets/images/corporate/family.png" alt="Family" />
        <div class="overlay">
          <h3>ファミリー賃貸</h3>
          <p>大切なひとときを支えるサポート。</p>
        </div>
      </a>
      <a href="/yorushoku" class="card">
        <img class="small" src="@/assets/images/corporate/yorushoku.jpeg" alt="Yorushoku" />
        <div class="overlay">
          <h3>夜職賃貸</h3>
          <p>あなたらしい場所を。</p>
        </div>
      </a>
    </div>
  </section>
</template>

<style scoped lang="scss">
.service-section {
  padding: 60px;
  text-align: center;

  @media screen and (max-width: 500px) {
    width: 90%;
    padding: 20px 0;
    margin: 0 auto;
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

  .service-cards {
    display: flex;
    gap: 1.5rem;
    justify-content: center;
    flex-wrap: wrap;

    .card {
      position: relative;
      width: 300px;
      height: 300px;
      border-radius: 12px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      background: white;
      overflow: hidden;
      text-decoration: none;
      color: inherit;
      display: flex;
      justify-content: center;
      align-items: center;

      @media screen and (max-width: 500px) {
        width: 200px;
        height: 200px;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
        transition: transform 0.3s ease;
      }

      .small {
        width: 90%;
        height: 90%;
        margin: auto;
      }

      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        opacity: 0;
        transition: opacity 0.3s ease;
        border-radius: 12px;

        h3 {
          font-size: 1.5rem;
          color: white;
          margin-bottom: 0.5rem;
        }

        p {
          font-size: 1rem;
          color: #f8f9fa;
        }
      }

      &:hover {
        img {
          transform: scale(1.1);
        }

        .overlay {
          opacity: 1;
        }
      }
    }
  }
}
</style>
