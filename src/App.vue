<template>
  <v-app id="app">
    <v-container>
      <SearchWidget />
      <WeatherWidget />
      <HistoryWidget />
    </v-container>
  </v-app>
</template>

<script>
const WeatherWidget = () => import(/* webpackChunkName: "WeatherWidget" */ '@/modules/Weather/WeatherWidget.vue')
const SearchWidget = () => import(/* webpackChunkName: "SearchWidget" */ '@/modules/Search/SearchWidget.vue')
const HistoryWidget = () => import(/* webpackChunkName: "HistoryWidget" */ '@/modules/History/HistoryWidget.vue')

export default {
  name: 'App',
  components: {
    WeatherWidget,
    HistoryWidget,
    SearchWidget
  },
  mounted () {
    this.$store.dispatch('init')
  }
}
</script>
