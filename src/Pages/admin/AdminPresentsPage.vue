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
      <div class="admin-presents__placeholder">
        <p>このページの本実装は Phase 4 / Phase 5 で行います。</p>
        <p>Phase 4: タブ・大項目の管理</p>
        <p>Phase 5: プレゼントの登録・編集・画像アップロード</p>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { useAdminAuth } from '@/composables/useAdminAuth';

const router = useRouter();
const { currentUser, logout } = useAdminAuth();

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
    transition: background 0.2s ease;

    &:hover {
      background: rgba(92, 68, 42, 0.05);
    }
  }

  &__main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 24px;
  }

  &__placeholder {
    padding: 40px 24px;
    background: $white;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(92, 68, 42, 0.06);
    text-align: center;
    color: $text-brown-light;
    font-size: $font-md;
    line-height: 2;

    p {
      margin: 0;
    }
  }
}
</style>
