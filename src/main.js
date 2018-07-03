import Vue from 'vue'
import App from './App.vue'
import store from './store'
import VueRouter from 'vue-router'
import routers from './router'

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: routers
})



router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {  // 判断该路由是否需要登录权限
    console.log('beforeEach获取当前的token是否存在  '+store.state.bilimid)
    if (store.state.bilimid) {  // 通过vuex state获取当前的token是否存在
      next();
    }
    else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }
  else {
    next();
  }
});


new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
