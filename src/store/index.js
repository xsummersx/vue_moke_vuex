import Vue from 'vue'
import Vuex from 'vuex'
import state from './state.js'
import mutation from './mutation.js'
Vue.use(Vuex)

new Vuex.Store({
  state,
  mutation
})
