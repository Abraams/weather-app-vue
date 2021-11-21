const mutations = {
  setWeather (state, payload) {
    const { name, main, weather, wind } = payload

    state.name = name || state.name
    state.main = main || state.main
    state.weather = weather[0] || state.weather
    state.wind = wind || state.wind
  }
}

export default mutations
