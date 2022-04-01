<template>
  <div class="messages-page">
    <AppModal :modal-title="modalTitle">
      <ModalCreateMessage :message="message" @close="handleClose" />
    </AppModal>
    <DataTable
      :table-data="getMessages"
      :table-columns="tableColumns"
      @edit="handleEditIconClick"
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
          prop: 'createdAt',
          isSortable: true,
          width: '135',
        },
      ],
      message: null,
    };
  },
  computed: {
    ...mapGetters({
      getMessages: 'getMessages',
      getPagination: 'getPagination',
    }),
    modalTitle() {
      return this.message ? 'Update Message' : 'Create Message';
    },
  },
  mounted() {
    this.fetchMessages(this.getPagination.page);
  },
  methods: {
    ...mapActions({
      fetchMessages: 'fetchMessages',
      deleteMessage: 'deleteMessage',
    }),
    ...mapMutations({ openAppModal: OPEN_APP_MODAL }),
    handleEditIconClick(row) {
      this.message = row;
      this.openAppModal();
    },
    handleDeleteMessage(row) {
      this.deleteMessage(row.messageId);
    },
    handlePagination(pageNumber) {
      this.fetchMessages(pageNumber);
    },
    handleClose() {
      this.message = null;
    },
  },
};
</script>

<style scoped>
.messages-page {
  border: 1px solid var(--border-color-1);
}
</style>
