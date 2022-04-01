import { combineReducers } from 'redux'
import { INCREMENT, DECREMENT } from './actions'

const appInitialState = {
  init: true,
}

export function appReducer(state = appInitialState, action) {
  console.log('LOG, action', action)
  return state
}

const countInitialState = 0

export function countReducer(state = countInitialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + action.payload
    case DECREMENT:
      return state - action.payload
    default:
      return state;
  }
}


export const rootReducer = combineReducers({
  app: appReducer,
  count: countReducer,
})

// export function rootReducer(state, action) {
//   return ({
//     app: appReducer(state, action),
//     count: countReducer(state, action),
//   })
// }