class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

module.exports = Node


class NodeDouble {
  constructor(data) {
    this.data = data

    this.previous = null
    this.next = null
  }
}