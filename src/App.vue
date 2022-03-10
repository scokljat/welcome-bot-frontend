<template>
  <TheFloatingButton />
  <AppModal modal-title="Create Message">
    <ModalCreateMessage />
  </AppModal>
</template>

<script>
import AppModal from './components/AppModal.vue';
import ModalCreateMessage from './components/ModalCreateMessage.vue';
import TheFloatingButton from './components/TheFloatingButton.vue';
export default {
  name: 'App',
  components: {
    AppModal,
    TheFloatingButton,
    ModalCreateMessage,
  },
};
</script>

<style lang="scss">
@import './style/main';
</style>
