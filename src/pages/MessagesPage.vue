<template>
  <div class="messages-page">
    <AppModal modal-title="Create Message">
      <ModalCreateMessage />
    </AppModal>
    <MessagesDataTable />
  </div>
</template>

<script>
import AppModal from '@/components/AppModal.vue';
import ModalCreateMessage from '@/components/ModalCreateMessage.vue';
import MessagesDataTable from '@/components/MessagesDataTable.vue';

export default {
  name: 'MessagesPage',
  components: {
    AppModal,
    ModalCreateMessage,
    MessagesDataTable,
  },
};
</script>

<style scoped>
.messages-page {
  border: 1px solid var(--border-color-1);
}
</style>
