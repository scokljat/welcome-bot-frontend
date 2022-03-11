<template>
  <TheFloatingButton />
  <AppModal modal-title="Create Schedule">
    <ModalCreateSchedule />
  </AppModal>
</template>

<script>
import AppModal from './components/AppModal.vue';
import TheFloatingButton from './components/TheFloatingButton.vue';
import ModalCreateSchedule from './components/ModalCreateSchedule.vue';
export default {
  name: 'App',
  components: {
    AppModal,
    TheFloatingButton,
    ModalCreateSchedule,
  },
};
</script>

<style lang="scss">
@import './style/main';
</style>
