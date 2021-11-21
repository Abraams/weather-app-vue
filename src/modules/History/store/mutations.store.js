const mutations = {
  setHistory (state, payload) {
    const { history } = payload

    state.history = history || state.history
  },
  setDataFetching (state, payload) {
    const { value } = payload

    state.dataFetching = value !== undefined ? value : state.dataFetching
  }
}

export default mutations
