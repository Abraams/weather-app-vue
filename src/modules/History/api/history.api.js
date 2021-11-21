import localStorageService from '@/services/localStorage.service'

export const getSearchHistory = () => {
  return Promise.resolve({ data: localStorageService.getValue(process.env.VUE_APP_LOCAL_STORAGE_HISTORY_KEY, []) })
}

export const setSearchHistory = (value) => {
  return Promise.resolve(localStorageService.setValue(process.env.VUE_APP_LOCAL_STORAGE_HISTORY_KEY, value))
}

export default {
  get: getSearchHistory,
  set: setSearchHistory
}
