
class Queue {
  #queue = []

  isEmpty() {
    return !this.#queue.length
  }

  push(val) {
    this.#queue.push(val)
    return val
  }

  pop() {
    if(this.isEmpty()) {
      return null
    }

    return this.#queue.shift()
  }

  peek() {
    if(this.isEmpty()) {
      return null
    }

    return this.#queue[0]
  }
}