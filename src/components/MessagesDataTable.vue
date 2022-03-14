<template>
  <el-table :data="tableData">
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
      <i class="fa-solid fa-clipboard-check icon"></i>
      <i class="fa-solid fa-bell icon"></i>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'MessagesDataTable',
  data() {
    return {
      tableData: [
        {
          title: 'Message 1',
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
          date: '2016-04-03',
        },
      ],
      tableLabel: [
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
