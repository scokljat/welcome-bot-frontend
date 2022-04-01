<template>
  <div class="triggers-page">
    <AppModal :modal-title="modalTitle">
      <ModalCreateTrigger :trigger="trigger" @close="handleClose" />
    </AppModal>
    <DataTable
      :table-data="triggers"
      :table-columns="tableColumns"
      @edit="handleEditIconClick"
      @delete="handleDeleteTrigger"
      @page-change="handlePagination"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { OPEN_APP_MODAL } from '@/store/mutation-types';
import AppModal from '@/components/AppModal.vue';
import ModalCreateTrigger from '@/components/ModalCreateTrigger.vue';
import DataTable from '@/components/DataTable.vue';

export default {
  name: 'TriggersPage',
  components: {
    AppModal,
    ModalCreateTrigger,
    DataTable,
  },
  data() {
    return {
      trigger: null,
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
          label: 'Event',
          prop: 'event',
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
    ...mapGetters({
      triggers: 'getTriggers',
      pagination: 'getPagination',
    }),
    modalTitle() {
      return this.trigger ? 'Update Trigger' : 'Create Trigger';
    },
  },
  mounted() {
    this.fetchTriggers(this.pagination.page);
  },
  methods: {
    ...mapMutations({ openAppModal: OPEN_APP_MODAL }),
    ...mapActions({
      fetchTriggers: 'fetchTriggers',
      deleteTrigger: 'deleteTrigger',
    }),
    handleEditIconClick(row) {
      this.trigger = row;
      this.openAppModal();
    },
    handleDeleteTrigger(row) {
      this.deleteTrigger(row.triggerId);
    },
    handlePagination(pageNumber) {
      this.fetchTriggers(pageNumber);
    },
    handleClose() {
      this.schedule = null;
    },
  },
};
</script>

<style scoped>
.triggers-page {
  border: 1px solid var(--border-color-1);
}
</style>
