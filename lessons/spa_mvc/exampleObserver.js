class Shop {
  constructor() {
    this.subscribers = []
  }

  subscribe(handler) {
    this.subscribers.push(handler)
  }

  unsubscribe(handler) {
    this.subscribers = this.subscribers.filter(func => func !== handler)
  }

  realise() {
    // magic

    this.subscribers.forEach(notify => notify())
  }
}


class User {
  notify() {

  }
}

const appStore = new Shop()

const user = new User()

appStore.subscribe(
  user.notify
)

appStore.realise()

appStore.unsubscribe(
  user.notify
)