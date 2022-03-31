<template>
  <div class="triggers-page">
    <AppModal :modal-title="Triggers">
      <ModalCreateTrigger />
    </AppModal>
    <DataTable
      :table-data="getTriggers"
      :table-columns="tableColumns"
      @edit="handleEditTrigger"
      @delete="handleDeleteTrigger"
      @page-change="handlePagination"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import AppModal from '@/components/AppModal.vue';
import ModalCreateTrigger from '@/components/ModalCreateTrigger.vue';
import DataTable from '@/components/DataTable.vue';
import { OPEN_APP_MODAL } from '@/store/mutation-types';

export default {
  name: 'TriggersPage',
  components: {
    AppModal,
    ModalCreateTrigger,
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
      getTriggers: 'getTriggers',
      pagination: 'getPagination',
    }),
  },
  mounted() {
    const pageNumber = this.pagination.page;
    this.fetchTriggers(pageNumber);
  },
  methods: {
    ...mapMutations({ openAppModal: OPEN_APP_MODAL }),
    ...mapActions({
      fetchTriggers: 'fetchTriggers',
      deleteTrigger: 'deleteTrigger',
    }),
    handleEditTrigger(row) {
      console.log(row);
      this.openAppModal();
    },
    handleDeleteTrigger(row) {
      this.deleteTrigger(row.triggerId);
    },
    handlePagination(pageNumber) {
      this.fetchTriggers(pageNumber);
    },
  },
};
</script>

<style scoped>
.triggers-page {
  border: 1px solid var(--border-color-1);
}
</style>
