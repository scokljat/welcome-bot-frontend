<template>
  <el-table :data="getSchedules" height="88vh">
    <el-table-column
      v-for="col in tableColumn"
      :key="col.id"
      :prop="col.prop"
      :label="col.label"
      :sortable="col.isSortable"
      :column-key="col.prop"
      :width="col.width"
    />
    <el-table-column prop="action" label="">
      <div class="action-icons">
        <i class="fa-solid fa-pencil icon"></i>
        <i class="fa-solid fa-trash icon"></i>
      </div>
    </el-table-column>
  </el-table>
  <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
</template>

<script>
import { mapGetters } from 'vuex';
import { ElTable, ElTableColumn, ElPagination } from 'element-plus';

export default {
  name: 'SchedulesDataTable',
  components: {
    ElTable,
    ElTableColumn,
    ElPagination,
  },
  data() {
    return {
      schedules: [],
      tableColumn: [
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
          label: 'Active',
          prop: 'isActive',
          isSortable: true,
          width: '135',
        },
      ],
    };
  },
  computed: {
    ...mapGetters({ getSchedules: 'getSchedules' }),
  },
};
</script>

<style lang="scss">
@import '../style/components/_data-table.scss';
</style>
