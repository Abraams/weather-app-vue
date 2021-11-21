import { isLanguageAvailable, getUserLanguage } from '@/services/language.service'
import ERRORS from '@/constants/errors.constants'

const actions = {
  setLanguage ({ commit }, { lang }) {
    if (isLanguageAvailable(lang)) {
      commit('setLanguage', { lang })
      return
    }

    throw new Error(ERRORS.UNAVAILABLE_LANGUAGE)
  },
  setUserLanguage ({ dispatch }) {
    const lang = getUserLanguage()
    dispatch('setLanguage', { lang })
  },
  async init ({ dispatch }) {
    await dispatch('setUserLanguage')
  }
}

export default actions
