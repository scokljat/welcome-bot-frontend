<template>
  <div id="app">
    <div class="container">
      <TheHeader />
      <TheSidebar v-if="isLoggedIn" />
      <ThemeSwitcher />
      <div :class="[isLoggedIn ? 'logged-pages' : 'unlogged-pages']">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';

export default {
  name: 'App',
  components: { TheSidebar, TheHeader, ThemeSwitcher },
  computed: {
    ...mapState({ isLoggedIn: 'isLoggedIn' }),
  },
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

  .logged-pages {
    grid-column: 2 / 13;
    padding-top: 3.5rem;
  }

  .unlogged-pages {
    grid-column: 1/13;
    padding-top: 3.5rem;
  }
}
</style>
