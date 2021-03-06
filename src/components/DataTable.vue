<template>
  <el-table
    :data="tableData"
    height="88vh"
    @cell-click="handleCellClick"
    @cell-mouse-enter="handleCellMouseEnter"
    @cell-mouse-leave="handleCellMouseLeave"
  >
    <el-table-column
      v-for="col in tableColumns"
      :key="col.id"
      :prop="col.prop"
      :label="col.label"
      :sortable="col.isSortable"
      :column-key="col.prop"
      :width="col.width"
    />
    <el-table-column prop="action" label="" width="120px">
      <template #default="table">
        <div class="action-icons">
          <button @click.stop="handleEditAction(table.row)">
            <i class="fa-solid fa-pencil icon"></i>
          </button>
          <button @click.stop="handleDeleteAction(table.row)">
            <i class="fa-solid fa-trash icon"></i>
          </button>
        </div>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    layout="prev, pager, next"
    :total="pagination.total"
    :current-page="pagination.page"
    :page-size="pagination.size"
    @current-change="handlePageChange"
  >
  </el-pagination>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex';
import { OPEN_APP_MODAL } from '@/store/mutation-types';
import { ElTable, ElTableColumn, ElPagination } from 'element-plus';

export default {
  name: 'DataTable',
  components: {
    ElTable,
    ElTableColumn,
    ElPagination,
  },
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    tableColumns: {
      type: Array,
      required: true,
    },
  },
  emits: ['edit', 'delete', 'pageChange'],
  computed: {
    ...mapGetters({ pagination: 'getPagination' }),
  },
  methods: {
    ...mapMutations({ openAppModal: OPEN_APP_MODAL }),
    ...mapActions({ editCurrentPage: 'editCurrentPage' }),
    handleCellClick(row, column, cell) {
      cell.parentElement.classList.toggle('expanded');
    },
    handleEditAction(row) {
      this.$emit('edit', row);
    },
    handleDeleteAction(row) {
      this.$emit('delete', row);
    },
    handlePageChange(newPageNumber) {
      this.$emit('pageChange', newPageNumber);
    },
    handleCellMouseEnter(row, column, cell) {
      cell.parentElement.classList.add('active');
    },
    handleCellMouseLeave(row, column, cell) {
      cell.parentElement.classList.remove('active');
    },
  },
};
</script>

<style lang="scss">
@import '../style/components/_data-table.scss';
</style>
