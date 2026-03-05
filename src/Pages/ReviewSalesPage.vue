<template>
  <div class="review-page">
    <CorporateHeader />
    <div class="review-page__spacer" />
    <ReviewSection title="Review" subtitle="売買のお客様の声">
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
    id: 'sales-1',
    image: '@/assets/images/reviews/sales_01.jpg',
    title: '多頭飼いでも最高のサービス！',
    customerInfo: '20代後半夫婦',
    body: 'もともと都内の賃貸に住んでいましたが、多頭飼いをしていることもあり戸建てでの生活を希望して家の購入を検討しました🏡\n\n最初は不安も多かったのですが、\nこちらの会社さんは本当に親身で、代表の方自ら物件の調査や内見、周辺環境の確認まで一緒にしてくださり、安心して進めることができました♡\n\n埼玉で理想の戸建てに出会うことができ、今はペットたちものびのび暮らしています。\nとてもアットホームで信頼できる不動産会社さんです。\n\nお祝いに素敵なプレゼントまでいただき本当に感謝しています🎁\nすでに友人にもたくさんおすすめしています！',
    order: 1
  },
  {
    id: 'sales-2',
    image: '@/assets/images/reviews/sales_02.jpg',
    title: 'さすがペット特化型不動産！',
    customerInfo: '30代後半カップル',
    body: 'ペットと暮らせる物件を探していて相談させていただきました！\n「ペット可」と書いてあっても実際は条件が厳しい物件が多く困っていたのですが、\nこちらはペット目線までしっかり考えて物件を提案してくれる会社でした✨\n\n飼育頭数や犬種のことまで細かくヒアリングしてくれて、安心して任せることができました。\n\n内見のときも周辺の散歩環境や動物病院などまで確認してくださり、本当にペットのことを考えてくれている会社だと感じました。\n\nペットと暮らす方には本当におすすめです。',
    order: 2
  },
  {
    id: 'sales-3',
    image: '@/assets/images/reviews/sales_03.jpg',
    title: '将来の自分のためにも、ペットのためにも',
    customerInfo: '30代前半女性',
    body: '将来の自分への投資も兼ねて物件を持ちたいと思い相談しました。\nペットもいるので賃貸だと条件がかなり限られてしまい、家賃15万円以内だとワンルームなど狭い物件ばかりで正直悩んでいました😭\n\nただ、こちらの不動産会社さんが購入の仕組みやローンのことまでとても丁寧に教えてくださり、知識がなくても安心して進めることができました✨\n\n結果的に40㎡以上の1LDKでペットとゆったり暮らせる生活ができていて、本当に購入してよかったです。\nペットと暮らしている方には「買う」という選択肢もおすすめしたいです🐾',
    order: 3
  },
  {
    id: 'sales-4',
    image: '@/assets/images/reviews/sales_04.jpg',
    title: '財産を守りながら、QOLを上げる⤴️',
    customerInfo: '30代前半男性',
    body: '周りの友人たちがどんどん物件を購入していく中で、自分も将来のために不動産投資をしてみたいと思い、口コミで評判だった御社にお願いしました！\n\n結婚も視野に入れていたのでタイミング的にも良く、住まい探しを一緒にサポートしていただきました✨\n\nまた「猫を迎えたいね」と話していたところ、猫の保護団体までご紹介してくださり本当に感謝しています！\n\nとても親身で、安心して相談できる素敵な不動産会社さんです。',
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
