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
import { ElTable, ElTableColumn, ElPagination } from 'element-plus';
import 'element-plus/es/components/table/style/css';
import 'element-plus/es/components/table-column/style/css';
import 'element-plus/es/components/pagination/style/css';

export default {
  name: 'MessagesDataTable',
  components: {
    ElTable,
    ElTableColumn,
    ElPagination,
  },
  data() {
    return {
      tableData: [
        {
          title: 'First Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2016-04-03',
        },
        {
          title: 'Second Message',
          text: "Orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2016-11-03',
        },
        {
          title: 'Third Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2015-08-07',
        },
        {
          title: 'Fourth Message',
          text: "Rem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2016-01-03',
        },
        {
          title: 'Fifth Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2012-09-09',
        },
        {
          title: 'Sixth Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2017-02-04',
        },
        {
          title: 'Seventh Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2015-08-07',
        },
        {
          title: 'Eight Message',
          text: "Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2016-01-03',
        },
        {
          title: 'NIneth Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2012-09-09',
        },
        {
          title: 'Tenth Message',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2017-02-04',
        },
      ],
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
    };
  },
};
</script>

<style lang="scss">
@import '../style/components/data-table.scss';
</style>
