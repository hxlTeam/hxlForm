import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    beforeEnter(to, from, next) {
      // 判断是否登录
      if (!store.state.isLogin) {
        next(`/login?redirect=${to.path}`)
      } else {
        next()
      }
    },
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   // 判断是否登录
//   if (to.path === '/about' && !window.isLogin) {
//     next(`/login?redirect=${to.path}`)
//   } else {
//     next()
//   }
// })

// router.beforeResolve((to,from,next) => {
//   console.log('beforeResolve');
//   next()
// })

export default router
