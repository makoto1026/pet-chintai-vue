<template>
  <header class="corp-header">
    <div class="header-content">
      <div class="logo">
        <img src="@/assets/images/corporate/logo.svg" alt="GLH Inc." />
      </div>
      <div class="header-buttons">
        <a href="tel:03-6455-0296" class="btn-circle btn-orange">
          <img src="@/assets/images/corporate/phone-icon.svg" alt="電話" />
        </a>
        <a href="mailto:lif.oshizumi@gmail.com" class="btn-circle btn-orange">
          <img src="@/assets/images/corporate/email-icon.svg" alt="メール" />
        </a>
        <button class="btn-circle btn-brown" @click="toggleMenu">
          <img src="@/assets/images/corporate/menu-icon.svg" alt="メニュー" />
        </button>
      </div>
    </div>

    <!-- ドロワーメニュー -->
    <div v-if="isMenuOpen" class="drawer-overlay" @click="closeMenu">
      <div class="drawer" @click.stop>
        <nav>
          <a href="#fv" @click="closeMenu">ホーム</a>
          <a href="#recruit" @click="closeMenu">採用情報</a>
          <a href="#company" @click="closeMenu">会社概要</a>
          <a href="#contact" @click="closeMenu">お問い合わせ</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.corp-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background: rgba(255, 255, 255, 0.8);
  z-index: 1000;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 5px 0 15px;
    max-width: 430px;
    margin: 0 auto;
  }

  .logo {
    img {
      height: 24px;
      width: auto;
    }
  }

  .header-buttons {
    display: flex;
    gap: 10px;
  }

  .btn-circle {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
  }

  .btn-orange {
    background: $corp-main-orange;
    background: linear-gradient(135deg, $corp-main-orange 0%, darken($corp-main-orange, 5%) 100%);
  }

  .btn-brown {
    background: $corp-main-brown;
    background: linear-gradient(135deg, $corp-main-brown 0%, darken($corp-main-brown, 5%) 100%);
  }
}

.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1100;

  .drawer {
    position: fixed;
    top: 0;
    right: 0;
    width: 250px;
    height: 100%;
    background: white;
    padding: 60px 20px 20px;

    nav {
      display: flex;
      flex-direction: column;
      gap: 20px;

      a {
        font-family: $font-maru-gothic;
        font-weight: 700;
        font-size: 16px;
        color: $corp-text;
        text-decoration: none;
        padding: 10px;
        border-radius: 8px;
        transition: background 0.3s;

        &:hover {
          background: $corp-base-cream;
        }
      }
    }
  }
}
</style>
