import { isLanguageAvailable, formatLanguage, getUserLanguage } from '@/services/language.service'
import ERRORS from '@/constants/errors.constants'

const actions = {
  setLanguage ({ commit }, { lang }) {
    const formattedLang = formatLanguage(lang)

    if (isLanguageAvailable(formattedLang)) {
      commit('setLanguage', { lang: formattedLang })
      return
    }

    throw new Error(ERRORS.UNAVAILABLE_LANGUAGE)
  },
  setUserLanguage ({ dispatch }) {
    const lang = getUserLanguage()
    dispatch('setLanguage', { lang })
  }
}

export default actions
