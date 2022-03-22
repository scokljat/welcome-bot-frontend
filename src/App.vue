<template>
  <div id="app">
    <div class="container">
      <TheHeader />
      <TheSidebar v-if="isLoggedIn" />
      <ThemeSwitcher />
      <TheFloatingButton v-if="isLoggedIn" />
      <div class="page" :class="pageClass">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';
import ThemeSwitcher from './components/ThemeSwitcher.vue';
import TheFloatingButton from './components/TheFloatingButton.vue';

export default {
  name: 'App',
  components: { TheSidebar, TheHeader, ThemeSwitcher, TheFloatingButton },
  computed: {
    ...mapGetters({ isLoggedIn: 'isLoggedIn' }),
    pageClass() {
      return this.isLoggedIn && 'logged-in';
    },
  },
};
</script>

<style lang="scss">
@import './style/main';

.pages-container {
  padding-top: 1.5rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}

@include tablet-md {
  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }

  .page {
    grid-column: 1/13;
    padding-top: 3.5rem;
  }

  .logged-in {
    grid-column: 2/13;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
</style>
