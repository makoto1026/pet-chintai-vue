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
    <!-- Phase 9: 安心ポイント -->
    <!-- Phase 10: お客様の声 -->
    <!-- Phase 11: ご相談・来店（再利用） -->
    <!-- Phase 12: ご入居までの流れ -->
    <!-- Phase 13: スマートにお部屋探し -->
    <!-- Phase 14: よくある質問 -->
    <!-- Phase 15: 店舗情報 -->
    <!-- Phase 16: ご相談・来店（再利用） -->
    <!-- Phase 17: フッター -->
  </div>
</template>

<script setup lang="ts">
import FirstViewSection from '@/components/sections/FirstViewSection.vue';
import MediaSection from '@/components/sections/MediaSection.vue';
import ConcernsSection from '@/components/sections/ConcernsSection.vue';
import ReasonsSection from '@/components/sections/ReasonsSection.vue';
import ConsultationSection from '@/components/sections/ConsultationSection.vue';
import PropertySection from '@/components/sections/PropertySection.vue';
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
