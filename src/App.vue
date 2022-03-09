<template>
  <div id="app">
    <TheSidebar />
    <router-view />
  </div>
</template>

<script>
import TheSidebar from './components/TheSidebar.vue';

export default {
  components: { TheSidebar },
};
</script>

<style lang="scss">
@import './style/main';
</style>
