<template>
  <div class="schedules-page">
    <AppModal modal-title="Create Schedule">
      <ModalCreateSchedule />
    </AppModal>
    <DataTable
      :table-data="tableData"
      :table-columns="tableColumns"
      @edit="handleEditSchedule"
      @delete="handleDeleteSchedule"
      @page-change="handlePagination"
    />
  </div>
</template>

<script>
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
      tableData: [
        {
          message:
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          next_run: '2016-04-03',
          channel: 'First channel',
          active: 'Active',
        },
        {
          message: 'Second Message',
          next_run: '2016-11-03',
          active: 'Inactive',
        },
        {
          message: 'Third Message',
          next_run: '2015-08-07',
          active: 'Active',
        },
        {
          message: 'Fourth Message',
          next_run: '2016-01-03',
          active: 'Active',
        },
        {
          message: 'Fifth Message',
          next_run: '2012-09-09',
          active: 'Active',
        },
        {
          message: 'Sixth Message',
          next_run: '2017-02-04',
          active: 'Active',
        },
        {
          message: 'Seventh Message',
          next_run: '2015-08-07',
          active: 'Active',
        },
        {
          message: 'Eight Message',
          next_run: '2016-01-03',
          active: 'Active',
        },
        {
          message: 'Nineth Message',
          next_run: '2012-09-09',
          active: 'Inactive',
        },
        {
          message: 'Tenth Message',
          next_run: '2017-02-04',
          active: 'Active',
        },
        {
          message: 'Tenth Message',
          next_run: '2017-02-04',
          active: 'Active',
        },
        {
          message: 'Tenth Message',
          next_run: '2017-02-04',
          active: 'Active',
        },
        {
          message: 'Tenth Message',
          next_run: '2017-02-04',
          active: 'Active',
        },
        {
          message: 'Tenth Message',
          next_run: '2017-02-04',
          active: 'Active',
        },
        {
          message: 'Tenth Message',
          next_run: '2017-02-04',
          active: 'Active',
        },
        {
          message: 'Tenth Message',
          next_run: '2017-02-04',
          active: 'Active',
        },
        {
          message: 'Tenth Message',
          next_run: '2017-02-04',
          active: 'Active',
        },
      ],
      tableColumns: [
        {
          id: 1,
          label: 'Message',
          prop: 'message',
          isSortable: true,
          width: '350',
        },
        {
          id: 2,
          label: 'Next Run',
          prop: 'next_run',
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
  methods: {
    handleEditSchedule: (row) => {
      console.log(row);
    },
    handleDeleteSchedule: (row) => {
      console.log(row);
    },
    handlePagination: (newPageNumber) => {
      console.log(newPageNumber);
    },
  },
};
</script>

<style scoped>
.schedules-page {
  border: 1px solid var(--border-color-1);
}
</style>
