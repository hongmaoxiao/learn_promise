if (typeof setImmediate === 'function') {
  module.exports = function(fn) {
    setImmediate(fn)
  }
} else if (typeof process !== 'undefined' && process && typeof process.nextTick === 'function') {
  module.exports = function(fn) {
    process.nextTick(fn)
  }
} else {
  module.exports= function(fn) {
    setTimeout(fn, 0)
  }
}
