<template>
  <Transition name="splash-fade" @after-leave="$emit('complete')">
    <div v-if="visible" class="splash">
      <div class="splash__content">
        <!-- 上部テキスト -->
        <p class="splash__heading">＼ ご相談殺到中！／</p>
        <p class="splash__description">
          現在、アクセスが集中しておりますので<br />
          ページの表示までに数秒お時間いただく<br />
          場合がございます。
        </p>

        <!-- ハートアニメーション -->
        <div class="splash__hearts">
          <span class="splash__heart" style="--heart-index: 0">&#x2665;</span>
          <span class="splash__heart" style="--heart-index: 1">&#x2665;</span>
          <span class="splash__heart" style="--heart-index: 2">&#x2665;</span>
        </div>
        <p class="splash__loading">Loading...</p>

        <!-- バナーエリア -->
        <!-- <div class="splash__banner">
          <div class="splash__banner-badge">公式限定の特別価格</div>
          <div class="splash__banner-main">
            <p class="splash__banner-title">ペット住まいラボ<span class="splash__banner-via">なら</span></p>
            <p class="splash__banner-price">
              仲介手数料<span class="splash__banner-highlight">0</span>円！
            </p>
          </div>
          <div class="splash__banner-tags">
            <span class="splash__banner-tag splash__banner-tag--pink">初期費用を抑える</span>
            <span class="splash__banner-tag splash__banner-tag--pink">LINE相談無料</span>
          </div>
        </div> -->
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, defineProps, defineEmits, withDefaults } from 'vue';

const props = withDefaults(defineProps<{
  /** FV画像の読み込みが完了したか */
  contentReady?: boolean;
}>(), {
  contentReady: false,
});

defineEmits<{
  (e: 'complete'): void;
}>();

const visible = ref(true);
const timerDone = ref(false);

const tryDismiss = () => {
  if (timerDone.value && props.contentReady) {
    visible.value = false;
  }
};

watch(() => props.contentReady, () => {
  tryDismiss();
});

onMounted(() => {
  setTimeout(() => {
    timerDone.value = true;
    tryDismiss();
  }, 3000);
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.splash {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  background: $white;
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    text-align: center;
    padding: 0 24px;
    max-width: $max-container-width;
    width: 100%;
  }

  &__heading {
    font-family: $font-gothic;
    font-size: $font-3xl;
    font-weight: $font-weight-bold;
    color: $text-brown;
    margin: 0 0 16px;
  }

  &__description {
    font-family: $font-gothic;
    font-size: $font-md;
    font-weight: $font-weight-regular;
    color: #666;
    line-height: 1.8;
    margin: 0 0 24px;
  }

  // ハートアニメーション
  &__hearts {
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-bottom: 8px;
  }

  &__heart {
    color: $accent-pink;
    font-size: 24px;
    animation: heartBounce 1.2s ease-in-out infinite;
    animation-delay: calc(var(--heart-index) * 0.2s);
  }

  &__loading {
    font-family: $font-gothic;
    font-size: $font-xs;
    color: $accent-pink;
    margin: 0 0 32px;
  }

  // バナー
  &__banner {
    background: #FFF5F5;
    border: 2px solid $accent-pink;
    border-radius: 12px;
    padding: 20px 16px;
    margin: 0 auto;
    max-width: 320px;
  }

  &__banner-badge {
    display: inline-block;
    background: $accent-pink;
    color: $white;
    font-family: $font-gothic;
    font-size: $font-xs;
    font-weight: $font-weight-bold;
    padding: 4px 16px;
    border-radius: 20px;
    margin-bottom: 12px;
  }

  &__banner-main {
    margin-bottom: 12px;
  }

  &__banner-title {
    font-family: $font-gothic;
    font-size: $font-lg;
    font-weight: $font-weight-bold;
    color: $text-brown;
    margin: 0 0 4px;
  }

  &__banner-via {
    font-size: $font-md;
    font-weight: $font-weight-medium;
  }

  &__banner-price {
    font-family: $font-gothic;
    font-size: $font-5xl;
    font-weight: $font-weight-bold;
    color: $accent-pink-dark;
    margin: 0;
  }

  &__banner-highlight {
    font-size: 48px;
    font-weight: $font-weight-bold;
  }

  &__banner-tags {
    display: flex;
    justify-content: center;
    gap: 8px;
  }

  &__banner-tag {
    font-family: $font-gothic;
    font-size: $font-xs;
    font-weight: $font-weight-bold;
    padding: 6px 16px;
    border-radius: 4px;

    &--pink {
      background: $accent-pink-dark;
      color: $white;
    }
  }
}

@keyframes heartBounce {
  0%, 100% {
    transform: translateY(0) scale(1);
  }
  50% {
    transform: translateY(-8px) scale(1.2);
  }
}

// スプラッシュのフェードアウト
.splash-fade-leave-active {
  transition: opacity 0.8s ease;
}

.splash-fade-leave-to {
  opacity: 0;
}
</style>
