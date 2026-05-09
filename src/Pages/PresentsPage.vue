<template>
  <div class="presents-page">
    <div class="presents-page__title-area">
      <p class="presents-page__subtitle">PRESENTS</p>
      <h1 class="presents-page__title">プレゼント一覧</h1>
      <span class="presents-page__title-divider"></span>
    </div>

    <div v-if="loading" class="presents-page__loading">読み込み中...</div>

    <template v-else-if="tabs.length > 0">
      <PresentTabs v-model="activeTabId" :tabs="tabs" />

      <div class="presents-page__content">
        <p v-if="activeTab?.cautionText" class="presents-page__tab-caution">
          {{ activeTab.cautionText }}
        </p>

        <div v-if="visibleItems.length > 0" class="presents-page__items">
          <PresentCard
            v-for="item in visibleItems"
            :key="item.id"
            :item="item"
            @open="openGallery"
          />
        </div>
        <p v-else class="presents-page__empty">
          このタブにはまだプレゼントが登録されていません
        </p>
      </div>
    </template>

    <p v-else class="presents-page__empty">
      まだプレゼントが登録されていません
    </p>

    <PresentImageGallery
      v-if="galleryItem"
      :item="galleryItem"
      @close="galleryItem = null"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import PresentTabs from '@/components/presents/PresentTabs.vue';
import PresentCard from '@/components/presents/PresentCard.vue';
import PresentImageGallery from '@/components/presents/PresentImageGallery.vue';
import { PresentTab, PresentItem } from '@/entity/present';
import { fetchTabs, fetchItems } from '@/services/presentService';

const tabs = ref<PresentTab[]>([]);
const items = ref<PresentItem[]>([]);
const activeTabId = ref('');
const galleryItem = ref<PresentItem | null>(null);
const loading = ref(true);

const activeTab = computed(() => tabs.value.find((t) => t.id === activeTabId.value) || null);

const visibleItems = computed(() =>
  items.value
    .filter((it) => it.tabId === activeTabId.value)
    .sort((a, b) => a.order - b.order)
);

const openGallery = (item: PresentItem) => {
  galleryItem.value = item;
};

onMounted(async () => {
  try {
    const [t, i] = await Promise.all([fetchTabs(), fetchItems()]);
    tabs.value = t;
    items.value = i;
    if (tabs.value.length > 0) {
      activeTabId.value = tabs.value[0].id;
    }
  } catch (e) {
    console.error('プレゼントデータ取得失敗', e);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';
@import '@/assets/styles/_mixins.scss';

.presents-page {
  width: 100%;
  max-width: $max-container-width;
  margin: 0 auto;
  min-height: 100vh;
  background: $background;
  font-family: $font-gothic;
  display: flex;
  flex-direction: column;
  padding-bottom: 40px;
}

.presents-page__title-area {
  padding: 40px 16px 36px;
  text-align: center;
  background: $background;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.presents-page__subtitle {
  margin: 0;
  font-family: $font-gothic-a1;
  font-weight: $font-weight-bold;
  font-size: $font-sm;
  letter-spacing: 0.2em;
  color: $primary;
}

.presents-page__title {
  margin: 0;
  font-family: $font-mincho;
  font-size: $font-7xl;
  font-weight: $font-weight-semibold;
  letter-spacing: 0.04em;
  @include gradient-pink-text;
}

.presents-page__title-divider {
  display: block;
  margin-top: 8px;
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, $accent-pink 0%, $accent-pink-dark 100%);
  border-radius: 2px;
}

.presents-page__content {
  padding: 0 16px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.presents-page__tab-caution {
  margin: 0;
  padding: 10px 12px;
  background: $backgroundCream;
  border-radius: 8px;
  font-size: $font-sm;
  color: $text-brown-light;
  line-height: 1.6;
  white-space: pre-line;
}

// 縦 1 列 → grid-template-columns を変えるだけでグリッド化可能
.presents-page__items {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}

.presents-page__loading,
.presents-page__empty {
  margin: 0;
  padding: 60px 16px;
  text-align: center;
  font-size: $font-md;
  color: rgba(92, 68, 42, 0.6);
}
</style>
