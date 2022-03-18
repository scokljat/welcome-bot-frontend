<template>
  <div class="triggers-page">
    <AppModal modal-title="Create Trigger">
      <ModalCreateTrigger />
    </AppModal>
    <TriggersDataTable />
  </div>
</template>

<script>
import AppModal from '@/components/AppModal.vue';
import ModalCreateTrigger from '@/components/ModalCreateTrigger.vue';
import TriggersDataTable from '@/components/TriggersDataTable.vue';

export default {
  name: 'MessagesPage',
  components: {
    AppModal,
    ModalCreateTrigger,
    TriggersDataTable,
  },
};
</script>

<style scoped>
.triggers-page {
  border: 1px solid var(--border-color-1);
}
</style>
