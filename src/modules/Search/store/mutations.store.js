const mutations = {
  setQuery (state, payload) {
    const { query } = payload
    state.query = query || state.query
  }
}

export default mutations
