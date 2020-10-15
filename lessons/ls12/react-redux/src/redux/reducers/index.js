import { combineReducers } from 'redux'
import filterReducer from './filterReducer'
import todosReducer from './todosReducer'


export default combineReducers({
  filter: filterReducer,
  todos: todosReducer
})