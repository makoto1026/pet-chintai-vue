<template>
  <section class="reasons-section">
    <div class="reasons-section__header">
      <p class="reasons-section__title">
        ペット住まいラボが選ばれる<span class="highlight">4</span>つの理由
      </p>
    </div>
    <div class="reasons-section__gradient"></div>
    <div class="reasons-section__list">
      <ReasonCard
        v-for="(reason, index) in reasons"
        :key="reason.number"
        :ref="(el) => setCardRef(el, index)"
        :number="reason.number"
        :point-image="reason.pointImage"
        :image="reason.image"
        :title="reason.title"
        :title-highlight="reason.titleHighlight"
        :title-normal="reason.titleNormal"
        :description="reason.description"
        :direction="index % 2 === 0 ? 'left' : 'right'"
        :visible="cardVisibility[index]"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, type ComponentPublicInstance } from 'vue';
import ReasonCard from '@/components/common/ReasonCard.vue';
import reason01Image from '@/assets/images/reason-01.webp';
import reason02Image from '@/assets/images/reason-02.webp';
import reason03Image from '@/assets/images/reason-03.webp';
import reason04Image from '@/assets/images/reason-04.webp';
import point1Image from '@/assets/images/point-1.svg';
import point2Image from '@/assets/images/point-2.svg';
import point3Image from '@/assets/images/point-3.svg';
import point4Image from '@/assets/images/point-4.svg';

// カードの参照を保持
const cardRefs = ref<(ComponentPublicInstance | null)[]>([]);
const cardVisibility = ref<boolean[]>([false, false, false, false]);

let observer: IntersectionObserver | null = null;

const setCardRef = (el: ComponentPublicInstance | null, index: number) => {
  cardRefs.value[index] = el;
};

onMounted(() => {
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const index = cardRefs.value.findIndex((ref) => ref?.$el === entry.target);
        if (index !== -1) {
          cardVisibility.value[index] = entry.isIntersecting;
        }
      });
    },
    { threshold: 0.2 }
  );

  cardRefs.value.forEach((cardRef) => {
    if (cardRef?.$el) {
      observer?.observe(cardRef.$el);
    }
  });
});

onUnmounted(() => {
  if (observer) {
    observer.disconnect();
  }
});

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
  max-width: $max-container-width;
  margin: 0 auto;
  padding: 0 0 30px;
  background: $background-pink;

  &__header {
    padding: 30px 20px 16px;
    text-align: center;
    background: #FDF6E5;
  }

  &__gradient {
    height: 40px;
    background: linear-gradient(180deg, #FDF6E5 0%, $background-pink 100%);
  }

  &__title {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: $font-3xl;
    line-height: 30px;
    color: $text-brown;

    .highlight {
      font-size: 28px;
      background: linear-gradient(180deg, $accent-pink 19.231%, $accent-pink-dark 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
}
</style>
