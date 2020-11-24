// const Node = require('./Node.js');

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  add(data) {
    if(!this.head) {
      this.head = new Node(data)
      return
    }

    this._addToNode(this.head, data)
  }

  _addToNode(parentNode, data) {
    if(!parentNode.next) {
      const node = new Node(data)
      parentNode.next = node
      return
    }

    this._addToNode(parentNode.next, data)
  }

  traverse() {
    return this._printTail(this.head)
  }

  _printTail(node) {
    if(!node) {
      return ''
    }

    const arrow = node === this.head ? '' : '->'

    return `${arrow} ${node.data} ${ this._printTail(node.next) }`
  }
}


const ll = new LinkedList()
ll.add(100)
ll.add(200)
ll.add(300)
console.log(ll.traverse())