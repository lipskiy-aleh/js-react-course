class Node {
  constructor(value) {
    this.value = value

    this.prev = null
    this.next = null
  }
}

const CONNECTOR = '->'

class Dll {
  constructor() {
    this.head = null
    this.tail = null
  }

  getHead() {
    return this.head
  }

  getTail() {
    return this.tail
  }

  add(value) {
    const node = new Node(value)

    if(!this.head) {
      this.head = node
      this.tail = node
      return
    }

    const backUpTail = this.tail
    backUpTail.next = node
    this.tail = node
    this.tail.prev = backUpTail
  }

  getNode(value) {
    let currentNode = this.head
    while(currentNode.value !== value) {
      currentNode = currentNode.next
      if(!currentNode) {
        return null
      }
    }

    return currentNode
  }

  addAfter(value, parentNode) {
    const node = new Node(value)

    const nextNode = parentNode.next
    parentNode.next = node
    node.prev = parentNode
    node.next = nextNode

    if(parentNode === this.tail) {
      this.tail = node
    } else {
      nextNode.prev = node
    }
  }

  delete(value) {
    const nodeToDelete = this.getNode(value)
    if(!nodeToDelete) {
      console.log('This value does not exist')
    }

    if(nodeToDelete === this.head) {
      this.head = nodeToDelete.next
    } else if (nodeToDelete === this.tail) {
      this.tail = nodeToDelete.prev
    } else {
      const prev = nodeToDelete.prev
      const next = nodeToDelete.next

      prev.next = next
      next.prev = prev
    }
  }

  isExist(value) {
    const node = this.getNode(value)
    return !!node
  }

  traverse(order = true) {
    const arrOfValues = []

    let currentNode = this.head
    while(currentNode) {
      arrOfValues.push(currentNode.value)

      currentNode = currentNode.next
    }

    if(order) {
      return arrOfValues.join(CONNECTOR)
    } else {
      return arrOfValues.reverse().join(CONNECTOR)
    }
  }
}

const dll = new Dll()

dll.add(10)
dll.add(20)
dll.add(30)
dll.addAfter(100, dll.getTail())
console.log(dll.getHead())