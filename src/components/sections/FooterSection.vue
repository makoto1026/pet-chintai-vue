<template>
  <footer class="footer-section">
    <router-link to="/privacy-policy" class="footer-section__privacy-link">プライバシーポリシー</router-link>
    <p class="footer-section__copyright">© 2025 ペット住まいラボ</p>
  </footer>
</template>

<script setup lang="ts">
// FooterSection component
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/mixins';

.footer-section {
  max-width: $max-container-width;
  margin: 0 auto;
  background: $text-brown;
  padding: 20px 10px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  &__privacy-link {
    font-family: $font-gothic;
    font-weight: $font-weight-semibold;
    font-size: 11px;
    line-height: 12px;
    color: #fff;
    text-decoration: underline;
    text-align: center;
  }

  &__copyright {
    font-family: $font-gothic;
    font-weight: $font-weight-medium;
    font-size: 11px;
    line-height: 12px;
    color: #fff;
    text-align: center;
  }
}
</style>
