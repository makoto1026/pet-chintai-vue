<template>
  <div class="header">
    <div class="logo">
      <a href="https://petchintai.com/">
        <AppLogo />
      </a>
    </div>
    <AppButton
      class="contact-button"
      @click="$router.push('/')"
    >
      <div class="button-content">
        <EmailOrangeIcon />
        <a href="https://petchintai.com/index.html#inquiry" class="button-text">お問い合わせ</a>
      </div>
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import AppLogo from '@/components/AppLogo.vue';
import AppButton from '@/components/AppButton.vue';
import EmailOrangeIcon from '@/components/icons/email-orange.vue';

</script>

<style scoped lang="scss">
.header {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  padding: 5px 0px 0px 5px;
}

.contact-button {
  width: 154px;
  font-size: $md;
}

.button-content {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.button-text {
  color: $primary;
  font-size: $sm;
  font-family: $font-gothic;
  text-decoration: none;
}
</style>