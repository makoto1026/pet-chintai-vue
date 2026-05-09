<template>
  <router-view></router-view>
</template>

<script setup lang="ts">
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

watch(
  () => route.path,
  (path) => {
    if (path.startsWith('/admin')) {
      document.body.classList.add('is-admin-route');
    } else {
      document.body.classList.remove('is-admin-route');
    }
  },
  { immediate: true }
);
</script>

<style lang="scss">
#app {
  width: 100%;
  max-width: 430px;     /* 375基準なら 430 が無難。もっと広くなら 480 */
  min-height: 100dvh;   /* モバイルのアドレスバー対策 */
  margin: 0 auto;       /* PCでは中央寄せ */
  background: #fff;     /* コンテンツ領域 */
  overflow-x: hidden;   /* 横スクロール事故防止 */
}

/* 管理画面ルートでは幅制限を外す */
body.is-admin-route #app {
  max-width: none;
}
</style>
