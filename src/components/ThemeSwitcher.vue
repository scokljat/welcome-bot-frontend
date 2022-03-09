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
  top: 30px;
  right: 30px;
}
button {
  border: 0;
}
.fas {
  font-size: 24px;
}
.sun {
  background-color: var(--background-base);
  color: var(--icon-mode);
}
.moon {
  background-color: var(--background-base);
}
@include tablet-md {
  .moon {
    color: var(--primary);
  }
}
</style>
