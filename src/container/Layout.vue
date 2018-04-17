<template>
  <div>
    <!-- vue-tables-2 Example-->
    <TableComponents :tableData="this.tableData" :columns="this.columns" :options="this.options" :getUpdateData="getUpdateData" :getDeleteData="getDeleteData" :confirmUpdate="confirmUpdate" :confirmDelete="confirmDelete" :updateData="this.updateData" :deleteData="this.deleteData">

      <!-- <template slot="row-html-tag" scope="props">
        <a slot="row-html-tag" slot-scope="props" target="_blank" :href="props.row.uri" class="glyphicon glyphicon-eye-open"></a>
      </template> -->

      <template scope="props" slot="modal-body-update">
        <span> 更新 </span><br/>
        <input type="text" v-model="updateData.code"><br/>
        <input type="text" v-model="updateData.name"><br/>
        <input type="text" v-model="updateData.created_at"><br/>
        <input type="text" v-model="updateData.updated_at"><br/>
        <input type="text" v-model="updateData.uri"><br/>
        <input type="text" v-model="updateData.id">
      </template>
      <template scope="props" slot="modal-body-delete">
        <span> 刪除 </span><br/>
        <p>
          <b></b>
        </p>
        <p>
          <b>{{deleteData.code}}</b>
        </p>
        <p>
          <b>{{deleteData.name}}</b>
        </p>
        <p>
          <b>{{deleteData.created_at}}</b>
        </p>
        <p>
          <b>{{deleteData.updated_at}}</b>
        </p>
        <p>
          <b>{{deleteData.uri}}</b>
        </p>
        <p>
          <b>{{deleteData.id}}</b>
        </p>
      </template>
      <template scope="props" slot="child_row">
      </template>

    </TableComponents>
  </div>
</template>
<script>
import { TableComponents } from '../components/index'
import { tableData } from '../mock/data/tableData2'
export default {
  name: 'layout',
  data () {
    return {
      tableData: tableData,
      columns: ['name', 'code', 'uri'],
      options: {
        headings: {
          name: 'Country Name',
          code: 'Country Code',
          uri: 'View Record'
        },
        sortable: ['name', 'code'],
        filterable: ['name', 'code']
      },
      updateData: {
        code: '',
        name: '',
        created_at: '',
        updated_at: '',
        uri: '',
        id: ''
      },
      deleteData: {
        code: '',
        name: '',
        created_at: '',
        updated_at: '',
        uri: '',
        id: ''
      }
    }
  },
  methods: {
    getUpdateData (item) {
      console.table(item)
      this.updateData = item
    },

    getDeleteData (item) {
      console.table(item)
      this.deleteData = item
    },

    confirmUpdate (e) {
      console.log(e, 'Update')
      e.target.parentElement.querySelectorAll('button[data-dismiss="modal"]')[0].click()
    },

    confirmDelete (e) {
      if (confirm('確定刪除?')) {
        let searchData = tableData.find(c => c.id === this.deleteData.id)
        let result = searchData !== null
        if (result) {
          let index = tableData.map(c => c.id).indexOf(this.deleteData.id)
          tableData.splice(index, 1)
          e.target.parentElement.querySelectorAll('button[data-dismiss="modal"]')[0].click()
        }
      }
    }
  },
  components: {
    TableComponents
  }
}
</script>
<style lang="css" scoped>

</style>