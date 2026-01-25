<template>
  <Teleport to="body">
    <Transition name="popup">
      <div v-if="visible" class="leave-popup-overlay" @click.self="close">
        <div class="leave-popup">
          <button class="close-button" @click="close" aria-label="閉じる">
            <span class="close-icon">&times;</span>
          </button>
          <a
            :href="lineUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="popup-link"
            @click="handleLineClick"
          >
            <img :src="popupImage" alt="LINEで無料相談する" class="popup-image" />
          </a>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import popupImage from '@/assets/images/leave-popup.png';

defineProps({
  visible: {
    type: Boolean,
    required: true
  }
});

const emit = defineEmits(['close', 'line-click']);

const lineUrl = 'https://s.lmes.jp/landing-qr/2002059008-M8KDDdoP?uLand=zI2YQN';

const close = () => {
  emit('close');
};

const handleLineClick = () => {
  emit('line-click');
};
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.leave-popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
  box-sizing: border-box;
}

.leave-popup {
  position: relative;
  max-width: 400px;
  width: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
}

.close-button {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 36px;
  height: 36px;
  border: none;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease, transform 0.2s ease;
  z-index: 1;

  &:hover {
    background: $white;
    transform: scale(1.1);
  }

  .close-icon {
    font-size: 24px;
    line-height: 1;
    color: #666;
  }
}

.popup-link {
  display: block;
}

.popup-image {
  width: 100%;
  height: auto;
  display: block;
}

// アニメーション
.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.3s ease;

  .leave-popup {
    transition: transform 0.3s ease;
  }
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;

  .leave-popup {
    transform: scale(0.9);
  }
}
</style>
