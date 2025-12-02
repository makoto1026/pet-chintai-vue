<template>
  <section class="consultation-section">
    <div class="consultation-section__background">
      <img
        :src="backgroundImage"
        alt=""
        class="consultation-section__bg-image"
      />
      <div v-if="!hideTopOverlay" class="consultation-section__overlay"></div>
      <div v-if="hideTopOverlay" class="consultation-section__white-gradient"></div>
    </div>
    <div class="consultation-section__content">
      <CtaButton
        variant="orange"
        sub-text="さまざまな特典つき"
        main-text="各種優待はこちら"
        href="https://pet-chintai-vue.web.app/priorities"
      />
      <CtaButton
        variant="green"
        sub-text="迷ってる方はこちら"
        main-text="LINEで相談する"
        href="https://form.lmes.jp/landing-qr/2002059008-M8KDDdoP?uLand=Ae55n6"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import CtaButton from '@/components/common/CtaButton.vue';
import backgroundImage from '@/assets/images/consultation-bg.png';

defineProps({
  hideTopOverlay: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.consultation-section {
  position: relative;
  width: 100%;
  max-width: $max-container-width;
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

  &__white-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 100%
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
