import { getWeather } from '../api/weather.api'
import { getCurrentPosition } from '@/services/geolocation.service'

const actions = {
  async _$fetchData ({ commit, dispatch, rootState }, payload) {
    try {
      dispatch('setLoading', { value: true }, { root: true })
      commit('setDataFetching', { value: true })

      const data = (await getWeather({ ...payload, lang: rootState.language })).data
      commit('setWeather', data)
    } finally {
      commit('setDataFetching', { value: false })
      dispatch('setLoading', { value: false }, { root: true })
    }
  },

  async fetchData ({ dispatch }, payload) {
    if (payload.city) {
      await dispatch('_$fetchData', { q: payload.city })
    } else if (payload.lat && payload.lon) {
      await dispatch('_$fetchData', { lat: payload.lat, lon: payload.lon })
    }
  },

  async refreshData ({ state, dispatch, rootState }) {
    const city = rootState.search.query || state.name

    await dispatch('fetchData', { city })
  },

  async initModule ({ dispatch }) {
    const { coords: { latitude, longitude } } = await getCurrentPosition()
    await dispatch('fetchData', { lat: latitude, lon: longitude })
  }
}

export default actions
