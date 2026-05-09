<template>
  <div class="admin-login">
    <div class="admin-login__card">
      <h1 class="admin-login__title">管理者ログイン</h1>
      <form class="admin-login__form" @submit.prevent="onSubmit">
        <div class="admin-login__field">
          <label class="admin-login__label" for="login-email">メールアドレス</label>
          <input
            id="login-email"
            v-model.trim="email"
            type="email"
            required
            autocomplete="email"
            class="admin-login__input"
            :disabled="submitting"
          />
        </div>
        <div class="admin-login__field">
          <label class="admin-login__label" for="login-password">パスワード</label>
          <input
            id="login-password"
            v-model="password"
            type="password"
            required
            autocomplete="current-password"
            class="admin-login__input"
            :disabled="submitting"
          />
        </div>
        <p v-if="errorMessage" class="admin-login__error">{{ errorMessage }}</p>
        <button type="submit" class="admin-login__submit" :disabled="submitting">
          {{ submitting ? 'ログイン中...' : 'ログイン' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useAdminAuth } from '@/composables/useAdminAuth';
import { ADMIN_EMAIL } from '@/entity/present';

const email = ref('');
const password = ref('');
const errorMessage = ref('');
const submitting = ref(false);
const router = useRouter();
const { login, logout, isAdmin, waitForAuthReady } = useAdminAuth();

onMounted(async () => {
  await waitForAuthReady();
  if (isAdmin.value) {
    router.replace('/admin/presents');
  }
});

const onSubmit = async () => {
  errorMessage.value = '';
  submitting.value = true;
  try {
    const cred = await login(email.value, password.value);
    if (cred.user.email !== ADMIN_EMAIL) {
      await logout();
      errorMessage.value = '管理者アカウントではありません';
      return;
    }
    router.replace('/admin/presents');
  } catch {
    errorMessage.value = 'メールアドレスまたはパスワードが正しくありません';
  } finally {
    submitting.value = false;
  }
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.admin-login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background: $background;
  font-family: $font-gothic;

  &__card {
    width: 100%;
    max-width: 400px;
    padding: 32px 24px;
    background: $white;
    border-radius: 12px;
    box-shadow: 0 6px 24px rgba(92, 68, 42, 0.08);
  }

  &__title {
    margin: 0 0 24px;
    text-align: center;
    font-family: $font-mincho;
    font-size: $font-3xl;
    font-weight: $font-weight-semibold;
    color: $text-brown;
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__field {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  &__label {
    font-size: $font-sm;
    color: $text-brown;
    font-weight: $font-weight-medium;
  }

  &__input {
    padding: 10px 12px;
    border: 1px solid rgba(92, 68, 42, 0.3);
    border-radius: 6px;
    font-size: $font-md;
    font-family: $font-gothic;
    color: $text-brown;
    background: $white;

    &:focus {
      outline: none;
      border-color: $primary;
      box-shadow: 0 0 0 3px rgba(248, 134, 88, 0.15);
    }

    &:disabled {
      background: #f5f5f5;
      cursor: not-allowed;
    }
  }

  &__error {
    margin: 0;
    padding: 8px 10px;
    background: rgba(238, 69, 72, 0.08);
    border-left: 3px solid $accent-pink-dark;
    border-radius: 4px;
    color: $accent-pink-dark;
    font-size: $font-sm;
  }

  &__submit {
    margin-top: 4px;
    padding: 12px;
    border: none;
    border-radius: 6px;
    background: linear-gradient(90deg, #5c442a 0%, #ee7f81 100%);
    color: $white;
    font-family: $font-gothic;
    font-size: $font-md;
    font-weight: $font-weight-bold;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: filter 0.2s ease;

    &:hover:not(:disabled) {
      filter: brightness(1.05);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}
</style>
