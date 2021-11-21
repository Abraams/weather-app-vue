import { getWeather } from '../api/weather.api'
import { getCurrentPosition } from '@/services/geolocation.service'

const actions = {
  async _$fetchDataByCityName ({ commit, rootState }, payload) {
    const { city: q } = payload
    const data = (await getWeather({ q, lang: rootState.language })).data

    commit('setWeather', data)
  },

  async _$fetchDataByCoords ({ commit, rootState }, payload) {
    const { lat, lon } = payload
    const data = (await getWeather({ lat, lon, lang: rootState.language })).data

    commit('setWeather', data)
  },

  async fetchData ({ state, dispatch, commit }, payload) {
    commit('setDataFetching', { value: true })

    try {
      if (payload.city) {
        await dispatch('_$fetchDataByCityName', payload)
      } else if (payload.lat && payload.lon) {
        await dispatch('_$fetchDataByCoords', payload)
      }
    } finally {
      commit('setDataFetching', { value: false })
    }
  },

  async initModule ({ dispatch }) {
    const { coords: { latitude, longitude } } = await getCurrentPosition()
    await dispatch('fetchData', { lat: latitude, lon: longitude })
  }
}

export default actions
