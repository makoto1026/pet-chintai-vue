<template>
  <div class="corporate-page">
    <CorporateHeader />
    <CorporateMainVisual />
    <CorporateRecruit />
    <CorporateCompanyInfo />
    <CorporateContact />
    <CorporateFooter />
  </div>
</template>

<script setup lang="ts">
import CorporateHeader from '@/components/corporate/CorporateHeader.vue';
import CorporateMainVisual from '@/components/corporate/CorporateMainVisual.vue';
import CorporateRecruit from '@/components/corporate/CorporateRecruit.vue';
import CorporateCompanyInfo from '@/components/corporate/CorporateCompanyInfo.vue';
import CorporateContact from '@/components/corporate/CorporateContact.vue';
import CorporateFooter from '@/components/corporate/CorporateFooter.vue';
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.corporate-page {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  font-family: $font-maru-gothic;
}
</style>
