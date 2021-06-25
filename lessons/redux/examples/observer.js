
class AppStore {
  constructor() {
    this.subscribers = []
  }

  subscribe(func) {
    this.subscribers.push(func)
  }

  notify(msg) {
    this.subscribers.forEach((subscriber) => subscriber(msg))
  }

  newArrival() {
    // ... 

    this.notify({ type: 'new iphone' })
  }
}

const appStore = new AppStore()

class User {
  buyIphone() {

  }

  notification = (msg) => {
    if(msg.type === 'new iphone') {
      this.buyIphone()
    }
  }
}

const user1 = new User()
const user2 = new User()

appStore.subscribe(user1.notification) 
appStore.newArrival()