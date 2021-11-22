import Vue from 'vue'
import Vuex from 'vuex'
import { DEFAULT_LANGUAGE } from '@/config/language.config'
import rootMutations from './mutations'
import rootActions from './actions'
import rootModules from './modules'

Vue.use(Vuex)

const rootState = {
  language: DEFAULT_LANGUAGE,
  loading: false
}

export default new Vuex.Store({
  state: rootState,
  mutations: rootMutations,
  actions: rootActions,
  modules: rootModules
})
