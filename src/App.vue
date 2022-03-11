<template>
  <TheFloatingButton />
  <AppModal modal-title="Create Message">
    <ModalCreateTrigger />
  </AppModal>
</template>

<script>
import AppModal from './components/AppModal.vue';
import TheFloatingButton from './components/TheFloatingButton.vue';
import ModalCreateTrigger from './components/ModalCreateTrigger.vue';
export default {
  name: 'App',
  components: {
    AppModal,
    TheFloatingButton,
    ModalCreateTrigger,
  },
};
</script>

<style lang="scss">
@import './style/main';
</style>
