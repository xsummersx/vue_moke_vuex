import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:'',
    vipState:'',//0-普通用户 1-会员用户， 2-超级VIP用户
    vipLevel:''
  },
  mutations: {
    login(state,v){
      state.user = v.user;
    },
    setVip(state,v){
      state.vipState = v.vipState,
      state.vipLevel = v.vipLevel
    }
  },
  getters:{
    vipName:(state)=>{
      switch(state.vipState){
        case 0:
          return '普通用户'
        case 1:
          return '会员用户'
        default:
          return '超级会员用户'
      }
    }
  },
  actions: {
  },
  modules: {
  }
})
