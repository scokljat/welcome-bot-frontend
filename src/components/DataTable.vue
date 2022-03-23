<template>
  <el-table :data="tableData" height="88vh" @cell-click="handleCellClick">
    <el-table-column
      v-for="col in tableColumns"
      :key="col.id"
      :prop="col.prop"
      :label="col.label"
      :sortable="col.isSortable"
      :column-key="col.prop"
      :width="col.width"
    />
    <el-table-column prop="action" label="">
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
    :total="tableData.length"
    @current-change="(newPageNumber) => $emit('pageChange', newPageNumber)"
  >
  </el-pagination>
</template>

<script>
import { mapMutations } from 'vuex';
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
  methods: {
    ...mapMutations({ openAppModal: OPEN_APP_MODAL }),
    handleCellClick(row, column, cell) {
      cell.parentElement.classList.toggle('expanded');
    },
    handleEditAction(row) {
      this.$emit('edit', row);
      this.openAppModal();
    },
    handleDeleteAction(row) {
      this.$emit('delete', row);
      this.openAppModal();
    },
  },
};
</script>

<style lang="scss">
@import '../style/components/_data-table.scss';
</style>
