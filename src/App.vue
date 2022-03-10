<template>
  <div id="app">
    <TheHeader />
    <div class="container">
      <TheSidebar />
      <router-view />
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';

export default {
  name: 'App',
  components: { TheSidebar, TheHeader },
};
</script>

<style lang="scss">
@import './style/main';

.container {
  @include tablet-md {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
}
</style>
