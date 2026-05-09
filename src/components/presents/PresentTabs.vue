<template>
  <div class="present-tabs" role="tablist">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      type="button"
      role="tab"
      :aria-selected="tab.id === modelValue"
      class="present-tabs__item"
      :class="{ 'present-tabs__item--active': tab.id === modelValue }"
      @click="emit('update:modelValue', tab.id)"
    >
      {{ tab.name }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { PresentTab } from '@/entity/present';

defineProps<{
  tabs: PresentTab[];
  modelValue: string;
}>();

const emit = defineEmits<{ (e: 'update:modelValue', value: string): void }>();
</script>

<style scoped lang="scss">
@import '@/assets/styles/_variables.scss';

.present-tabs {
  display: flex;
  gap: 8px;
  overflow-x: auto;
  padding: 16px 16px 16px;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;

  &::-webkit-scrollbar {
    display: none;
  }

  &__item {
    flex-shrink: 0;
    padding: 8px 16px;
    border: 1px solid rgba(92, 68, 42, 0.25);
    border-radius: 999px;
    background: $white;
    color: $text-brown;
    font-family: $font-gothic;
    font-size: $font-md;
    font-weight: $font-weight-medium;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;

    &:hover {
      background: rgba(92, 68, 42, 0.05);
    }

    &--active {
      background: linear-gradient(90deg, #5c442a 0%, #ee7f81 100%);
      color: $white;
      border-color: transparent;
      font-weight: $font-weight-bold;

      &:hover {
        background: linear-gradient(90deg, #5c442a 0%, #ee7f81 100%);
      }
    }
  }
}
</style>
