import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TableComponents from '@/components/TableComponents'
import Vuetable2 from '@/components/Vuetable-2'
import Layout from '@/container/Layout'
import Layout2 from '@/container/Layout2'
import Layout3 from '@/container/Layout3'
import Layout4 from '@/container/Layout4'
import Layout5 from '@/container/Layout5'
import SweetModalLayout from '@/container/SweetModalLayout'
import IziToastLayout from '@/container/IziToastLayout'
import VeeValidateLayout from '@/container/VeeValidateLayout'
import PropsBindLayout from '@/container/PropsBindLayout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout
    },
    {
      path: '/Layout2',
      name: 'Layout2',
      component: Layout2
    },
    {
      path: '/Layout3',
      name: 'Layout3',
      component: Layout3
    },
    {
      path: '/Layout4',
      name: 'Layout4',
      component: Layout4
    },
    {
      path: '/Layout5',
      name: 'Layout5',
      component: Layout5
    },
    {
      path: '/SweetModalLayout',
      name: 'SweetModalLayout',
      component: SweetModalLayout
    },
    {
      path: '/IziToastLayout',
      name: 'IziToastLayout',
      component: IziToastLayout
    },
    {
      path: '/VeeValidateLayout',
      name: 'VeeValidateLayout',
      component: VeeValidateLayout
    },
    {
      path: '/PropsBindLayout',
      name: 'PropsBindLayout',
      component: PropsBindLayout
    }
  ]
})
