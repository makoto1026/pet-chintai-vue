<template>
  <div class="footer">
    <div class="footer-link-container">
      <div class="footer-link">
        <router-link to="/" class="footer-section__privacy-link">ペット住まいラボ</router-link>
        <router-link to="/privacy-policy" class="footer-section__privacy-link">プライバシーポリシー</router-link>
      </div>
      <p class="copyright">© 2025 ペット住まいラボ</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppFooter',
});
</script>

<style scoped lang="scss">
.footer {
  height: 124px;
  background-color: $backgroundCream;
  color: $secondary;
}

.footer-link-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.footer-link {
  display: flex;
  justify-content: center;
  gap: 20px;
  font-size: $xs;
  font-family: $font-gothic;
  a {
    color: $secondary;
  }
}

.copyright {
  font-size: $xs;
  text-align: center;
  color: $secondary;
  margin-top: 10px;
  font-family: $font-gothic;
}
</style>