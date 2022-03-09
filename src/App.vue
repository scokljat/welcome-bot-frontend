<template>
  <div id="app">
    <TheHeader />
    <TheSidebar />
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';

export default {
  components: { TheSidebar, TheHeader },
};
</script>

<style lang="scss">
@import './style/main';
</style>
