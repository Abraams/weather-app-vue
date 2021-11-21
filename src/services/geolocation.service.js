export const getCurrentPosition = () => {
  return new Promise((resolve, reject) => {
    const successCB = (data) => resolve(data)
    const errorCB = (error) => reject(error)

    navigator.geolocation.getCurrentPosition(successCB, errorCB)
  })
}

export default {
  getCurrentPosition
}
