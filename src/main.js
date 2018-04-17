// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetables2Config from './Config/vuetables2Config'
import izitoastConfig from './Config/izitoastConfig'
import mockConfig from './Config/mockConfig'
import VeeValidateConfig from './Config/VeeValidateConfig'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
