<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <WeatherWidget />
  </div>
</template>

<script>
import WeatherWidget from '@/modules/Weather/WeatherWidget.vue'

export default {
  name: 'App',
  components: {
    WeatherWidget
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
