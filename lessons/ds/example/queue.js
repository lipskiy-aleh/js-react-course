class Queue {
  #data = []

  push(value) {
    this.#data.push(value)
  }

  pop() {
    return this.#data.shift()
  }
}