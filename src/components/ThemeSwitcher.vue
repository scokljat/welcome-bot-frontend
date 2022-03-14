<template>
  <div class="buttonWrap">
    <button
      :class="{ isDark: dark, moon: !clicked, sun: clicked }"
      @click="
        () => {
          toggleDark(), (clicked = !clicked);
        }
      "
    >
      <i v-if="isDark" class="fas fa-sun sun"></i>
      <i v-else class="fas fa-moon moon"></i>
    </button>
  </div>
</template>

<script setup>
import { useDark, useToggle } from '@vueuse/core';
const isDark = useDark({
  valueDark: 'dark',
});
const toggleDark = useToggle(isDark);
const clicked = false;
</script>

<style scoped lang="scss">
.buttonWrap {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0.94rem;
  right: 1.25rem;
}

.fas {
  font-size: 1.5rem;
  background-color: transparent;
  color: var(--text-secondary-1);
}

@include tablet-md {
  .moon {
    color: var(--primary);
  }
}
</style>
