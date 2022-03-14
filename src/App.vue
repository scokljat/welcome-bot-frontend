<template>
  <div id="app">
    <TheHeader />
    <div class="main-container">
      <TheSidebar />
      <router-view />
    </div>
    <TheFloatingButton />
    <AppModal modal-title="Create Schedule">
      <ModalCreateSchedule />
    </AppModal>
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import TheSidebar from './components/TheSidebar.vue';
import AppModal from './components/AppModal.vue';
import TheFloatingButton from './components/TheFloatingButton.vue';
import ModalCreateSchedule from './components/ModalCreateSchedule.vue';

export default {
  name: 'App',
  components: {
    TheSidebar,
    TheHeader,
    AppModal,
    TheFloatingButton,
    ModalCreateSchedule,
  },
};
</script>

<style lang="scss">
@import './style/main';

.main-container {
  @include tablet-md {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
  }
}
</style>
