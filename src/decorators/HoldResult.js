// TODO: Придумать название получше

export const HoldResult = (fn, throttle = 4) => {
  if (typeof fn !== 'function') {
    throw new Error('fn должен быть функцией')
  }

  return (...args) => {
    return new Promise((resolve, reject) => {
      const start = Date.now()
      const result = fn.apply(this, args)

      if (result instanceof Promise) {
        result
          .then(data => {
            const end = Date.now()
            const delta = end - start

            if (delta < throttle) {
              setTimeout(() => {
                resolve(data)
              }, throttle - delta)
            } else {
              resolve(data)
            }
          })
          .catch(reject)
      } else {
        setTimeout(() => {
          resolve(result)
        }, throttle)
      }
    })
  }
}
