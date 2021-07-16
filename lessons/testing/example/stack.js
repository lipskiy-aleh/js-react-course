class Stack {
  #stack = []
  constructor(logger) {
    this.logger = logger
  }

  getAsArray() {
    this.logger.log('Stack/getAsArray', null)
    return this.#stack
  }

  isEmpty() {
    return !this.#stack.length
  }

  push(val) {
    this.logger.log('Stack/push', val)
    this.#stack.push(val)
    return val
  }

  pop() {
    if (this.isEmpty()) {
      return null
    }

    return this.#stack.pop()
  }

  peek() {
    if (this.isEmpty()) {
      return null
    }

    return this.#stack[this.#stack.length - 1]
  }
}

module.exports = Stack