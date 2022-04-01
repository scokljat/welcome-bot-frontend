<template>
  <div class="schedules-page">
    <AppModal :modal-title="modalTitle">
      <ModalCreateSchedule :schedule="schedule" @close="handleClose" />
    </AppModal>
    <DataTable
      :table-data="schedules"
      :table-columns="tableColumns"
      @edit="handleEditIconClick"
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
    ...mapGetters({ schedules: 'getSchedules', pagination: 'getPagination' }),
    modalTitle() {
      return this.schedule ? 'Update Schedule' : 'Create Schedule';
    },
  },
  mounted() {
    this.fetchSchedules(this.pagination.page);
  },
  methods: {
    ...mapMutations({ openAppModal: OPEN_APP_MODAL }),
    ...mapActions({
      fetchSchedules: 'fetchSchedules',
      deleteSchedule: 'deleteSchedule',
    }),
    handleEditIconClick(row) {
      this.schedule = row;
      this.openAppModal();
    },
    handleDeleteSchedule(row) {
      this.deleteSchedule(row.scheduleId);
    },
    handlePagination(pageNumber) {
      this.fetchSchedules(pageNumber);
    },
    handleClose() {
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
