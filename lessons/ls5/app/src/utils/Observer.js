class Observer {
  constructor() {
    this.listeners = []
  }

  subscribe(listener) {
    this.listeners.push(listener)
  }

  unsubscribe(listener) {
    this.listeners = this.listeners.filter(func => func !== listener)
  }

  notify(meta) {
    this.listeners.forEach(listener => listener(meta))
  }
}

export default Observer