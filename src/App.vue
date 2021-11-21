<template>
  <div id="app">
    <SearchWidget />
    <WeatherWidget />
    <HistoryWidget />
  </div>
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

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
