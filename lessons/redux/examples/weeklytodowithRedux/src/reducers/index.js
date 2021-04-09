import { combineReducers } from 'redux'
import { todoReducer } from './todo.reducer'
 
export const rootReducer = combineReducers({
  todo: todoReducer
})