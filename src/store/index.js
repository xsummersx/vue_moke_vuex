import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  state: {
    userName:'',
    userStatus:'',//用户信息0-普通1-VIP，2-高级VIP
    vipLevel:'',
  },
  mutations: {
    login(state,v){
      state.userName = v.user
    },
    setMemberInfo(state,v){
      state.userStatus = v.userStatus
      state.vipLevel = v.vipLevel
    }
  },
  actions: {
    buyVip({commit},e){
      return new Promise((resolve)=>{
        //api交互
        setTimeout(()=>{
          commit('setMemberInfo',{
            userStatus:e.userStatus,
            vipLevel:e.vipLevel
          })
          resolve('购买成功')
        },1000)
      })
    }
  },
  modules: {
  },
})
