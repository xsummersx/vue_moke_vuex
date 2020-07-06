import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, Axios)
Vue.prototype.$store = store
//全局导航定位


new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
