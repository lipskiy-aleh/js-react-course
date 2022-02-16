
class Node {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
  }
}

class LinkedList {
  #head = null
  #tail = null

  getHead() {
    return this.#head
  }

  findLastNode() {
    let curNode = this.#head
    while (curNode.next) {
      curNode = curNode.next
    }

    return curNode
  }

  add(key, value) {
    const node = new Node(key, value)

    if (!this.#head) {
      this.#head = node
      return
    }

    const lastNode = this.findLastNode()
    lastNode.next = node
  }

  find(compare) {
    if (!this.#head) {
      return null
    }

    const cur = this.#head
    while (cur) {
      if (
        (typeof compare === 'function' && compare(cur)) ||
        cur.key === compare
      ) {
        return cur
      }

      cur = cur.next
    }

    return null
  }

  delete(key) {
    if (!this.#head) {
      return null
    }

    if (this.#head.key === key) {
      this.#head = this.#head.next ? this.#head.next : null
      return
    }

    const cur = this.#head
    while (cur.next) {
      if (cur.next.key === key) {
        const nextNode = cur.next.next
        cur.next = nextNode
        return
      }

      cur = cur.next
    }

    return null
  }
}

const ll = new LinkedList()