const actions = {
  async setQuery ({ state, commit, dispatch }, payload) {
    if (state.query === payload.query) {
      return
    }

    commit('setQuery', payload)

    await dispatch('weather/fetchData', { city: state.query }, { root: true })
    await dispatch('history/addHistoryItem', { query: state.query }, { root: true })
  }
}

export default actions
