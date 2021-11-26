import moduleMutations from './mutations.store'
import moduleActions from './actions.store'

const state = () => {
  return {
    name: null,
    main: {
      feels_like: null,
      humidity: null,
      pressure: null,
      temp: null,
      temp_max: null,
      temp_min: null
    },
    weather: {
      description: null,
      icon: null
    },
    wind: {
      speed: null,
      deg: null
    },
    dataFetching: false
  }
}

export default {
  namespaced: true,
  state,
  mutations: moduleMutations,
  actions: moduleActions
}
