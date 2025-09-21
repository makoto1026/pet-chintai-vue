<template>
  <div class="button">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppButton',
});
</script>

<style scoped lang="scss">
.button {
  width: 100%;
  height: 100%;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>