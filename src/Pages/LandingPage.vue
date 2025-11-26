<template>
  <div class="landing-page">
    <!-- Phase 2: ファーストビュー -->
    <FirstViewSection />

    <!-- Phase 3: メディア掲載 -->
    <MediaSection />

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
    <ConsultationSection />

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
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.landing-page {
  width: 100%;
  max-width: 375px;
  margin: 0 auto;
  background: $white;
  min-height: 100vh;
}
</style>
