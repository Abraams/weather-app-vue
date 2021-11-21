import moduleMutations from './mutations.store'
import moduleActions from './actions.store'

const state = () => {
  return {
    query: null
  }
}

export default {
  namespaced: true,
  state,
  mutations: moduleMutations,
  actions: moduleActions
}
