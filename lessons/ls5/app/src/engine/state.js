import Observer from '../utils/Observer.js'
// const state = {}

// export function set(key, value) {
//   state[key] = value
// }

// export function get(key) {
//   return state[key]
// }

class State extends Observer {
  constructor() {
    super()

    this.state = {}
  }

  set(key, value) {
    // CHANGE DATA
    this.state[key] = value

    // NOTIFICATE
    this.notify()
  }

  get(key) {
    return this.state[key]
  }
}
const state = new State()
export default state