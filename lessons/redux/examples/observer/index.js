

class Publisher {
  constructor() {
    this.subscribers = []
  }

  subscribe(func) {
    this.subscribers.push(func)
  }

  notify(data) {
    this.subscribers.forEach((subscriber) => subscriber(data))
  }
}

class Shop extends Publisher {
  newArrival(data) {
    this.notify(data)
  }
}

const appStore = new Shop()
appStore.subscribe((data) => { console.log('NEW ARRIVAL') })
appStore.newArrival({ iphones: { count: 100, model: 'X' } })