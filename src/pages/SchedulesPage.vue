<template>
  <div class="schedules-page">
    <AppModal :modal-title="modalTitle">
      <ModalCreateSchedule
        :schedule="schedule"
        @reset-schedule="handleResetSchedule"
      />
    </AppModal>
    <DataTable
      :table-data="schedules"
      :table-columns="tableColumns"
      @edit="handleEditSchedule"
      @delete="handleDeleteSchedule"
      @page-change="handlePagination"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { OPEN_APP_MODAL } from '@/store/mutation-types';
import AppModal from '@/components/AppModal.vue';
import ModalCreateSchedule from '@/components/ModalCreateSchedule.vue';
import DataTable from '@/components/DataTable.vue';

export default {
  name: 'SchedulesPage',
  components: {
    AppModal,
    ModalCreateSchedule,
    DataTable,
  },
  data() {
    return {
      pageNumber: 1,
      schedule: null,
      tableColumns: [
        {
          id: 1,
          label: 'Message',
          prop: 'message.text',
          isSortable: true,
          width: '350',
        },
        {
          id: 2,
          label: 'Next Run',
          prop: 'nextRun',
          isSortable: true,
          width: '135',
        },
        {
          id: 3,
          label: 'Channel',
          prop: 'channel',
          isSortable: true,
          width: '160',
        },
        {
          id: 4,
          label: 'Active',
          prop: 'activeLabel',
          isSortable: true,
          width: '135',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({ schedules: 'getSchedules' }),
    modalTitle() {
      return this.schedule ? 'Update Schedule' : 'Create Schedule';
    },
  },
  mounted() {
    this.fetchSchedules({ pageNumber: 1 });
  },
  methods: {
    ...mapMutations({ openAppModal: OPEN_APP_MODAL }),
    ...mapActions({
      fetchSchedules: 'fetchSchedules',
      deleteSchedule: 'deleteSchedule',
    }),
    handleEditSchedule(row) {
      this.schedule = row;
      this.openAppModal();
    },
    handleDeleteSchedule(row) {
      this.deleteSchedule(row.scheduleId);
    },
    handlePagination(pageNumber) {
      this.fetchSchedules({ pageNumber });
    },
    handleResetSchedule() {
      this.schedule = null;
    },
  },
};
</script>

<style scoped>
.schedules-page {
  border: 1px solid var(--border-color-1);
}
</style>
