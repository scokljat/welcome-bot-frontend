<template>
  <el-table :data="tableData" height="88vh">
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
      tableData: [
        {
          message: 'First Message',
          next_run: '2016-04-03',
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
      tableColumn: [
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
          label: 'Active',
          prop: 'active',
          isSortable: true,
          width: '135',
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import '../style/components/_data-table.scss';
</style>
