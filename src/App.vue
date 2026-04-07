<template>
  <router-view></router-view>
</template>

<style lang="scss">
#app {
  width: 100%;
  max-width: 430px;     /* 375基準なら 430 が無難。もっと広くなら 480 */
  min-height: 100dvh;   /* モバイルのアドレスバー対策 */
  margin: 0 auto;       /* PCでは中央寄せ */
  background: #fff;     /* コンテンツ領域 */
  overflow-x: hidden;   /* 横スクロール事故防止 */
}
</style>
