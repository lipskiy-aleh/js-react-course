const state = {}

export function set(key, value) {
  state[key] = value
}

export function get(key) {
  return state[key]
}