<template>
  <DefaultLayout>
    <WeatherWidget />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/Default.vue'

const WeatherWidget = () => import(/* webpackChunkName: "WeatherWidget" */ '@/modules/Weather/WeatherWidget.vue')

export default {
  name: 'App',
  components: {
    DefaultLayout,
    WeatherWidget
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
