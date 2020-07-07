import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Index',
    component: () => import('../views/index.vue')
  },{
    path: '/login',
    name: 'Login',
    component: () => import('../views/login.vue')
  },{
    path: '/viplist',
    name: 'Viplist',
    component: () => import('../views/viplist.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
