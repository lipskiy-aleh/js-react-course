
class Publisher {
  constructor() {
    this.subscribers = []
  }

  subscribe(subscriber) {
    if (!(subscriber instanceof Subscriber)) {
      throw new Error('subscriber should implement Subscriber')
    }

    this.subscribers.push(subscriber)
  }

  notify() {
    this.subscribers.forEach((subscriber) => subscriber.update())
  }
}

class Store extends Publisher {
  constructor() {
    super()

    this.store = []
  }

  newArrival(newModel) {
    this.store.push(newModel)

    this.notify()
  }
}

class Subscriber {
  update() {
  }
}

class Person extends Subscriber{
  update() {
    this.buyNewMobilePhone()
  }

  buyNewMobilePhone() {
  }
}

const appleStore = new Store()
const person1 = new Person()

appleStore.subscribe(person1)

appleStore.newArrival()