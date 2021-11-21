import { apiClient } from '@/api/apiClient'

export const getWeather = (params) => {
  return apiClient.get(`${process.env.VUE_APP_WEATHER_API}data/2.5/weather`, {
    params: {
      ...params,
      units: process.env.VUE_APP_WEATHER_API_UNITS,
      appid: process.env.VUE_APP_WEATHER_API_KEY
    }
  })
}

export default {
  get: getWeather
}
