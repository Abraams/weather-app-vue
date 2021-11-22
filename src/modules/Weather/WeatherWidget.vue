<template>
  <div>
    <div v-if="isLoading">
      loading...
    </div>
    <div v-else-if="city">
      <div>
        <img :src="icon">
      </div>
      <div>
        {{ weather.description }}
      </div>
      <v-divider />
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
    <div v-else>
      Не удалось получить данные по вашему городу
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'WeatherWidget',
  computed: {
    ...mapState({
      isLoading: s => s.weather.dataFetching,
      city: s => s.weather.name,
      main: s => s.weather.main,
      weather: s => s.weather.weather,
      wind: s => s.weather.wind,
      lang: s => s.language
    }),
    icon () {
      return `https://openweathermap.org/img/wn/${this.weather.icon}@2x.png`
    }
  },
  watch: {
    lang: {
      handler () {
        this.$store.dispatch('weather/refreshData')
      }
    }
  },
  methods: {
    async initWidgetData () {
      try {
        await this.$store.dispatch('weather/initModule')
      } catch (error) {
        console.error(error)
      }
    }
  },
  async mounted () {
    await this.initWidgetData()
  }

}
</script>
