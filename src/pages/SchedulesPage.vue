<template>
  <div class="schedules-page">
    <AppModal modal-title="Create Schedule">
      <ModalCreateSchedule />
    </AppModal>
    <DataTable
      :table-data="getSchedules"
      :table-columns="tableColumns"
      @edit="handleEditSchedule"
      @delete="handleDeleteSchedule"
      @page-change="handlePagination"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import AppModal from '@/components/AppModal.vue';
import ModalCreateSchedule from '@/components/ModalCreateSchedule.vue';
import DataTable from '@/components/DataTable.vue';

export default {
  name: 'MessagesPage',
  components: {
    AppModal,
    ModalCreateSchedule,
    DataTable,
  },
  data() {
    return {
      pageNumber: 1,
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
          prop: 'active',
          isSortable: true,
          width: '135',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({ getSchedules: 'getSchedules' }),
  },
  mounted() {
    this.fetchSchedules(this.pageNumber);
  },
  methods: {
    handleEditSchedule(row) {
      console.log(row);
    },
    handleDeleteSchedule(row) {
      console.log(row);
    },
    handlePagination(pageNumber) {
      console.log(pageNumber);
      this.fetchSchedules(pageNumber);
    },
    ...mapActions({ fetchSchedules: 'fetchSchedules' }),
  },
};
</script>

<style scoped>
.schedules-page {
  border: 1px solid var(--border-color-1);
}
</style>
