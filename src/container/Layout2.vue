<template>
  <VueEasytablefrom :tableData="tableDate" :tableConfig="tableConfig" :customCompFunc="customCompFunc"  :sortChange="sortChange"/>
</template>

<script>
import VueEasytablefrom from '../components/VueEasytable'
import tableDate from '../mock/data/tableData3'
export default {
  name: 'layout2',
  data () {
    return {
      tableDate: tableDate,
      tableConfig: {
        multipleSort: false,
        localTableData: [],
        columns: [
          {
            field: 'custome',
            width: 50,
            titleAlign: 'center',
            columnAlign: 'center',
            formatter: function (rowData, index, pagingIndex) {
              var currentIndex = index + pagingIndex
              return currentIndex < 3 ? '<span style="color:red;font-weight: bold;">' + (currentIndex + 1) + '</span>' : currentIndex + 1
            },
            isFrozen: true
          },
          { field: 'name', width: 100, columnAlign: 'center', isFrozen: true },
          { field: 'height', width: 100, columnAlign: 'center', isFrozen: true },
          { field: 'gender', width: 90, columnAlign: 'center', isFrozen: false, isResize: true },

          { field: 'address', width: 280, columnAlign: 'left', isResize: true },
          { field: 'hobby', width: 180, columnAlign: 'center', isResize: true },
          { field: 'custome-adv', title: '操作', width: 200, titleAlign: 'center', columnAlign: 'center', componentName: 'table-operation', isResize: true }

        ],
        titleRows: [
          [{ fields: ['custome'], title: '排序', titleAlign: 'center', rowspan: 2 },
            { fields: ['name', 'height'], title: '基础信息', titleAlign: 'center', colspan: 2 },
            { fields: ['gender', 'address', 'hobby'], title: '用&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;其&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;他&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;信&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;息', titleAlign: 'center', colspan: 3 }],

          [{ fields: ['name'], title: '姓名', titleAlign: 'center' },
            { fields: ['height'], title: '身高', titleAlign: 'center', orderBy: '' },
            { fields: ['gender'], title: '性别', titleAlign: 'center' },
            { fields: ['address'], title: '住址', titleAlign: 'center' },
            { fields: ['hobby'], title: '爱好', titleAlign: 'center' },
            { fields: ['hobby'], title: '操作', titleAlign: 'center' }
          ]

          // [{ fields: ['custome', 'name', 'height'], title: '平均值', titleAlign: 'center', colspan: 3, titleCellClassName: 'title-cell-class-name-test1' },
          //   { fields: ['gender'], title: '111', titleAlign: 'center', titleCellClassName: 'title-cell-class-name-test2' },
          //   { fields: ['address'], title: '222', titleAlign: 'center', titleCellClassName: 'title-cell-class-name-test2' },
          //   { fields: ['hobby'], title: '333', titleAlign: 'center', titleCellClassName: 'title-cell-class-name-test2' }
          // ]
        ]
      }
    }
  },
  methods: {

    sortChange (params) {
      console.log(params)
      if (params.height.length > 0) {
        this.tableDate.sort(function (a, b) {
          if (params.height === 'asc') {
            return a.height - b.height
          } else if (params.height === 'desc') {
            return b.height - a.height
          } else {
            return 0
          }
        })
      }
    },

    customCompFunc (params) {
      console.log(params)

      if (params.type === 'delete') { // do delete operation
        // this.$delete(this.localTableData, params.index)
        this.$delete(this.tableDate, params.index)
      } else if (params.type === 'edit') { // do edit operation
        alert(`行号：${params.index} 姓名：${params.rowData['name']}`)
      }
    },

    // 過濾
    filterMethod (filters) {
      let tableDate = tableDate

      // filter name
      if (Array.isArray(filters.name)) {
        this.tableDate = this.tableDate.filter(item => filters.name.indexOf(item.name) > -1)
      }

      this.tableDate = tableDate
    }

  },
  created () {
  },
  components: {
    VueEasytablefrom
  }
}
</script>
