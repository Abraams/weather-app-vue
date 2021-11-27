const mutations = {
  setQuery (state, payload) {
    const { query } = payload
    state.query = query || null
  },
  setError (state, payload) {
    const { value } = payload
    state.query = value || null
  }
}

export default mutations
