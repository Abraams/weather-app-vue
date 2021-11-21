import Vue from 'vue'
import Vuetify from 'vuetify/lib/framework'
import ru from '@/i18n/ru'
import en from 'vuetify/lib/locale/en'
import { DEFAULT_LANGUAGE } from '@/config/language.config'

Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { ru, en },
    current: DEFAULT_LANGUAGE
  }
})
