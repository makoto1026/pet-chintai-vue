<template>
  <section id="main-visual" class="main-visual">
    <h1>業界をリードする<br>ペットライフの<br>総合プラットフォーマーへ</h1>
  </section>
</template>

<style scoped lang="scss">
.main-visual {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url('@/assets/images/corporate/main-visual.jpg');
  text-align: center;
  background-size: cover;
  background-position: center;
  position: relative;

  @media screen and (max-width: 500px) {
    background-size: cover;
    background-position: right;
  }

  h1 {
    position: absolute;
    top: 35%;
    left: 10%;
    font-size: 3rem;
    font-weight: bold;
    text-align: left;

    @media screen and (max-width: 500px) {
      font-size: 20px;
      top: 75%;
      left: 0%;
      right: 0%;
      background-color: white;
      padding: 10px;
      text-align: right;
    }
  }
}
</style>
