<template>
  <header :class="{ 'scrolled': isScrolled }" class="header">
    <div id="top" class="header-content">
      <div class="logo">
        <img src="@/assets/images/corporate/logo.png" alt="Company Logo" />
      </div>
      <!-- デスクトップ用ナビゲーション -->
      <nav class="nav" v-if="!isMobile">
        <a href="#main-visual">トップへ</a>
        <a href="https://petchintai.com/">ペット賃貸</a>
        <a href="#contact">お問い合わせ</a>
      </nav>
      <!-- ハンバーガーメニューボタン -->
      <button class="menu-button" @click="toggleMobileMenu">
        ☰
      </button>
    </div>
    <!-- ドロワー -->
    <div v-if="isMobileMenuOpen" class="drawer-overlay" @click="closeMobileMenu">
      <div class="drawer" @click.stop>
        <nav>
          <a href="#main-visual" @click="closeMobileMenu">ホーム</a>
          <a href="#services" @click="closeMobileMenu">サービス</a>
          <a href="#contact" @click="closeMobileMenu">お問い合わせ</a>
        </nav>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';

export default {
  setup() {
    const isScrolled = ref(false);
    const isMobileMenuOpen = ref(false);

    const handleScroll = () => {
      isScrolled.value = window.scrollY > 50;
    };

    const toggleMobileMenu = () => {
      isMobileMenuOpen.value = !isMobileMenuOpen.value;
    };

    const closeMobileMenu = () => {
      isMobileMenuOpen.value = false;
    };

    const isMobile = computed(() => {
      return window.innerWidth <= 768;
    });

    const handleResize = () => {
      if (window.innerWidth > 768) {
        isMobileMenuOpen.value = false;
      }
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
    });

    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    });

    return {
      isScrolled,
      isMobileMenuOpen,
      isMobile,
      toggleMobileMenu,
      closeMobileMenu,
    };
  },
};
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background 0.3s ease, box-shadow 0.3s ease;
  z-index: 1000;

  &.scrolled {
    background: white;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .header-content {
    width: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

    @media screen and (max-width: 500px) {
      width: 90%;
      padding: 20px;
    }


    .logo {
      display: flex;
      align-items: center;

      img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background-color: #fff4e6;
        margin-right: 0.5rem;
      }

      span {
        font-size: 1.5rem;
        font-weight: bold;
        color: white;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
      }
    }

    .nav {
      display: flex;
      gap: 1.5rem;

      a {
        font-size: 1rem;
        font-weight: bold;
        color: black;
        text-decoration: none;
        padding: 0.5rem 1rem;
        border-radius: 8px;
        background: rgba(255, 255, 255, 0.5); /* 常時白色で50%透過 */
        transition: background 0.3s ease, transform 0.3s ease;
        cursor: pointer;

        &:hover {
          background: rgba(255, 255, 255, 0.8); /* ホバー時は80%透過 */
          transform: scale(1.05); /* 少し拡大 */
        }
      }
    }

    .menu-button {
      display: none;
      font-size: 1.5rem;
      background: none;
      border: none;
      color: #343a40;
      cursor: pointer;

      @media (max-width: 500px) {
        display: block;
      }
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
      box-shadow: -4px 0 8px rgba(0, 0, 0, 0.2);
      padding: 1rem;

      nav {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        a {
          font-size: 1.2rem;
          font-weight: bold;
          color: #343a40;
          text-decoration: none;
          padding: 0.5rem;
          border-radius: 8px;
          transition: background 0.3s ease;

          &:hover {
            background: rgba(255, 204, 153, 0.8);
          }
        }
      }
    }
  }
}
</style>
