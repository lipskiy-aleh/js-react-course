import { Sll } from 'linked-list'

class HashTable {
  #table = {}

  _getHash(key) {
    return key.length
  }

  insertData(key, data) {
    const hash = this._getHash(key)

    if(!this.#table[hash]) {
      this.#table[hash] = new Sll()
    }

    this.#table[hash].add(key, data)
  }

  getData(key) {
    const hash = this._getHash(key)

    if(!this.#table[hash]) {
      return null
    }

    return this.#table[hash].get(key)
  }

  removeData(key) {
    const hash = this._getHash(key)

    if(!this.#table[hash]) {
      return null
    }

    return this.#table[hash].remove(key)
  }
}
