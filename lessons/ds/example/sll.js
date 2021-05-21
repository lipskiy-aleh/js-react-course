
class Node {
  constructor(data) {
    this.key = key
    this.data = data
    this.next = null
  }
}

export class Sll {
  constructor() {
    this.head = null
    this.tail = null
  }

  add(data) {
    const node = new Node(data)

    if(!this.head) {
      this.head = node
      return node
    }

    let currentNode = this.head
    while(currentNode.next) {
      currentNode = currentNode.next
    }

    currentNode.next = node
  }

  exist(data) {
    const node = this.findNode(this.head, data)

    // if(node) {
    //   return true
    // } else {
    //   return false
    // }

    return !!node
  }

  findNode(node, data) {
    if(!node) {
      return null
    }else if(node.data === data) {
      return node
    }

    return this.findNode(node.next, data)
  }

  _findParentNode(node) {
    if(this.head === node) {
      return null
    }
    let currentNode = this.head

    while(currentNode) {
      if(currentNode.next === node) {
        return currentNode
      }

      currentNode = currentNode.next
    }
  }

  delete(data) {
    const node = this.findNode(this.head, data)
    if(!node) {
      return
    }

    const parentNode = this._findParentNode(node)
    if(!parentNode) {
      this.head = node.next
      return
    }

    parentNode.next = node.next
  }
}
