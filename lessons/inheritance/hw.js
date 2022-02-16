
function Builder(value) {
  this.value = value
}

Builder.prototype.get = function () {
  return this.value
}

function IntBuilder(value = 0) {
  Builder.call(this, value)
}

IntBuilder.random = function () {
  console.log('random')
}

IntBuilder.prototype = Object.create(Builder.prototype)

IntBuilder.prototype.plus = function () {
  return this
}
IntBuilder.prototype.minus = function () {
  return this
}
IntBuilder.prototype.divide = function () {
  return this
}

const int1 = new IntBuilder()
int1.get() // -> 0
IntBuilder.random() // -> random

int1.plus().minus()

class StringBuilder extends Builder {
  constructor(value = '') {
    super(value)
  }

  static staticMethod() {
  }
}

const str = new StringBuilder()
StringBuilder.staticMethod()