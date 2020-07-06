import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
  },
  modules: {
  }
})
