export const checkValueFromLS = (key) => {
  return localStorage.getItem(key) !== null
}

export const getValueFromLS = (key, def) => {
  const value = localStorage.getItem(key)

  return value !== null ? JSON.parse(value) : def || value
}

export const setValueToLS = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value))
}

const localStorageService = {
  checkValue: checkValueFromLS,
  getValue: getValueFromLS,
  setValue: setValueToLS
}

export default localStorageService
