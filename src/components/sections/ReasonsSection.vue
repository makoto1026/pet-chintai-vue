<template>
  <section class="reasons-section">
    <div class="reasons-section__list">
      <ReasonCard
        v-for="reason in reasons"
        :key="reason.number"
        :number="reason.number"
        :point-image="reason.pointImage"
        :image="reason.image"
        :title="reason.title"
        :title-highlight="reason.titleHighlight"
        :title-normal="reason.titleNormal"
        :description="reason.description"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import ReasonCard from '@/components/common/ReasonCard.vue';
import reason01Image from '@/assets/images/reason-01.png';
import reason02Image from '@/assets/images/reason-02.png';
import reason03Image from '@/assets/images/reason-03.png';
import reason04Image from '@/assets/images/reason-04.png';
import point1Image from '@/assets/images/point-1.svg';
import point2Image from '@/assets/images/point-2.svg';
import point3Image from '@/assets/images/point-3.svg';
import point4Image from '@/assets/images/point-4.svg';

const reasons = [
  {
    number: '01',
    pointImage: point1Image,
    image: reason01Image,
    title: '安心の物件のみご紹介',
    titleHighlight: '安心の物件',
    titleNormal: 'のみご紹介',
    description: '建物の管理規約を確認した上で、安心してペットと暮らせる物件のみご紹介します！'
  },
  {
    number: '02',
    pointImage: point2Image,
    image: reason02Image,
    title: '大型犬・多頭飼いも',
    titleHighlight: '大型犬・多頭飼い',
    titleNormal: 'も',
    description: '大型犬や多頭飼いのペットと暮らせる物件も取り扱っています！'
  },
  {
    number: '03',
    pointImage: point3Image,
    image: reason03Image,
    title: '周辺施設もご案内',
    titleHighlight: '周辺施設',
    titleNormal: 'もご案内',
    description: '物件だけではなく、周辺の動物病院や公園などの施設もご案内可能です'
  },
  {
    number: '04',
    pointImage: point4Image,
    image: reason04Image,
    title: 'ペット専門家の知識',
    titleHighlight: 'ペット専門家',
    titleNormal: 'の知識',
    description: 'ペットの専門家が、ペットの種類・性格に合ったお部屋をあなた仕様にカスタマイズ！'
  }
];
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.reasons-section {
  position: relative;
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  padding: 8px 0 30px;
  background: $background-pink;

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
