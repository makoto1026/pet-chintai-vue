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

    <!-- フルスクリーンメニュー -->
    <div v-if="isMenuOpen" class="fullscreen-menu">
      <div class="menu-header">
        <div class="menu-logo">
          <img src="@/assets/images/corporate/logo.svg" alt="GLH Inc." />
        </div>
        <button class="close-btn" @click="closeMenu">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 7L7 21M7 7L21 21" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>

      <div class="menu-content">
        <nav class="menu-nav">
          <a href="#fv" @click="closeMenu">ホーム</a>
          <a href="#recruit" @click="closeMenu">採用</a>
          <a href="#company" @click="closeMenu">会社概要</a>
        </nav>

        <a href="mailto:lif.oshizumi@gmail.com" class="menu-contact-btn" @click="closeMenu">
          <img src="@/assets/images/corporate/email-white.svg" alt="" />
          <span>お問い合わせ</span>
        </a>
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

.fullscreen-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $corp-main-brown;
  z-index: 1100;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(ellipse at bottom right, rgba(255, 231, 145, 0.5) 0%, rgba(255, 231, 145, 0) 50%);
    mix-blend-mode: overlay;
    pointer-events: none;
  }

  .menu-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 5px 5px 15px;
    height: 50px;
  }

  .menu-logo {
    img {
      height: 24px;
      width: auto;
      filter: brightness(0) invert(1);
    }
  }

  .close-btn {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: $corp-main-brown;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .menu-content {
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
  }

  .menu-nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
    width: 100%;

    a {
      font-family: $font-maru-gothic;
      font-weight: 500;
      font-size: 18px;
      line-height: 30px;
      color: white;
      text-decoration: none;
      text-align: center;
    }
  }

  .menu-contact-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 240px;
    height: 64px;
    border: 1.5px solid white;
    border-radius: 100px;
    text-decoration: none;
    padding-right: 6px;

    img {
      width: 32px;
      height: 32px;
      filter: brightness(0) invert(1);
    }

    span {
      font-family: $font-maru-gothic;
      font-weight: 700;
      font-size: 16px;
      line-height: 24px;
      color: white;
    }
  }
}
</style>
