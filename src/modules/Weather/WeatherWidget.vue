<template>
  <div v-if="isLoading">
    loading...
  </div>
  <div
    v-else-if="error || !city"
    class="d-flex align-center justify-center"
  >
    <span
      class="text-center"
      style="white-space: break-spaces;"
      v-html="error"
    />
  </div>
  <div v-else>
    <v-row no-gutters>
      <v-col cols="12">
        <div class="d-flex justify-center align-center">
          <span class="text-h2">
            {{ formattedTemperature(main.temp) }}&deg;
          </span>
          <v-img
            class="ml-2"
            max-width="100"
            max-height="100"
            :src="weatherIcon"
          />
        </div>
      </v-col>
    </v-row>
    <v-row
      align="center"
      no-gutters
    >
      <v-col cols="12">
        <div class="subtitle-1 text-center">
          {{ weather.description }}
        </div>
      </v-col>
      <v-col cols="12">
        <div class="body-2 text-center">
          Ощущается как: {{ formattedTemperature(main.feels_like) }}&deg;
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import ERRORS from '@/constants/errors.constants'

export default {
  name: 'WeatherWidget',
  computed: {
    ...mapState({
      isLoading: s => s.weather.dataFetching,
      city: s => s.weather.name,
      main: s => s.weather.main,
      weather: s => s.weather.weather,
      wind: s => s.weather.wind,
      error: s => s.weather.error && ERRORS[`${s.weather.error}_TEXT`],
      lang: s => s.language
    }),
    weatherIcon () {
      return `https://openweathermap.org/img/wn/${this.weather.icon}@2x.png`
    },
    isDataEmpty () {
      return !this.isLoading && !this.city
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
    },
    formattedTemperature (temp) {
      const formatted = Math.round(temp)
      return formatted >= 0 ? `+${formatted}` : formatted
    }
  },
  async mounted () {
    await this.initWidgetData()
  }

}
</script>
