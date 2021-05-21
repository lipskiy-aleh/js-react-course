
class Stack {
  #stack = []

  isEmpty() {
    return !this.#stack.length
  }

  push(val) {
    this.#stack.push(val)
    return val
  }

  pop() {
    if(this.isEmpty()) {
      return null
    }

    return this.#stack.pop()
  }

  peek() {
    if(this.isEmpty()) {
      return null
    }

    return this.#stack[this.#stack.length -1]
  }
}