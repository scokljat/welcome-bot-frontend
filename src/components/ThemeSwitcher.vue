<template>
  <button class="button-wrap" @click="toggleDark">
    <i v-if="isDark" class="fas fa-sun"></i>
    <i v-else class="fas fa-moon"></i>
  </button>
</template>

<script>
import { useDark, useToggle } from '@vueuse/core';
export default {
  name: 'ThemeSwitcher',
  setup() {
    const isDark = useDark({
      valueDark: 'dark',
    });
    const toggleDark = useToggle(isDark);
    return {
      toggleDark,
      isDark,
    };
  },
};
</script>

<style scoped lang="scss">
.button-wrap {
  display: flex;
  justify-content: flex-end;
  position: fixed;
  top: 0.75rem;
  right: 1.25rem;
  padding: 0.31rem;
  border: none;
  background: transparent;
  color: var(--text-secondary-1);
}

.fas {
  font-size: 1.5rem;
}

.button-wrap {
  @include tablet-md {
    color: var(--text-primary-1);
  }
}
</style>
