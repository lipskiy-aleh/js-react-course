function sum(a, b) {
  return a + b
}

function toArray(a, b) {
  return [a, b]
}

function process(func, arg) {
  if (arg === undefined) {
    return 0
  }

  return func(arg)
}

module.exports = {
  sum,
  toArray,
  process
}