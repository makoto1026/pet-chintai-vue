<template>
  <div class="admin-presents">
    <header class="admin-presents__header">
      <h1 class="admin-presents__title">プレゼント管理</h1>
      <div class="admin-presents__user">
        <span class="admin-presents__email">{{ currentUser?.email }}</span>
        <button type="button" class="admin-presents__logout" @click="onLogout">
          ログアウト
        </button>
      </div>
    </header>

    <main class="admin-presents__main">
      <div v-if="loading" class="admin-presents__loading">読み込み中...</div>

      <div v-else class="admin-presents__layout">
        <AdminTabList
          v-model="activeTabId"
          :tabs="tabs"
          @reorder="onReorderTabs"
          @add="onAddTab"
        />

        <div class="admin-presents__main-area">
          <template v-if="activeTab">
            <AdminTabEditor
              :tab="activeTab"
              :saving="savingTab"
              @save="(input) => onSaveTab(activeTab!.id, input)"
              @delete="onDeleteTab(activeTab!.id)"
            />

            <section class="admin-presents__items-placeholder">
              <h2 class="admin-presents__section-title">プレゼント</h2>
              <p>プレゼントの登録・編集・画像アップロードは Phase 5 で実装します。</p>
            </section>
          </template>

          <div v-else class="admin-presents__no-tab">
            <p>左からタブを選択するか、新規タブを追加してください。</p>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAdminAuth } from '@/composables/useAdminAuth';
import { PresentTab, PresentTabInput } from '@/entity/present';
import {
  fetchTabs,
  createTab,
  updateTab,
  reorderTabs,
  deleteTabCascade,
} from '@/services/presentService';
import AdminTabList from '@/components/admin/AdminTabList.vue';
import AdminTabEditor from '@/components/admin/AdminTabEditor.vue';

const router = useRouter();
const { currentUser, logout } = useAdminAuth();

const tabs = ref<PresentTab[]>([]);
const activeTabId = ref('');
const loading = ref(true);
const savingTab = ref(false);

const activeTab = computed(() => tabs.value.find((t) => t.id === activeTabId.value) || null);

const reload = async () => {
  tabs.value = await fetchTabs();
  if (activeTabId.value && !tabs.value.some((tab) => tab.id === activeTabId.value)) {
    activeTabId.value = tabs.value[0]?.id || '';
  }
  if (!activeTabId.value && tabs.value.length > 0) {
    activeTabId.value = tabs.value[0].id;
  }
};

onMounted(async () => {
  try {
    await reload();
  } catch (e) {
    console.error(e);
    alert('データの取得に失敗しました');
  } finally {
    loading.value = false;
  }
});

// ----- Tabs -----
const onAddTab = async () => {
  const name = prompt('新しいタブの名前を入力してください', '');
  if (name === null) return;
  const trimmed = name.trim();
  if (!trimmed) {
    alert('タブ名を入力してください');
    return;
  }
  try {
    const order = tabs.value.length;
    const newId = await createTab({ name: trimmed, cautionText: '', order });
    await reload();
    activeTabId.value = newId;
  } catch (e) {
    console.error(e);
    alert('タブの作成に失敗しました');
  }
};

const onSaveTab = async (id: string, input: Partial<PresentTabInput>) => {
  savingTab.value = true;
  try {
    await updateTab(id, input);
    await reload();
  } catch (e) {
    console.error(e);
    alert('タブの保存に失敗しました');
  } finally {
    savingTab.value = false;
  }
};

const onDeleteTab = async (id: string) => {
  try {
    await deleteTabCascade(id);
    await reload();
  } catch (e) {
    console.error(e);
    alert('タブの削除に失敗しました');
  }
};

const onReorderTabs = async (orderedIds: string[]) => {
  try {
    await reorderTabs(orderedIds);
    await reload();
  } catch (e) {
    console.error(e);
    alert('タブの並び替えに失敗しました');
  }
};

// ----- Logout -----
const onLogout = async () => {
  await logout();
  router.replace('/admin/login');
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.admin-presents {
  min-height: 100vh;
  background: $background;
  font-family: $font-gothic;

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
    padding: 16px 24px;
    background: $white;
    border-bottom: 1px solid rgba(92, 68, 42, 0.1);
  }

  &__title {
    margin: 0;
    font-family: $font-mincho;
    font-size: $font-2xl;
    font-weight: $font-weight-semibold;
    color: $text-brown;
  }

  &__user {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  &__email {
    font-size: $font-sm;
    color: $text-brown-light;
  }

  &__logout {
    padding: 6px 14px;
    border: 1px solid rgba(92, 68, 42, 0.3);
    border-radius: 6px;
    background: $white;
    color: $text-brown;
    font-family: $font-gothic;
    font-size: $font-sm;
    cursor: pointer;

    &:hover {
      background: rgba(92, 68, 42, 0.05);
    }
  }

  &__main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
  }

  &__loading {
    text-align: center;
    padding: 60px 16px;
    color: rgba(92, 68, 42, 0.6);
  }

  &__layout {
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 20px;
    align-items: start;

    @media (max-width: 767px) {
      grid-template-columns: 1fr;
    }
  }

  &__main-area {
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;
  }

  &__section-title {
    margin: 0;
    font-family: $font-mincho;
    font-size: $font-xl;
    font-weight: $font-weight-semibold;
    color: $text-brown;
  }

  &__items-placeholder {
    padding: 20px;
    background: $white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(92, 68, 42, 0.06);

    p {
      margin: 8px 0 0;
      color: $text-brown-light;
      font-size: $font-sm;
    }
  }

  &__no-tab {
    padding: 60px 24px;
    background: $white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(92, 68, 42, 0.06);
    text-align: center;
    color: $text-brown-light;
  }
}
</style>
