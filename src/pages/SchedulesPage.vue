<template>
  <div class="schedules-page">
    <AppModal modal-title="Create Schedule">
      <ModalCreateSchedule />
    </AppModal>
    <SchedulesDataTable />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import AppModal from '@/components/AppModal.vue';
import ModalCreateSchedule from '@/components/ModalCreateSchedule.vue';
import SchedulesDataTable from '@/components/SchedulesDataTable.vue';

export default {
  name: 'MessagesPage',
  components: {
    AppModal,
    ModalCreateSchedule,
    SchedulesDataTable,
  },
  mounted() {
    this.fetchSchedules();
  },
  methods: {
    ...mapActions({ fetchSchedules: 'fetchSchedules' }),
  },
};
</script>

<style scoped>
.schedules-page {
  border: 1px solid var(--border-color-1);
}
</style>
