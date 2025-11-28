<template>
  <section class="faq-section">
    <h2 class="faq-section__title">よくあるご質問</h2>

    <div class="faq-section__list">
      <div
        v-for="(item, index) in faqItems"
        :key="index"
        class="faq-section__item"
      >
        <div class="faq-section__question">
          <span class="faq-section__q-label">Q.</span>
          <span class="faq-section__q-text">{{ item.question }}</span>
        </div>
        <div class="faq-section__divider"></div>
        <p class="faq-section__answer" v-html="item.answer"></p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const faqItems = [
  {
    question: '賃貸・売買どちらのサービスですか？',
    answer: '弊社は賃貸も売買も承っております。<br>お気軽にご相談ください。'
  },
  {
    question: 'どこの物件でも対象ですか？',
    answer: '東京・神奈川・埼玉・千葉が対象となります。<br>その他の都道府県につきましてはご相談させてください'
  },
  {
    question: 'まだ具体的に引っ越しを決めてないのですが、ご相談可能ですか？',
    answer: 'もちろん可能です！<br>まずは公式LINEよりお気軽にお問い合わせください。'
  }
];
</script>

<style scoped lang="scss">
@import '@/assets/styles/variables';
@import '@/assets/styles/mixins';

.faq-section {
  max-width: $max-container-width;
  margin: 0 auto;
  background: #F7D3BC;
  padding: 30px 20px;
  box-sizing: border-box;

  &__title {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 26px;
    line-height: 40px;
    color: $text-brown;
    text-align: center;
    margin-bottom: 20px;
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 10px;
    filter: drop-shadow(0px 2px 10px rgba(0, 0, 0, 0.2));
  }

  &__item {
    background: #fff;
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  &__question {
    display: flex;
    align-items: flex-start;
  }

  &__q-label {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 16px;
    line-height: 24px;
    color: $text-brown;
    flex-shrink: 0;
    margin-right: 6px;
  }

  &__q-text {
    font-family: $font-mincho;
    font-weight: $font-weight-semibold;
    font-size: 16px;
    line-height: 24px;
    color: $text-brown;
  }

  &__divider {
    width: 100%;
    height: 1px;
    border-bottom: 1px solid rgba(92, 68, 42, 0.3);
  }

  &__answer {
    font-family: $font-gothic;
    font-weight: $font-weight-medium;
    font-size: 14px;
    line-height: 22px;
    color: $text-brown;
  }
}
</style>
