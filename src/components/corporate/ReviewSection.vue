<template>
  <section class="review-section">
    <div class="review-section__header">
      <h2 class="review-section__title">{{ title }}</h2>
      <p class="review-section__subtitle">{{ subtitle }}</p>
    </div>
    <div class="review-section__content">
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps<{
  title: string;
  subtitle: string;
}>();
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.review-section {
  background: $corp-base-cream;
  padding: 60px 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  &__header {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: $font-maru-gothic;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    color: $corp-text;
    margin: 0;
  }

  &__subtitle {
    font-family: $font-maru-gothic;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 1.2px;
    color: $corp-main-orange;
    margin: 10px 0 0;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
}
</style>
