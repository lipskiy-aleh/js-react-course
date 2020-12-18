export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const LOADING = 'LOADING'
export const DONE = 'DONE'

export function onIncrement(num) {
  return {
    type: INCREMENT,
    payload: num
  }
}

async function getDecrementFromApi() {
  try {
    await fetch('https://demo6226555.mockable.io/users')
  } catch (error) {
  }
  return { number: 5 }
}

export function onDecrement() {
  return async function(dispatch, getState) {
    dispatch({
      type: LOADING
    })
    const res = await getDecrementFromApi()
    dispatch({
      type: DECREMENT,
      payload: res.number
    })
    dispatch({
      type: DONE
    })
  }
}