<template>
  <el-table
    :data="tableData"
    :default-sort="{ prop: 'date', order: 'descending' }"
  >
    <el-table-column
      v-for="col in tableLabel"
      :key="col.id"
      :prop="col.prop"
      :label="col.label"
      :sortable="col.isSortable"
      :column-key="col.prop"
      :width="col.width"
    />
    <el-table-column prop="action" label="">
      <div class="action-icons">
        <i class="fa-solid fa-clipboard-check icon"></i>
        <i class="fa-solid fa-bell icon"></i>
      </div>
    </el-table-column>
  </el-table>
  <el-pagination layout="prev, pager, next" :total="50"> </el-pagination>
</template>

<script>
export default {
  name: 'TriggersDataTable',
  data() {
    return {
      tableData: [
        {
          message: 'First Message',
          trigger: '2016-04-03',
          channel: 'Channel 1',
          active: 'Active',
        },
        {
          message: 'Second Message',
          trigger: '2016-11-03',
          channel: 'Channel 2',
          active: 'Active',
        },
        {
          message: 'Third Message',
          trigger: '2015-08-07',
          channel: 'Channel 3',
          active: 'Active',
        },
        {
          message: 'Fourth Message',
          trigger: '2016-01-03',
          channel: 'Channel 4',
          active: 'Active',
        },
        {
          message: 'Fifth Message',
          trigger: '2012-09-09',
          channel: 'Channel 5',
          active: 'Active',
        },
        {
          message: 'Sixth Message',
          trigger: '2017-02-04',
          channel: 'Channel 6',
          active: 'Active',
        },
        {
          message: 'Seventh Message',
          trigger: '2015-08-07',
          channel: 'Channel 7',
          active: 'Active',
        },
        {
          message: 'Eight Message',
          trigger: '2016-01-03',
          channel: 'Channel 8',
          active: 'Active',
        },
        {
          message: 'NIneth Message',
          trigger: '2012-09-09',
          channel: 'Channel 9',
          active: 'Active',
        },
        {
          message: 'Tenth Message',
          trigger: '2017-02-04',
          channel: 'Channel 10',
          active: 'Active',
        },
      ],
      tableLabel: [
        {
          id: 1,
          label: 'Message',
          prop: 'message',
          isSortable: true,
          width: '350',
        },
        {
          id: 2,
          label: 'Trigger',
          prop: 'trigger',
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
@import '../style/components/data-table.scss';
</style>
