const mutations = {
  setWeather (state, payload) {
    const { name, main, weather, wind } = payload

    state.name = name || state.name
    state.main = main || state.main
    state.weather = weather[0] || state.weather
    state.wind = wind || state.wind
  },
  setDataFetching (state, payload) {
    const { value } = payload

    state.dataFetching = value !== undefined ? value : state.dataFetching
  }
}

export default mutations
