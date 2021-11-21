<template>
  <div>
    <div v-if="isLoading">
      loading...
    </div>
    <div v-else>
      <div>
        {{ city }}
      </div>
      <div>
        <img :src="icon">
      </div>
      <div>
        {{ weather.description }}
      </div>
      <hr>
      <div>
        feels like: {{ main.feels_like }}
      </div>
      <div>
        temperature: {{ main.temp }} (min: {{ main.temp_min }} / max: {{ main.temp_max }})
      </div>
      <div>
        wind speed: {{ wind.speed }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import AppStore from '@/store'
import weatherModule from './store'

export default {
  name: 'WeatherWidget',
  data () {
    return {
      isLoading: true
    }
  },
  beforeCreate () {
    if (!AppStore.hasModule('weather')) {
      AppStore.registerModule('weather', weatherModule)
    }
  },
  computed: {
    ...mapState({
      city: s => s.weather.name,
      main: s => s.weather.main,
      weather: s => s.weather.weather,
      wind: s => s.weather.wind
    }),
    icon () {
      return `https://openweathermap.org/img/wn/${this.weather.icon}@2x.png`
    }
  },
  methods: {
    async initWidgetData () {
      this.isLoading = true
      try {
        await this.$store.dispatch('weather/initModule')
      } catch (error) {
        console.error(error)
      } finally {
        this.isLoading = false
      }
    }
  },
  mounted () {
    setTimeout(this.initWidgetData, 350)
  }

}
</script>
