<template>
  <div class="schedules-page">
    <TheFloatingButton />
    <AppModal modalTitle="Create Schedule">
      <ModalCreateSchedule />
    </AppModal>
    <SchedulesDataTable />
  </div>
</template>

<script>
import TheFloatingButton from '@/components/TheFloatingButton.vue';
import AppModal from '@/components/AppModal.vue';
import ModalCreateSchedule from '@/components/ModalCreateSchedule.vue';
import SchedulesDataTable from '@/components/SchedulesDataTable.vue';

export default {
  name: 'MessagesPage',
  components: {
    TheFloatingButton,
    AppModal,
    ModalCreateSchedule,
    SchedulesDataTable,
  },
};
</script>

<style scoped>
.schedules-page {
  border: 1px solid var(--border-color-1);
}
</style>
