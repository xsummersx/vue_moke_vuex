import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {
    setToken(state, v) {
      state.token = v.token
      localStorage.setItem('token', v.token)
    },
  },
  actions: {},
  modules: {},
})
