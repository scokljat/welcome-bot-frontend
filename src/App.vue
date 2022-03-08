<template>
  <SideBar />
  <TheFloatingButton />
  <AppModal modal-title="Create Trigger">
    <ModalCreateTrigger />
  </AppModal>
</template>
<script>
import SideBar from './components/SideBar.vue';
import AppModal from './components/AppModal.vue';
import ModalCreateTrigger from './components/ModalCreateTrigger.vue';
import TheFloatingButton from './components/TheFloatingButton.vue';
export default {
  name: 'App',
  components: {
    SideBar,
    AppModal,
    ModalCreateTrigger,
    TheFloatingButton,
  },
};
</script>

<style lang="scss">
@import './style/main';
</style>
