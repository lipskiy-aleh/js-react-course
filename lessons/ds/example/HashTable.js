class HashTable {
  constructor() {
    this.storage = {}
  }

  add(key, value) {
    const hash = this.hash(key)
    this.storage[hash] = {
      [key]: value
    }
  }

  get(key) {
    const hash = this.hash(key)
    return this.storage[hash][key]
  }

  hash(key) {
    return key.length
  }
}

const hashTable = new HashTable()
hashTable.add('a', 'Hello world')
hashTable.add('ab', 'Hello world 1')
hashTable.add('abc', 'Hello world 2')

console.log(
  hashTable.storage
)