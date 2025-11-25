<template>
  <section class="consultation-section">
    <div class="consultation-section__background">
      <img
        :src="backgroundImage"
        alt=""
        class="consultation-section__bg-image"
      />
      <div class="consultation-section__overlay"></div>
    </div>
    <div class="consultation-section__content">
      <CtaButton
        variant="orange"
        sub-text="WEBでカンタン！"
        main-text="来店予約はこちら"
        href="#"
      />
      <CtaButton
        variant="green"
        sub-text="迷ってる方はこちら"
        main-text="LINEで相談する"
        href="#"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import CtaButton from '@/components/common/CtaButton.vue';
import backgroundImage from '@/assets/images/consultation-bg.png';
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.consultation-section {
  position: relative;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 30px 20px;
  box-sizing: border-box;

  &__background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-color: #F7D3BC;
  }

  &__bg-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.55;
  }

  &__overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(247, 211, 188, 1) 18.5%,
      rgba(247, 211, 188, 0) 50%
    ),
    linear-gradient(
      90deg,
      rgba(193, 112, 60, 0.3) 0%,
      rgba(193, 112, 60, 0.3) 100%
    );
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>
