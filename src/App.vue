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

.container-center {
  background-color: var(--background);
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card {
  padding: 2rem 4rem;
  width: $icon-w;
  height: 200px;
  width: 300px;
  text-align: center;
  border: 1px solid var(--accent-color);
  border-radius: 4px;
  background-color: var(--white);
}
</style>
