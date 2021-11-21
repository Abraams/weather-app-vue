import AppStore from '@/store'

const actions = {
  async setQuery ({ state, commit, dispatch }, payload) {
    if (state.query === payload.query) {
      return
    }

    commit('setQuery', payload)

    if (AppStore.hasModule('weather')) {
      dispatch('weather/fetchData', { city: state.query }, { root: true })
    }
  }
}

export default actions
