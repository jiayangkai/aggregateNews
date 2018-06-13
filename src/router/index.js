import Vue from 'vue'
import App from '../App'
import {
  routerMode
} from '../common/env'
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const home = r => require.ensure([], () => r(require('@/pages/home.vue')), 'home')
const personal = r => require.ensure([], () => r(require('@/pages/personalinfo.vue')), 'personal')
const detailnews = r => require.ensure([], () => r(require('@/pages/detailnews.vue')), 'detailnews')
const search = r => require.ensure([], () => r(require('@/pages/search.vue')), 'search')
const managechannel = r => require.ensure([], () => r(require('@/pages/channelmanage.vue')), 'managechannel')
const collection = r => require.ensure([], () => r(require('@/pages/collectnews.vue')), 'collection')

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
    }, {
      path: '/personal',
      component: personal
    }, {
      path: '/detailnews',
      name: 'detailnews',
      component: detailnews
    }, {
      path: '/search',
      name: 'search',
      component: search
    }, {
      path: '/managechannel',
      component: managechannel
    }, {
      path: '/collection',
      component: collection
    }]
  }]
})

export default router
