<template>
  <div class="landing-page">
    <!-- 固定LINEボタン -->
    <Transition name="fade">
      <a
        v-show="showLineButton"
        href="https://form.lmes.jp/landing-qr/2002059008-M8KDDdoP?uLand=Ae55n6"
        class="fixed-line-button"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="lineButtonImage" alt="LINEで気軽に相談する" />
      </a>
    </Transition>

    <!-- Phase 2: ファーストビュー -->
    <FirstViewSection />

    <!-- Phase 3: メディア掲載 -->
    <MediaSection ref="mediaSectionRef" />

    <!-- Phase 4: お悩み -->
    <ConcernsSection />

    <!-- Phase 5: 選ばれる理由 -->
    <ReasonsSection />

    <!-- Phase 6: ご相談・来店 -->
    <ConsultationSection />

    <!-- Phase 7: 物件選び放題 -->
    <PropertySection />

    <!-- Phase 8: SNS紹介 -->
    <SnsSection />

    <!-- Phase 9: 安心ポイント -->
    <SafetyPointSection />

    <!-- Phase 10: お客様の声 -->
    <TestimonialsSection />

    <!-- Phase 11: ご相談・来店（再利用） -->
    <ConsultationSection :hide-top-overlay="true" />

    <!-- Phase 12: ご入居までの流れ -->
    <FlowSection />

    <!-- Phase 13: スマートにお部屋探し -->
    <SmartSearchSection />

    <!-- Phase 14: よくある質問 -->
    <FaqSection />

    <!-- Phase 15: 店舗情報 -->
    <ShopInfoSection />

    <!-- Phase 16: ご相談・来店（再利用） -->
    <ConsultationSection />

    <!-- Phase 17: フッター -->
    <FooterSection />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import lineButtonImage from '@/assets/images/line-button.svg';
import FirstViewSection from '@/components/sections/FirstViewSection.vue';
import MediaSection from '@/components/sections/MediaSection.vue';
import ConcernsSection from '@/components/sections/ConcernsSection.vue';
import ReasonsSection from '@/components/sections/ReasonsSection.vue';
import ConsultationSection from '@/components/sections/ConsultationSection.vue';
import PropertySection from '@/components/sections/PropertySection.vue';
import SnsSection from '@/components/sections/SnsSection.vue';
import SafetyPointSection from '@/components/sections/SafetyPointSection.vue';
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue';
import FlowSection from '@/components/sections/FlowSection.vue';
import SmartSearchSection from '@/components/sections/SmartSearchSection.vue';
import FaqSection from '@/components/sections/FaqSection.vue';
import ShopInfoSection from '@/components/sections/ShopInfoSection.vue';
import FooterSection from '@/components/sections/FooterSection.vue';

const showLineButton = ref(false);
const mediaSectionRef = ref<InstanceType<typeof MediaSection> | null>(null);

const updateButtonVisibility = () => {
  const scrollTop = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // ボタンの中央位置（画面下端から46px上）
  const buttonCenterFromBottom = 46;
  const buttonCenterY = windowHeight - buttonCenterFromBottom;

  // MediaSectionの下端位置を取得
  const mediaElement = mediaSectionRef.value?.$el as HTMLElement | undefined;
  const mediaBottom = mediaElement ? mediaElement.offsetTop + mediaElement.offsetHeight : 0;

  // MediaSectionの下端がボタンの中央より上にスクロールされたら表示
  const mediaBottomRelativeToViewport = mediaBottom - scrollTop;
  const isMediaPastButtonCenter = mediaBottomRelativeToViewport < buttonCenterY;

  // フッターに近づいたら非表示（下から100px）
  const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
  const isNearFooter = distanceFromBottom <= 100;

  // MediaSectionがボタン中央より上かつフッター付近でない場合に表示
  showLineButton.value = isMediaPastButtonCenter && !isNearFooter;
};

onMounted(() => {
  window.addEventListener('scroll', updateButtonVisibility);
  updateButtonVisibility();
});

onUnmounted(() => {
  window.removeEventListener('scroll', updateButtonVisibility);
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.landing-page {
  width: 100%;
  max-width: $max-container-width;
  margin: 0 auto;
  background: $white;
  min-height: 100vh;
}

.fixed-line-button {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  display: block;
  max-width: 320px;
  width: calc(100% - 40px);
  animation: bounce 1s ease-in-out infinite;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
}

@keyframes bounce {
  0%, 100% {
    transform: translateX(-50%) translateY(0);
  }
  50% {
    transform: translateX(-50%) translateY(-8px);
  }
}

// フェードアニメーション
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
