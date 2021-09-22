Function.prototype._call = function(context, ...args) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  context = context || window
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype._apply = function(context, args) {
  if (typeof this !== 'function') {
    throw new TypeError('not a function')
  }
  context = context || window
  context.fn = this
  const result = context.fn(...args)
  delete context.fn
  return result
}

Function.prototype._bind = function(context, args) {
  let fn = this
  return function() {
    return fn.apply(context, args.concat(Array.prototype.slice.call(arguments))) // 也可用Array.from()
  }
}