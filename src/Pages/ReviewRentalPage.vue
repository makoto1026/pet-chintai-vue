<template>
  <div class="review-page">
    <CorporateHeader />
    <div class="review-page__spacer" />
    <ReviewSection title="Review" subtitle="賃貸のお客様の声">
      <ReviewCard
        v-for="review in reviews"
        :key="review.id"
        :review="review"
      />
    </ReviewSection>
    <CorporateContact />
    <CorporateFooter />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import CorporateHeader from '@/components/corporate/CorporateHeader.vue';
import CorporateContact from '@/components/corporate/CorporateContact.vue';
import CorporateFooter from '@/components/corporate/CorporateFooter.vue';
import ReviewSection from '@/components/corporate/ReviewSection.vue';
import ReviewCard from '@/components/corporate/ReviewCard.vue';
import { ReviewItem } from '@/entity/review';

const reviews = ref<ReviewItem[]>([
  {
    id: 'rental-1',
    image: '@/assets/images/reviews/rental_01.jpg',
    title: '保護猫と暮らせる理想の家！',
    customerInfo: '30代女性 R様',
    body: '保護猫をお迎えしたくて、ペット住まいラボに相談しました！\n保護団体ともたくさんコネクションを持っていて、\n猫ちゃんの紹介までありがとうございました♡\n素敵なお部屋で楽しく暮らせています。',
    order: 1
  },
  {
    id: 'rental-2',
    image: '@/assets/images/reviews/rental_02.jpg',
    title: '上京のタイミングで見つけて本当によかった！',
    customerInfo: '20代男性 T様',
    body: '立地や路線がわからない僕にも、\n女性の担当者が親身になってご紹介してくれました！\n24時間対応してくださり、しかも女性の方ばかりで優しくてとても安心しました。',
    order: 2
  },
  {
    id: 'rental-3',
    image: '@/assets/images/reviews/rental_03.jpg',
    title: '多頭飼いでもどんとこい！',
    customerInfo: '20代女性 S様',
    body: '公園やドッグランが周辺にある物件や、動物病院・ペットホテル・トリミングサロンが徒歩圏内の物件など、ペット仕様にカスタマイズしてくれました✨\nペットの交渉までありがとうございました！',
    order: 3
  },
  {
    id: 'rental-4',
    image: '@/assets/images/reviews/rental_04.jpg',
    title: '安心してお部屋探しができました',
    customerInfo: '40代女性 K様',
    body: 'ワンちゃんや猫ちゃんはもちろんのこと、爬虫類や鳥類、小動物等のペットと暮らせる物件探しもしてくれました！\n契約時に、ペットへのプレゼントも付いてきました！🎁\n至れり尽くせりです！笑',
    order: 4
   }
]);
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.review-page {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  font-family: $font-maru-gothic;

  &__spacer {
    height: 50px;
  }
}
</style>
