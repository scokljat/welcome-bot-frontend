<template>
  <router-view />
  <ThemeSwitcher />
</template>

<script>
import ThemeSwitcher from './components/ThemeSwitcher.vue';
export default {
  name: 'App',
  components: { ThemeSwitcher },
};
</script>

<style lang="scss">
@import './style/main';
</style>
