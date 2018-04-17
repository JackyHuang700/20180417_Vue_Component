<template>
  <div class="hello">
    <v-client-table :columns="columns" :data="data" :options="options">
      <a slot="uri" slot-scope="props" target="_blank" :href="props.row.uri" class="glyphicon glyphicon-eye-open"></a>

      <div slot="child_row" slot-scope="props">
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal2" @click="getUpdateData(props.row)">
          Update
        </button>

        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal3" @click="getDeleteData(props.row)">
          Delete
        </button>
      </div>

    </v-client-table>

    <!-- Modal 2 -->
    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal Button 2 title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span> Update </span><br/>
            <input type="text" v-model="updateData.code"><br/>
            <input type="text" v-model="updateData.name"><br/>
            <input type="text" v-model="updateData.created_at"><br/>
            <input type="text" v-model="updateData.updated_at"><br/>
            <input type="text" v-model="updateData.uri"><br/>
            <input type="text" v-model="updateData.id">
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="update">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal 3 -->
    <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">s
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal Button 2 title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <span> Delete </span><br/>
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

          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="myDelete">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ClientTable } from 'vue-tables-2'
import { tableData } from '../mock/data/tableData2'
export default {
  name: 'HelloWorld',
  data () {
    return {
      columns: ['name', 'code', 'uri'],
      data: tableData,
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
      console.table(item);
      this.updateData = item
    },


    getDeleteData (item) {
      console.table(item);
      this.deleteData = item
    },

    update (e) {
      console.log(e, 'Update')
    },

    myDelete (e) {
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
    ClientTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#app {
  width: 95%;
  margin: 0 auto;
}

.VuePagination {
  text-align: center;
}

.vue-title {
  text-align: center;
  margin-bottom: 10px;
}

.vue-pagination-ad {
  text-align: center;
}

.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}

th:nth-child(3) {
  text-align: center;
}

.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}

.VueTables__child-row-toggler--closed::before {
  content: '+';
}

.VueTables__child-row-toggler--open::before {
  content: '-';
}
</style>
