<template>
  <div class="presents-page">
    <header class="presents-page__header">
      <h1 class="presents-page__title">プレゼント一覧</h1>
    </header>

    <div v-if="loading" class="presents-page__loading">読み込み中...</div>

    <template v-else-if="tabs.length > 0">
      <PresentTabs v-model="activeTabId" :tabs="tabs" />

      <div class="presents-page__content">
        <p v-if="activeTab?.cautionText" class="presents-page__tab-caution">
          {{ activeTab.cautionText }}
        </p>

        <div v-if="visibleCategories.length > 0" class="presents-page__categories">
          <PresentCategorySection
            v-for="cat in visibleCategories"
            :key="cat.id"
            :category="cat"
            :items="itemsByCategory[cat.id] || []"
            @open-item="openGallery"
          />
        </div>
        <p v-else class="presents-page__empty">このタブにはまだプレゼントが登録されていません</p>
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
import PresentCategorySection from '@/components/presents/PresentCategorySection.vue';
import PresentImageGallery from '@/components/presents/PresentImageGallery.vue';
import { PresentTab, PresentCategory, PresentItem } from '@/entity/present';
import { fetchTabs, fetchCategories, fetchItems } from '@/services/presentService';

const tabs = ref<PresentTab[]>([]);
const categories = ref<PresentCategory[]>([]);
const items = ref<PresentItem[]>([]);
const activeTabId = ref('');
const galleryItem = ref<PresentItem | null>(null);
const loading = ref(true);

const activeTab = computed(() => tabs.value.find((t) => t.id === activeTabId.value) || null);

const visibleCategories = computed(() =>
  categories.value
    .filter((c) => c.tabId === activeTabId.value)
    .sort((a, b) => a.order - b.order)
);

const itemsByCategory = computed(() => {
  const map: Record<string, PresentItem[]> = {};
  for (const it of items.value) {
    if (it.tabId !== activeTabId.value) continue;
    if (!map[it.categoryId]) map[it.categoryId] = [];
    map[it.categoryId].push(it);
  }
  for (const key in map) {
    map[key].sort((a, b) => a.order - b.order);
  }
  return map;
});

const openGallery = (item: PresentItem) => {
  galleryItem.value = item;
};

onMounted(async () => {
  try {
    const [t, c, i] = await Promise.all([fetchTabs(), fetchCategories(), fetchItems()]);
    tabs.value = t;
    categories.value = c;
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

.presents-page {
  width: 100%;
  max-width: $max-container-width;
  margin: 0 auto;
  min-height: 100vh;
  background: $background;
  font-family: $font-gothic;
  padding-bottom: 40px;
}

.presents-page__header {
  padding: 24px 16px 16px;
  text-align: center;
  background: $white;
}

.presents-page__title {
  margin: 0;
  font-family: $font-mincho;
  font-size: $font-7xl;
  font-weight: $font-weight-semibold;
  color: $text-brown;
  letter-spacing: 0.04em;
}

.presents-page__content {
  padding: 0 16px;
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

.presents-page__categories {
  display: flex;
  flex-direction: column;
  gap: 16px;
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
