import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
Vue.use(VueAxios, Axios)
// router.beforeEach((to, from, next) => {
//   if (store.state.user || to.path === '/login') {
//     next()
//   } else {
//     next({
//       path: '/login',
//     })
//   }
// })
Vue.use(ElementUI)
new Vue({
  router,
  store,
  render: (h) => h(App),
  data: {
    global: '123',
  },
}).$mount('#app')
