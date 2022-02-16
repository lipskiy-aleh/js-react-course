class Stack {
  #data
  constructor() {
    this.#data = []
  }

  push(value) {
    this.#data.push(value)
  }

  pop(value) {
    return this.#data.pop(value)
  }
}

const stack = new Stack()