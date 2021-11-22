export const APP_LANGUAGES = {
  ru: 'ru'
  // en: 'en'
}

export const formatLanguage = (lang) => {
  return lang.toLowerCase().split('-')[0]
}

export const isLanguageAvailable = (lang) => {
  if (typeof lang !== 'string') {
    return false
  }

  return Object.values(APP_LANGUAGES).includes(lang)
}

export const getUserLanguage = () => {
  const lang = formatLanguage(navigator.language)

  return (isLanguageAvailable(lang) && lang) || APP_LANGUAGES.en
}

export default {
  APP_LANGUAGES,
  formatLanguage,
  isLanguageAvailable
}
