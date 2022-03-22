<template>
  <div class="messages-page">
    <AppModal modal-title="Create Message">
      <ModalCreateMessage />
    </AppModal>
    <DataTable
      :table-data="tableData"
      :table-columns="tableColumns"
      @edit="handleEditMessage"
      @delete="handleDeleteMessage"
      @page-change="handlePagination"
    />
  </div>
</template>

<script>
import AppModal from '@/components/AppModal.vue';
import ModalCreateMessage from '@/components/ModalCreateMessage.vue';
import DataTable from '@/components/DataTable.vue';

export default {
  name: 'MessagesPage',
  components: {
    AppModal,
    ModalCreateMessage,
    DataTable,
  },
  data: () => {
    return {
      tableData: [
        {
          id: 1,
          title: 'First Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2016-04-03',
        },
        {
          id: 2,
          title: 'Second Message',
          text: "Orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2016-11-03',
        },
        {
          id: 3,
          title: 'Third Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2015-08-07',
        },
        {
          id: 4,
          title: 'Fourth Message',
          text: "Rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2016-01-03',
        },
        {
          id: 5,
          title: 'Fifth Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2012-09-09',
        },
        {
          id: 6,
          title: 'Sixth Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2017-02-04',
        },
        {
          id: 7,
          title: 'Seventh Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2015-08-07',
        },
        {
          id: 8,
          title: 'Eight Message',
          text: "Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2016-01-03',
        },
        {
          id: 9,
          title: 'NIneth Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2012-09-09',
        },
        {
          id: 10,
          title: 'Tenth Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2017-02-04',
        },
        {
          id: 11,
          title: 'Eight Message',
          text: "Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2016-01-03',
        },
        {
          id: 12,
          title: 'NIneth Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2012-09-09',
        },
        {
          id: 13,
          title: 'Tenth Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2017-02-04',
        },
        {
          id: 14,
          title: 'Eight Message',
          text: "Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2016-01-03',
        },
        {
          id: 15,
          title: 'NIneth Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2012-09-09',
        },
        {
          id: 16,
          title: 'Tenth Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2017-02-04',
        },
      ],
      tableColumns: [
        {
          id: 1,
          label: 'Title',
          prop: 'title',
          isSortable: true,
          width: '170',
        },
        { id: 2, label: 'Text', prop: 'text', isSortable: true, width: '320' },
        {
          id: 3,
          label: 'Created At',
          prop: 'date',
          isSortable: true,
          width: '135',
        },
      ],
    };
  },
  methods: {
    handleEditMessage: (row) => {
      console.log(row);
    },
    handleDeleteMessage: (row) => {
      console.log(row);
    },
    handlePagination: (newPageNumber) => {
      console.log(newPageNumber);
    },
  },
};
</script>

<style scoped>
.messages-page {
  border: 1px solid var(--border-color-1);
}
</style>
