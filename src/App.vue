<template>
  <SideBar />
  <TheFloatingButton />
  <AppModal modal-title="Create Message">
    <ModalCreateMessage />
  </AppModal>
</template>
<script>
import SideBar from './components/SideBar.vue';
import AppModal from './components/AppModal.vue';
import ModalCreateMessage from './components/ModalCreateMessage.vue';
import TheFloatingButton from './components/TheFloatingButton.vue';
export default {
  name: 'App',
  components: {
    SideBar,
    AppModal,
    TheFloatingButton,
    ModalCreateMessage,
  },
};
</script>

<style lang="scss">
@import './style/main';
</style>
