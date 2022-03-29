<template>
  <div class="triggers-page">
    <AppModal :modal-title="modalTitle">
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
          prop: 'triggerEvent',
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
          prop: 'isActive',
          isSortable: true,
          width: '135',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      getFormAction: 'getFormAction',
      getTriggers: 'getTriggers',
    }),
    modalTitle() {
      return this.getFormAction === 'create'
        ? 'Create Trigger'
        : 'Update Trigger';
    },
  },
  mounted() {
    this.fetchTriggers({ pageNumber: 1 });
  },
  methods: {
    ...mapMutations({ openAppModal: OPEN_APP_MODAL }),
    ...mapActions({ fetchTriggers: 'fetchTriggers' }),
    handleEditTrigger(row) {
      console.log(row);
      this.openAppModal('update');
    },
    handleDeleteTrigger(row) {
      console.log(row);
    },
    handlePagination(pageNumber) {
      this.fetchTriggers({ pageNumber });
    },
  },
};
</script>

<style scoped>
.triggers-page {
  border: 1px solid var(--border-color-1);
}
</style>
