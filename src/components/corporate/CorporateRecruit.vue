<template>
  <section id="recruit" class="recruit-section">
    <div class="section-bg-top"></div>

    <div class="recruit-content">
      <div class="section-header">
        <h2 class="section-title">Recruit</h2>
        <p class="section-subtitle">採用</p>
      </div>

      <div class="recruit-image">
        <img src="@/assets/images/corporate/recruit-image.webp" alt="採用イメージ" />
      </div>

      <h3 class="recruit-catch">暮らしに寄り添う仕事を一緒に</h3>

      <div class="recruit-text">
        <p>採用情報はこちらからご覧いただけます。</p>
        <p>現在、各職種でスタッフを募集しています。</p>
      </div>

      <div class="recruit-btn">
        <button type="button" class="recruit-button" @click="showDialog = true">
          <span>採用情報を見る</span>
          <span class="arrow-circle">
            <img src="@/assets/images/corporate/vector.svg" alt="" />
          </span>
        </button>
      </div>
    </div>

    <!-- 工事中ダイアログ -->
    <div v-if="showDialog" class="dialog-overlay" @click.self="showDialog = false">
      <div class="dialog-content">
        <div class="dialog-icon">🚧</div>
        <h3 class="dialog-title">準備中</h3>
        <p class="dialog-text">
          採用情報ページは現在準備中です。<br />
          もうしばらくお待ちください。
        </p>
        <button type="button" class="dialog-close-btn" @click="showDialog = false">
          閉じる
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const showDialog = ref(false);
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.recruit-section {
  background: $corp-base-cream;
  position: relative;

  .section-bg-top {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 83px;
    background: $corp-base-white;
  }
}

.recruit-content {
  position: relative;
  padding: 60px 20px 30px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
}

.section-header {
  width: 100%;
  text-align: left;

  .section-title {
    font-family: $font-maru-gothic;
    font-weight: 700;
    font-size: 36px;
    line-height: 36px;
    color: $corp-text;
    margin: 0 0 10px;
  }

  .section-subtitle {
    font-family: $font-maru-gothic;
    font-weight: 500;
    font-size: 12px;
    line-height: 12px;
    letter-spacing: 1.2px;
    color: $corp-main-orange;
    margin: 0;
  }
}

.recruit-image {
  width: 100%;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.recruit-catch {
  font-family: $font-maru-gothic;
  font-weight: 700;
  font-size: 18px;
  line-height: 30px;
  color: $corp-text;
  margin: 0;
  width: 100%;
  text-align: left;
}

.recruit-text {
  width: 100%;

  p {
    font-family: $font-maru-gothic;
    font-weight: 500;
    font-size: 13.5px;
    line-height: 26px;
    color: $corp-text;
    margin: 0;
  }
}

.recruit-btn {
  .recruit-button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 260px;
    height: 58px;
    background: $corp-main-orange;
    background: linear-gradient(135deg, lighten($corp-main-orange, 5%) 0%, $corp-main-orange 100%);
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 60px;
    text-decoration: none;
    cursor: pointer;

    span {
      font-family: $font-maru-gothic;
      font-weight: 700;
      font-size: 20px;
      line-height: 20px;
      color: white;
    }

    .arrow-circle {
      width: 20px;
      height: 20px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 13px;
        height: 13px;
      }
    }
  }
}

// 工事中ダイアログ
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(92, 68, 42, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.dialog-content {
  background: $corp-base-cream;
  border-radius: 20px;
  padding: 40px 30px;
  max-width: 320px;
  width: 60%;
  text-align: center;
  box-shadow: 0 10px 40px rgba(92, 68, 42, 0.3);
}

.dialog-icon {
  font-size: 48px;
  margin-bottom: 16px;
}

.dialog-title {
  font-family: $font-maru-gothic;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: $corp-text;
  margin: 0 0 16px;
}

.dialog-text {
  font-family: $font-maru-gothic;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: $corp-text;
  margin: 0 0 24px;
}

.dialog-close-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 160px;
  height: 48px;
  background: $corp-main-orange;
  background: linear-gradient(135deg, lighten($corp-main-orange, 5%) 0%, $corp-main-orange 100%);
  border: 2px solid rgba(255, 255, 255, 0.5);
  border-radius: 60px;
  font-family: $font-maru-gothic;
  font-weight: 700;
  font-size: 16px;
  color: white;
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
}
</style>
