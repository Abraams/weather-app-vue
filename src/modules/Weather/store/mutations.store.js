
const mutations = {
  setWeather (state, payload) {
    const { name, main, weather, wind } = payload

    state.name = name
    state.main = main
    state.weather = weather[0]
    state.wind = wind
  },
  setDataFetching (state, payload) {
    const { value } = payload

    state.dataFetching = Boolean(value)
  },
  setError (state, payload = {}) {
    const { value } = payload

    state.error = value || null
  }
}

export default mutations
