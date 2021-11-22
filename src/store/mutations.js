const mutations = {
  setLanguage (state, payload) {
    state.language = payload.lang || state.language
  },
  setLoading (state, payload) {
    state.loading = payload.value || false
  }
}

export default mutations
