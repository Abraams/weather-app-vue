import moduleMutations from './mutations.store'
import moduleActions from './actions.store'

const state = () => {
  return {
    history: null, // [{ id: number, name: string }]
    dataFetching: true
  }
}

export default {
  namespaced: true,
  state,
  mutations: moduleMutations,
  actions: moduleActions
}
