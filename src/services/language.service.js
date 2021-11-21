export const APP_LANGUAGES = {
  ru: 'ru',
  en: 'en'
}

const formatLang = (lang) => {
  return lang.toLowerCase().split('-')[0]
}

export const isLanguageAvailable = (lang) => {
  if (typeof lang !== 'string') {
    return false
  }

  const formattedLang = formatLang(lang)

  return APP_LANGUAGES[formattedLang] || Object.values(APP_LANGUAGES).includes(formattedLang)
}

export const getUserLanguage = () => {
  return isLanguageAvailable(navigator.language) || APP_LANGUAGES.en
}

export default {
  APP_LANGUAGES,
  isLanguageAvailable
}
