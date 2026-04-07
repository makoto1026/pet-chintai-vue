<template>
  <div class="review-card">
    <div class="review-card__image">
      <img v-if="review.image" :src="review.image" :alt="review.title" />
      <div v-else class="review-card__image-placeholder" />
    </div>
    <div class="review-card__info">
      <h3 class="review-card__title">{{ review.title }}</h3>
      <p class="review-card__customer">{{ review.customerInfo }}</p>
    </div>
    <p class="review-card__body">{{ review.body }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { ReviewItem } from '@/entity/review';

defineProps<{
  review: ReviewItem;
}>();
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.review-card {
  background: $corp-base-white;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  &__image {
    width: 100%;
    height: 280px;
    border-radius: 20px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &__image-placeholder {
    width: 100%;
    height: 100%;
    background: #D9D9D9;
  }

  &__info {
    display: flex;
    flex-direction: column;
  }

  &__title {
    font-family: $font-maru-gothic;
    font-weight: 700;
    font-size: 18px;
    line-height: 30px;
    color: $corp-text;
    margin: 0;
  }

  &__customer {
    font-family: $font-maru-gothic;
    font-weight: 500;
    font-size: 13.5px;
    line-height: 26px;
    color: $corp-text;
    margin: 0;
  }

  &__body {
    font-family: $font-maru-gothic;
    font-weight: 500;
    font-size: 13.5px;
    line-height: 26px;
    color: $corp-text;
    margin: 0;
    white-space: pre-wrap;
  }
}
</style>
