<template>
  <TheFloatingButton />
  <AppModal modal-title="Create Schedule">
    <ModalCreateSchedule />
  </AppModal>
  <MessagesDataTable />
</template>

<script>
import AppModal from './components/AppModal.vue';
import TheFloatingButton from './components/TheFloatingButton.vue';
import ModalCreateSchedule from './components/ModalCreateSchedule.vue';
import MessagesDataTable from './components/MessagesDataTable.vue';
export default {
  name: 'App',
  components: {
    AppModal,
    TheFloatingButton,
    ModalCreateSchedule,
    MessagesDataTable,
  },
};
</script>

<style lang="scss">
@import './style/main';
</style>
