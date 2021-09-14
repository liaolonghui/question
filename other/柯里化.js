function curry(fn) {
  /* Write Code Here */
  let judge = (...rest) => {
      if (rest.length == fn.length) return fn(...rest)
      return (...args) => judge(...rest, ...args)
  }
  return judge
}