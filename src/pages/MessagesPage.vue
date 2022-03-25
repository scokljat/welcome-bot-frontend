<template>
  <div class="messages-page">
    <AppModal :modal-title="modalTitle">
      <ModalCreateMessage />
    </AppModal>
    <DataTable
      :table-data="getMessages"
      :table-columns="tableColumns"
      @edit="handleEditMessage"
      @delete="handleDeleteMessage"
      @page-change="handlePagination"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import AppModal from '@/components/AppModal.vue';
import ModalCreateMessage from '@/components/ModalCreateMessage.vue';
import DataTable from '@/components/DataTable.vue';
import { OPEN_APP_MODAL } from '@/store/mutation-types';

export default {
  name: 'MessagesPage',
  components: {
    AppModal,
    ModalCreateMessage,
    DataTable,
  },
  data: () => {
    return {
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
      currentPage: 1,
    };
  },
  computed: {
    ...mapGetters({
      getMessages: 'getMessages',
      getFormAction: 'getFormAction',
    }),
    modalTitle() {
      return this.getFormAction === 'create'
        ? 'Create Message'
        : 'Update Message';
    },
  },
  mounted() {
    // this should be store pagination
    this.fetchMessages({ pageNumber: 1 });
  },
  methods: {
    ...mapActions({
      fetchMessages: 'fetchMessages',
      deleteMessage: 'deleteMessage',
    }),
    ...mapMutations({ openAppModal: OPEN_APP_MODAL }),
    handleEditMessage(row) {
      console.log(row);
      this.openAppModal('update');
    },
    handleDeleteMessage(row) {
      this.deleteMessage(row.messageId);
    },
    handlePagination(pageNumber) {
      // this.currentPage = pageNumber;
      this.fetchMessages({ pageNumber });
    },
  },
};
</script>

<style scoped>
.messages-page {
  border: 1px solid var(--border-color-1);
}
</style>
