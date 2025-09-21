<template>
  <div class="footer">
    <div class="footer-link-container">
      <div class="footer-link">
        <a href="https://petchintai.com/">ペット賃貸</a>
        <a href="https://petchintai.com/privacy.html">プライバシーポリシー</a>
      </div>
      <p class="copyright">© 2025 ペット賃貸</p>
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