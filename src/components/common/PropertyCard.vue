<template>
  <div class="property-card-container" @click="openUrl">
    <div class="property-card-container__image">
      <img :src="image" :alt="area" />
    </div>
    <div class="property-card-container__info">
      <p class="property-card-container__area">{{ area }}</p>
      <p class="property-card-container__price">
        <span class="property-card-container__price-value">{{ price }}</span>
        <span class="property-card-container__price-unit">円</span>
      </p>
      <p class="property-card-container__detail">（{{ layout }}・{{ size }}）</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// PTエンジンのイベントトラッキング
declare const _pt_sp_2: { push: (method: string, data: { eventName: string }) => void } | undefined;
const trackEvent = (eventName: string) => {
  _pt_sp_2?.push('setCustomEvent', { eventName });
};

const props = defineProps({
  image: {
    type: String,
    required: true
  },
  area: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  layout: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  eventName: {
    type: String,
    required: true
  }
});

// urlを開けるようにする
const openUrl = () => {
  trackEvent(props.eventName);
  window.open(props.url, '_blank');
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.property-card-container {
  width: 170px;
  background: $white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &__image {
    width: 100%;
    height: 212px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__info {
    padding: 10px 10px 10px;
  }

  &__area {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: $font-lg;
    line-height: 24px;
    color: $text-brown;
    margin: 0;
  }

  &__price {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    line-height: 24px;
    color: $text-brown;
    margin: 0;
  }

  &__price-value {
    font-size: $font-lg;
  }

  &__price-unit {
    font-size: $font-xs;
  }

  &__detail {
    font-family: $font-mincho;
    font-weight: $font-weight-regular;
    font-size: $font-xs;
    line-height: 20px;
    color: $text-brown;
    text-align: left;
    margin: 0;
  }
}
</style>
