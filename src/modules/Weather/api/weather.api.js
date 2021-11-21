import { apiClient } from '@/api/apiClient'
import { HoldResult } from '@/decorators/HoldResult'

const $getWeather = (params) => {
  return apiClient.get(`${process.env.VUE_APP_WEATHER_API}data/2.5/weather`, {
    params: {
      ...params,
      units: process.env.VUE_APP_WEATHER_API_UNITS,
      appid: process.env.VUE_APP_WEATHER_API_KEY
    }
  })
}

// Timeout исключительно для красоты :)
export const getWeather = HoldResult($getWeather, 500)

export default {
  get: getWeather
}
