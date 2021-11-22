import AppStore from '@/store'
import { getWeather } from '../api/weather.api'
import { getCurrentPosition } from '@/services/geolocation.service'

const actions = {
  async _$fetchDataByCityName ({ commit, rootState }, payload) {
    commit('setDataFetching', { value: true })

    const { city: q } = payload
    const data = (await getWeather({ q, lang: rootState.language })).data

    commit('setWeather', data)
    commit('setDataFetching', { value: false })
  },

  async _$fetchDataByCoords ({ commit, rootState }, payload) {
    commit('setDataFetching', { value: false })

    const { lat, lon } = payload
    const data = (await getWeather({ lat, lon, lang: rootState.language })).data

    commit('setWeather', data)
    commit('setDataFetching', { value: false })
  },

  async fetchData ({ dispatch }, payload) {
    if (payload.city) {
      await dispatch('_$fetchDataByCityName', payload)
    } else if (payload.lat && payload.lon) {
      await dispatch('_$fetchDataByCoords', payload)
    }
  },

  async refreshData ({ state, dispatch, rootState }) {
    let city = state.name

    if (AppStore.hasModule('search')) {
      city = rootState.search.query || state.name
    }

    await dispatch('fetchData', { city })
  },

  async initModule ({ dispatch }) {
    const { coords: { latitude, longitude } } = await getCurrentPosition()
    await dispatch('fetchData', { lat: latitude, lon: longitude })
  }
}

export default actions
