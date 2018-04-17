<template>
  <div>
    <div id="table-wrapper" class="ui container">
      <h2>
        <strong>&lt;Vuetable-2&gt;</strong> with Bootstrap 3</h2>
      <div class="filter-bar ui basic segment grid">
        <div class="ui form">
          <div class="inline field">
            <label>Search for:</label>
            <input type="text" v-model="filterText" class="three wide column" @keyup.enter="doFilter" placeholder="name, nickname, or email">
            <button class="ui primary button" @click="doFilter">Go</button>
            <button class="ui button" @click="resetFilter">Reset</button>
          </div>
        </div>
      </div>
      <vuetable ref="vuetable" api-url="/api/DataTable/GetAll"  data-path="data" :fields="fields" :sort-order="sortOrder" :css="css.table" pagination-path="" :append-params="moreParams" :per-page="4" @vuetable:pagination-data="onPaginationData" @vuetable:loading="onLoading" @vuetable:loaded="onLoaded">

        <template slot="actions" scope="props">

          <div class="table-button-container">
            <button class="btn btn-warning btn-sm" @click="editRow(props.rowData)">
              <span class="glyphicon glyphicon-pencil"></span> Edit</button>&nbsp;&nbsp;
            <button class="btn btn-danger btn-sm" @click="deleteRow(props.rowData)">
              <span class="glyphicon glyphicon-trash"></span> Delete</button>&nbsp;&nbsp;
          </div>
        </template>
      </vuetable>
      <vuetable-pagination ref="pagination" :css="css.pagination" @vuetable-pagination:change-page="onChangePage"></vuetable-pagination>
    </div>
  </div>
</template>
<script>
import { Vuetable,
  VuetablePagination,
  VuetablePaginationDropDown,
  VuetablePaginationInfo,
  VuetablePaginationMixin,
  VuetablePaginationInfoMixin } from 'vuetable-2'
import { tableData } from '../mock/data/tableData'
import { apiDataTableGet } from '../api/api'

export default {
  name: 'vuetable2',
  data () {
    return {
      tableData: tableData,
      fields: [
        {
          name: 'name',
          title: '<span class="orange glyphicon glyphicon-user"></span> Full Name',
          sortField: 'name'
        },
        {
          name: 'email',
          title: 'Email',
          sortField: 'email'
        },
        'birthdate', 'nickname',
        {
          name: 'gender',
          title: 'Gender',
          sortField: 'gender'
        },
        '__slot:actions'
      ],
      sortOrder: [
        { field: 'name', direction: 'asc' }
      ],
      css: {
        table: {
          tableClass: 'table table-striped table-bordered table-hovered',
          loadingClass: 'loading',
          ascendingIcon: 'glyphicon glyphicon-chevron-up',
          descendingIcon: 'glyphicon glyphicon-chevron-down',
          handleIcon: 'glyphicon glyphicon-menu-hamburger'
        },
        pagination: {
          infoClass: 'pull-left',
          wrapperClass: 'vuetable-pagination pull-right',
          activeClass: 'btn-primary',
          disabledClass: 'disabled',
          pageClass: 'btn btn-border',
          linkClass: 'btn btn-border',
          icons: {
            first: '',
            prev: '',
            next: '',
            last: ''
          }
        }
      },
      filterText: '',
      moreParams: [],
      apiDataTableGet: apiDataTableGet
    }
  },
  methods: {
    onPaginationData (paginationData) {
      this.$refs.pagination.setPaginationData(paginationData)
    },
    onChangePage (page) {
      this.$refs.vuetable.changePage(page)
    },
    editRow (rowData) {
      alert('You clicked edit on' + JSON.stringify(rowData))
    },
    deleteRow (rowData) {
      alert('You clicked delete on' + JSON.stringify(rowData))
    },
    onLoading () {
      console.log('loading... show your spinner here')
    },
    onLoaded () {
      console.log('loaded! .. hide your spinner here')
    },
    doFilter () {
      this.moreParams = [
        'filter=' + this.filterText
      ]
      this.$refs.vuetable.refresh()

      console.log('doFilter:', this.filterText)
    },
    resetFilter () {
      this.filterText = ''
      console.log('resetFilter')
    }
  },
  components: {
    Vuetable,
    VuetablePagination,
    VuetablePaginationDropDown,
    VuetablePaginationInfo,
    VuetablePaginationMixin,
    VuetablePaginationInfoMixin
  }
}
</script>
<style lang="css" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.orange.glyphicon {
  color: orange;
}

th.sortable {
  color: #ec971f;
}
</style>