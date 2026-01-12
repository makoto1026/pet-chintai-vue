<template>
  <div class="container">
    <img src="@/assets/images/corporate/worker.png" alt="worker" />
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 500px) {
    width: 90%;
    margin: 0 auto;
  }

  img {
    width: 100%;
    border-radius: 20px;

    @media screen and (max-width: 500px) {
      border-radius: 0;
    }
  }
}
</style>
