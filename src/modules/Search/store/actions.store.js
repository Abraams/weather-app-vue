import { CITY_NOT_FOUND } from '@/constants/errors.constants'

const actions = {
  async setQuery ({ state, commit, dispatch }, payload) {
    if (state.query === payload.query) {
      return
    }

    commit('setQuery', payload)

    try {
      await dispatch('weather/fetchData', { city: payload.query }, { root: true })
      await dispatch('history/addHistoryItem', { query: payload.query }, { root: true })
    } catch (error) {
      if (error === CITY_NOT_FOUND) {
        commit('setError', CITY_NOT_FOUND)

        throw new Error(CITY_NOT_FOUND)
      }

      throw new Error(error)
    }
  }
}

export default actions
