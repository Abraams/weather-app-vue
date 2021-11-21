const mutations = {
  setLanguage (state, payload) {
    state.language = payload.lang || state.language
  }
}

export default mutations
