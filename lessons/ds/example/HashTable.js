
class HashTable {
  #data = {}

  #getHash(key) {
    return key[0]
  }

  insert(key, value) {
    const hash = this.#getHash(key)

    if (!this.#data[hash]) {
      this.#data[hash] = []
    }

    this.#data[hash].push({ key, value })
  }

  get(keyToGet) {
    const hash = this.#getHash(key)

    if (!this.#data[hash]) {
      return null
    }

    return this.#data[hash].find(({ key }) => key === keyToGet)
  }
}

const hashTable = new HashTable()
hashTable.insert('abc', 'someData')
hashTable.insert('aaflds', 'someData2')

// hashTable.#data 
// {
//   'a': [{ key: 'abc', value: 'someData'}, { key: 'aaflds', value: 'someData2'}]
// }

hashTable.insert('baflds', 'someData2')

// hashTable.#data 
// {
//   'a': [{ key: 'abc', value: 'someData'}, { key: 'aaflds', value: 'someData2'}]
//   'b': [{ key: 'baflds', value: 'someData2'}]
// }