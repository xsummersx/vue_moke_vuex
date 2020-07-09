import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
import VueAxios from 'vue-axios'

Vue.config.productionTip = false
Vue.use(VueAxios, Axios)
router.beforeEach((to,from,next)=>{
  if (to.path == '/login') {
    next();
  } else {
    let token = localStorage.getItem('token');
    console.log(token)
    if (token == null || token == '') {
      next('/login');
    } else {
      next();
    }
  }
});

Axios.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers.token = localStorage.getItem('token');//请求头部加token验证
  }
  console.log(config)
  return config
}, error => {
  return Promise.reject(error)
});
//请求拦截
Axios.interceptors.response.use(
  response => {
    console.log('请求成功拦截')
    console.log(response)
    return response
  },error => {
    console.log('请求失败拦截')
    console.log(error.response)
    if(error.response.status == 403){//token失效
      localStorage.removeItem('token');
      router.push('/login');
    }
  return Promise.reject(error)
})
    

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
