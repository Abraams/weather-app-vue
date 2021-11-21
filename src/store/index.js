import Vue from 'vue'
import Vuex from 'vuex'
import rootMutations from './mutations'
import rootActions from './actions'
import rootModules from './modules'

Vue.use(Vuex)

const rootState = {
  language: 'en'
}

export default new Vuex.Store({
  state: rootState,
  mutations: rootMutations,
  actions: rootActions,
  modules: rootModules
})
