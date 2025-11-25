<template>
  <a
    :href="href"
    :class="['cta-button', `cta-button--${variant}`]"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="cta-button__sub">{{ subText }}</span>
    <span class="cta-button__main">{{ mainText }}</span>
  </a>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

defineProps({
  variant: {
    type: String as () => 'orange' | 'green',
    required: true
  },
  subText: {
    type: String,
    required: true
  },
  mainText: {
    type: String,
    required: true
  },
  href: {
    type: String,
    required: true
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.cta-button {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 16px 0;
  width: 280px;
  border-radius: 10px;
  box-shadow:
    0px 0px 10px 0px rgba(255, 255, 255, 1),
    0px 0px 10px 0px rgba(255, 255, 255, 1);
  overflow: hidden;
  text-align: center;
  color: $white;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.9;
  }

  &--orange {
    background: linear-gradient(
      180deg,
      rgba(246, 95, 0, 0) 50%,
      rgba(246, 95, 0, 0.2) 87.805%
    ),
    linear-gradient(90deg, $btn-orange 0%, $btn-orange 100%);
  }

  &--green {
    background: linear-gradient(
      180deg,
      rgba(9, 172, 40, 0) 50%,
      rgba(9, 172, 40, 0.2) 87.805%
    ),
    linear-gradient(90deg, $btn-green 0%, $btn-green 100%);
  }

  &__sub {
    font-family: $font-gothic-a1;
    font-size: $font-md;
    font-weight: $font-weight-bold;
    line-height: 14px;
    letter-spacing: 1.12px;
    text-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  }

  &__main {
    font-family: $font-gothic-a1;
    font-size: $font-4xl;
    font-weight: $font-weight-bold;
    line-height: 30px;
  }
}
</style>
