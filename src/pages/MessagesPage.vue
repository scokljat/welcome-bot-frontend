<template>
  <div class="messages-page">
    <TheFloatingButton />
    <AppModal modalTitle="Create Message">
      <ModalCreateMessage />
    </AppModal>
    <MessagesDataTable />
  </div>
</template>

<script>
import TheFloatingButton from '@/components/TheFloatingButton.vue';
import AppModal from '@/components/AppModal.vue';
import ModalCreateMessage from '@/components/ModalCreateMessage.vue';
import MessagesDataTable from '../components/MessagesDataTable.vue';

export default {
  name: 'MessagesPage',
  components: {
    TheFloatingButton,
    AppModal,
    ModalCreateMessage,
    MessagesDataTable,
  },
};
</script>

<style scoped></style>
