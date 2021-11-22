<template>
  <DefaultLayout>
    <v-container>
      <WeatherWidget />
      <HistoryWidget />
    </v-container>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/Default.vue'

const WeatherWidget = () => import(/* webpackChunkName: "WeatherWidget" */ '@/modules/Weather/WeatherWidget.vue')
const HistoryWidget = () => import(/* webpackChunkName: "HistoryWidget" */ '@/modules/History/HistoryWidget.vue')

export default {
  name: 'App',
  components: {
    DefaultLayout,
    WeatherWidget,
    HistoryWidget
  },
  methods: {
    initAppLanguage () {
      this.$store.dispatch('setUserLanguage')
      this.$vuetify.lang.current = this.$store.state.language
    }
  },
  mounted () {
    this.initAppLanguage()
  }
}
</script>
