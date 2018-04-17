<template>
  <div>
    <!-- vue-easytable -->
    <v-table is-vertical-resize :vertical-resize-offset='60' is-horizontal-resize style="width:100%" :multiple-sort="false" :min-height="350" even-bg-color="#f2f2f2" :title-rows="tableConfig.titleRows" :columns="tableConfig.columns" :table-data="pageTableData" row-hover-color="#eee" row-click-color="#edf7ff" @sort-change="sortChange" :paging-index="(pageIndex-1)*pageSize" @on-custom-comp="customCompFunc"></v-table>
    <div class="mt20 mb20 bold"></div>
    <v-pagination @page-change="pageChange" @page-size-change="pageSizeChange" :total="50" :page-size="pageSize" :layout="['total', 'prev', 'pager', 'next', 'sizer', 'jumper']"></v-pagination>
  </div>
</template>
<script>

import Vue from 'vue'
import { VTable, VPagination } from 'vue-easytable'
export default {
  props: {
    tableData: {
      type: Array,
      default: [],
      required: true
    },
    pageIndex: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 10
    },
    tableConfig: {
      type: Object,
      default: {},
      required: true
    },

    // 排序
    sortChange: {
      type: Function,
      default: () => { }
    },

    // 排序
    customCompFunc: {
      typr: Function,
      default: () => { }
    }
  },
  name: 'vueeasytable',
  data () {
    return {
      local_pageIndex: this.pageIndex,
      local_pageSize: this.pageSize
    }
  },
  methods: {

    //
    updateTableData () {
      this.tableConfig.localTableData = this.getPageTableData()
    },

    // 取得計算分頁資料
    getPageTableData () {
      return this.tableData.slice((this.local_pageIndex - 1) * this.pageSize, (this.local_pageIndex) * this.pageSize)
    },

    // 切換頁數
    pageChange (pageIndex) {
      this.local_pageIndex = pageIndex
      this.updateTableData()
      console.log(pageIndex)
    },

    // 切換顯示筆數
    pageSizeChange (pageSize) {
      this.local_pageIndex = 1
      this.local_pageSize = pageSize
      this.updateTableData()
    }

  },
  computed: {
    // 分頁後的資料
    pageTableData () {
      return this.getPageTableData()
    }
  },
  components: {
    VTable,
    VPagination
  }
}

// 自定义列组件
Vue.component('table-operation', {
  template: `<span>
        <a href="" @click.stop.prevent="update(rowData,index, $event)">编辑</a>&nbsp;
        <a href="" @click.stop.prevent="deleteRow(rowData,index, $event)">删除</a>
        </span>`,
  props: {
    rowData: {
      type: Object
    },
    field: {
      type: String
    },
    index: {
      type: Number
    }
  },
  methods: {
    update () {
      // 参数根据业务场景随意构造
      let params = { type: 'edit', index: this.index, rowData: this.rowData }
      this.$emit('on-custom-comp', params)
    },

    deleteRow () {
      // 参数根据业务场景随意构造
      let params = { type: 'delete', index: this.index, aaFunc: this.$delete }
      this.$emit('on-custom-comp', params)
    }
  }
})
</script>
<style lang="css">
@import 'vue-easytable/libs/themes-base/index.css';

.title-cell-class-name-test1 {
  background-color: #2db7f5;
  color: #fff;
}
.title-cell-class-name-test2 {
  background-color: #f60;
  color: #fff;
}
</style>