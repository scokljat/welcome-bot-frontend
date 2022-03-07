<script setup>
import { RouterView } from 'vue-router';
</script>

<template>
  <TheSidebar />
  <div :style="{ 'margin-left': sidebarWidth }">
    <router-view />
  </div>
</template>

<script>
import TheSidebar from './components/sidebar/TheSidebar.vue';
import { sidebarWidth } from './components/sidebar/state.js';
export default {
  components: { TheSidebar },
  setup() {
    return { sidebarWidth };
  },
};
</script>

<style lang="scss">
@import './style/main';
</style>
