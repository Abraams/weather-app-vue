import { getWeather } from '../api/weather.api'
import { getCurrentPosition } from '@/services/geolocation.service'

const actions = {
  async fetchDataByCityName ({ commit, rootState }, payload) {
    const { city: q } = payload
    const data = (await getWeather({ q, lang: rootState.language })).data

    commit('setWeather', data)
  },

  async fetchDataByCoords ({ commit, rootState }, payload) {
    const { lat, lon } = payload
    const data = (await getWeather({ lat, lon, lang: rootState.language })).data

    commit('setWeather', data)
  },

  async fetchData ({ dispatch }, payload) {
    if (payload.city) {
      await dispatch('fetchDataByCityName', payload)
    } else if (payload.lat && payload.lon) {
      await dispatch('fetchDataByCoords', payload)
    }
  },

  async initModule ({ dispatch }) {
    const { coords: { latitude, longitude } } = await getCurrentPosition()
    await dispatch('fetchDataByCoords', { lat: latitude, lon: longitude })
  }
}

export default actions
