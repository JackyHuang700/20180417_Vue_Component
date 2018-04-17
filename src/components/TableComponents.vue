<template>
  <div class="hello">
    <v-client-table :columns="columns" :data="tableData" :options="base_options">

      <!-- <slot name="row-html-tag"></slot> -->

      <div slot="child_row" slot-scope="props">
        <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal2" @click="getUpdateData(props.row)">更新</button>
        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal3" @click="getDeleteData(props.row)">刪除</button>
        <slot name="child_row"></slot>
      </div>
    </v-client-table>

    <!-- Modal 2 -->
    <div class="modal fade" id="exampleModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="modal-body-update"></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-success" @click="confirmUpdate">確認</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal 3 -->
    <div class="modal fade" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <slot name="modal-body-delete"></slot>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">關閉</button>
            <button type="button" class="btn btn-danger" @click="confirmDelete">確認</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ClientTable } from 'vue-tables-2'
export default {
  name: 'vue-tables-2',
  props: {

    tableData: {
      type: Array,
      default: [],
      required: true
    },

    columns: {
      type: Array,
      default: [],
      required: true
    },

    options: {
      type: Object,
      default: {},
      required: true
    },

    // 按下更新按鈕抓取資料
    getUpdateData: {
      type: Function,
      default: () => { },
      required: true
    },

    // 按下刪除按鈕抓取資料
    getDeleteData: {
      type: Function,
      default: () => { },
      required: true
    },

    // 確認更新
    confirmUpdate: {
      type: Function,
      default: () => { },
      required: true
    },

    // 確認刪除
    confirmDelete: {
      type: Function,
      default: () => { },
      required: true
    },

    // Update Temp Data
    updateData: {
      type: Object,
      default: {}
    },

    // Delete Temp Data
    deleteData: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
    }
  },
  computed: {
    // https://github.com/matfish2/vue-tables-2/blob/master/lib/config/defaults.js
    base_options () {
      if (typeof this.options['texts'] === 'undefined') {
        this.options['texts'] = {}
        if (typeof this.options['texts']['count'] === 'undefined') {
          this.options['texts']['count'] = '顯示{from} 至 {to} 筆紀錄，共有{count}筆紀錄|共有 {count}紀錄|只有一筆記錄'
        }
        if (typeof this.options['texts']['filter'] === 'undefined') {
          this.options['texts']['filter'] = '過濾:'
        }
        if (typeof this.options['texts']['limit'] === 'undefined') {
          this.options['texts']['limit'] = '顯示筆數:'
        }
        if (typeof this.options['texts']['filterPlaceholder'] === 'undefined') {
          this.options['texts']['filterPlaceholder'] = 'travelingkp'
        }
      }

      return this.options
    }
  },
  created () {
    this.aa()
  },
  methods: {
    aa () {
      console.log('12')
      console.log(this)
    }
  },
  components: {
    ClientTable
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
/* #app {
  width: 95%;
  margin: 0 auto;
} */

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
