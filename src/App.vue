<template>
  <div id="app">
    <div class="container">
      <TheHeader />
      <TheSidebar />
      <ThemeSwitcher />
      <div class="pages-container">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
export default {
  name: 'App',
  components: { TheSidebar, TheHeader, ThemeSwitcher },
};
</script>

<style lang="scss">
@import './style/main';

.pages-container {
  padding-top: 1.5rem;
  padding-left: 1rem;
}

@include tablet-md {
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .pages-container {
    grid-column: 2 / 13;
    padding-top: 3.5rem;
  }
}
</style>
