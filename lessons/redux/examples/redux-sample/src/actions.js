
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export function incrementAction(num) {
  return ({
    type: INCREMENT,
    payload: num,
  })
}

export function decrementAction(num) {
  return ({
    type: DECREMENT,
    payload: num,
  })
}