import { combineReducers } from 'redux'
import { todoReducer } from './todo.reducer'
 
export const rootReducer = combineReducers({
  todo: todoReducer,
  user: userReduce,
})

function userReduce(state = { isLogged: true }, action) {
  switch (action.type) {
    case 'LOGIN': 
      return {
        ...state,
        isLogged: true
      }
    case 'LOGOUT': 
      return {
        ...state,
        isLogged: false
      }
    default:
      return state
  }
}