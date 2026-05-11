<template>
  <div ref="rootEl" class="present-tabs">
    <button
      type="button"
      class="present-tabs__header"
      :class="{ 'present-tabs__header--open': isOpen }"
      aria-haspopup="listbox"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <span class="present-tabs__label">ジャンル</span>
      <span class="present-tabs__current">
        {{ selectedTab ? selectedTab.name : '選択してください' }}
      </span>
      <span
        class="present-tabs__chevron"
        :class="{ 'present-tabs__chevron--open': isOpen }"
        aria-hidden="true"
      >
        ▼
      </span>
    </button>

    <transition name="present-tabs-list">
      <ul v-show="isOpen" class="present-tabs__list" role="listbox">
        <li
          v-for="tab in tabs"
          :key="tab.id"
          class="present-tabs__item"
          :class="{ 'present-tabs__item--active': tab.id === modelValue }"
          role="option"
          :aria-selected="tab.id === modelValue"
          @click="select(tab.id)"
        >
          <span class="present-tabs__check" aria-hidden="true">
            {{ tab.id === modelValue ? '✓' : '' }}
          </span>
          <span class="present-tabs__item-name">{{ tab.name }}</span>
        </li>
      </ul>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount, defineProps, defineEmits } from 'vue';
import { PresentTab } from '@/entity/present';

const props = defineProps<{
  tabs: PresentTab[];
  modelValue: string;
}>();

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();

const rootEl = ref<HTMLElement | null>(null);
const isOpen = ref(false);

const selectedTab = computed(
  () => props.tabs.find((t) => t.id === props.modelValue) || null
);

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const select = (id: string) => {
  emit('update:modelValue', id);
  isOpen.value = false;
};

const onDocumentClick = (e: MouseEvent) => {
  if (!isOpen.value) return;
  const target = e.target as Node | null;
  if (rootEl.value && target && !rootEl.value.contains(target)) {
    isOpen.value = false;
  }
};

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', onDocumentClick);
  document.addEventListener('keydown', onKeydown);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onDocumentClick);
  document.removeEventListener('keydown', onKeydown);
});
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.present-tabs {
  position: relative;
  padding: 16px;
}

.present-tabs__header {
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  min-height: 52px;
  background: $white;
  border: 1px solid rgba(92, 68, 42, 0.2);
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(92, 68, 42, 0.08);
  cursor: pointer;
  font-family: $font-gothic;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: rgba(92, 68, 42, 0.4);
  }

  &--open {
    border-color: $accent-pink;
    box-shadow: 0 2px 10px rgba(238, 127, 129, 0.2);
  }
}

.present-tabs__label {
  font-size: $font-xs;
  color: $text-brown-light;
  letter-spacing: 0.08em;
  flex-shrink: 0;
}

.present-tabs__current {
  flex: 1;
  text-align: left;
  font-size: $font-lg;
  font-weight: $font-weight-bold;
  color: $text-brown;
  letter-spacing: 0.02em;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.present-tabs__chevron {
  flex-shrink: 0;
  font-size: $font-xs;
  color: $text-brown;
  transition: transform 0.2s ease;
  transform-origin: center;

  &--open {
    transform: rotate(180deg);
  }
}

.present-tabs__list {
  position: absolute;
  top: calc(100% - 8px);
  left: 16px;
  right: 16px;
  margin: 0;
  padding: 6px 0;
  list-style: none;
  background: $white;
  border: 1px solid rgba(92, 68, 42, 0.15);
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(92, 68, 42, 0.15);
  max-height: 320px;
  overflow-y: auto;
  z-index: 10;
}

.present-tabs__item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  min-height: 44px;
  font-size: $font-md;
  color: $text-brown;
  cursor: pointer;
  transition: background 0.15s ease;

  & + & {
    border-top: 1px solid rgba(92, 68, 42, 0.08);
  }

  &:hover {
    background: rgba(92, 68, 42, 0.05);
  }

  &--active {
    background: linear-gradient(90deg, #5c442a 0%, #ee7f81 100%);
    color: $white;
    font-weight: $font-weight-bold;

    &:hover {
      background: linear-gradient(90deg, #5c442a 0%, #ee7f81 100%);
    }
  }
}

.present-tabs__check {
  flex-shrink: 0;
  width: 16px;
  text-align: center;
  font-size: $font-md;
  font-weight: $font-weight-bold;
}

.present-tabs__item-name {
  flex: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.present-tabs-list-enter-active,
.present-tabs-list-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.present-tabs-list-enter-from,
.present-tabs-list-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
