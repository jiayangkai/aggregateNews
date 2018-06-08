// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store/index'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  let title = 'aggregatenews';
  if(to.meta.title){
    title = to.meta.title
  }
  document.title = title;
  next()
});
// 路由切换后
router.afterEach((to, from) => {});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App
  }
})
