function createStore(reducer) {
  return new ReduxStore(reducer)
}

const store = createStore()
store.getState()
store.dispatch()
store.subscribe()

class ReduxStore {
  #state

  constructor(reducer) {
    this.reducer = reducer
    this.#state = this.reducer(undefined, { type: 'INIT' })
    this.subscribers = []
  }

  getState() {
    return this.#state
  }

  dispatch(action) {
    if (!action || !action.type) {
      throw new Error('Action should has type')
    }

    this.#state = this.reducer(this.#state, action)
    this.notify()
  }

  notify() {
    this.subscribers.forEach((fn) => fn())
  }

  subscribe(subscriber) {
    this.subscribers.push(subscriber)
  }
}