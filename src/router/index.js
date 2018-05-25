import Vue from 'vue'
import App from '../App'
import {
  routerMode
} from '../common/env'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const home = r => require.ensure([], () => r(require('@/pages/home.vue')), 'home')
const personal = r => require.ensure([], () => r(require('@/pages/personalinfo.vue')), 'personal')

const router = new VueRouter({
  mode: routerMode,
  routes: [{
    path: '/',
    component: App,
    meta: {
      keepAlive: true
    },
    children: [{
      path: '',
      component: home,
      meta: {
        title: ''
      }
    },{
      path:'/personal',
      component:personal
    }]
  }]
})

export default router
