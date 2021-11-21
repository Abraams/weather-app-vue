import AppStore from '@/store'
import historyApi from '../api/history.api'

const actions = {
  async addHistoryItem ({ commit, state }, payload) {
    commit('setDataFetching', { value: true })

    try {
      const { query } = payload
      const { data: history } = await historyApi.get()
      const newHistory = [{ name: query, id: Date.now() }, ...history.filter(i => i.name !== query)]

      await historyApi.set(newHistory)
      commit('setHistory', { history: newHistory })
    } finally {
      commit('setDataFetching', { value: false })
    }
  },

  async selectHistoryItem ({ dispatch }, payload) {
    const { name } = payload

    if (AppStore.hasModule('search')) {
      await dispatch('search/setQuery', { query: name }, { root: true })
    } else if (AppStore.hasModule('weather')) {
      await dispatch('weather/fetchData', { city: name }, { root: true })
    }
  },

  async initModule ({ commit }) {
    commit('setDataFetching', { value: true })

    try {
      const { data: history } = await historyApi.get()
      commit('setHistory', { history })
    } finally {
      commit('setDataFetching', { value: false })
    }
  }
}

export default actions
