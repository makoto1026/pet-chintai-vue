<template>
  <div class="corporate-page">
    <CorporateHeader />
    <CorporateMainVisual />
    <CorporateMission />
    <CorporateVision />
    <CorporateService />
    <CorporateCustomerVoice />
    <CorporateWorkerVoice />
    <CorporateNews />
    <CorporateLocation />
    <CorporateCompanyInfo />
    <CorporateContact />
    <CorporateFooter />
  </div>
</template>

<script setup lang="ts">
import CorporateHeader from '@/components/corporate/CorporateHeader.vue';
import CorporateMainVisual from '@/components/corporate/CorporateMainVisual.vue';
import CorporateMission from '@/components/corporate/CorporateMission.vue';
import CorporateVision from '@/components/corporate/CorporateVision.vue';
import CorporateService from '@/components/corporate/CorporateService.vue';
import CorporateCustomerVoice from '@/components/corporate/CorporateCustomerVoice.vue';
import CorporateWorkerVoice from '@/components/corporate/CorporateWorkerVoice.vue';
import CorporateNews from '@/components/corporate/CorporateNews.vue';
import CorporateLocation from '@/components/corporate/CorporateLocation.vue';
import CorporateCompanyInfo from '@/components/corporate/CorporateCompanyInfo.vue';
import CorporateContact from '@/components/corporate/CorporateContact.vue';
import CorporateFooter from '@/components/corporate/CorporateFooter.vue';
</script>

<style scoped lang="scss">
.corporate-page {
  max-width: none;
  width: 100%;
  margin: 0;

  // グローバルスタイルの上書き
  :deep(body) {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    color: #6c757d;
  }
}
</style>
