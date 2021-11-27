import { GEOLOCATION_ERROR, CITY_NOT_FOUND, SMTH_WENT_WRONG } from '@/constants/errors.constants'
import { getCurrentPosition } from '@/services/geolocation.service'
import { getWeather } from '../api/weather.api'
import { state as getInitialState } from './index'

const actions = {
  async _$fetchData ({ state, commit, dispatch, rootState }, payload) {
    commit('setError', {})

    try {
      dispatch('setLoading', { value: true }, { root: true })
      commit('setDataFetching', { value: true })

      const data = (await getWeather({ ...payload, lang: rootState.language })).data
      commit('setWeather', data)
    } catch (error) {
      const status = error.response.status
      commit('setWeather', getInitialState())

      if (status === 404) {
        commit('setError', { value: CITY_NOT_FOUND })
        throw new Error(CITY_NOT_FOUND)
      }

      if (status === 500) {
        commit('setError', { value: SMTH_WENT_WRONG })
      }
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

  async initModule ({ dispatch, commit }) {
    let coords

    try {
      coords = (await getCurrentPosition()).coords
    } catch (error) {
      commit('setError', { value: GEOLOCATION_ERROR })
    }

    if (!coords) {
      return
    }

    await dispatch('fetchData', { lat: coords.latitude, lon: coords.longitude })
  }
}

export default actions
