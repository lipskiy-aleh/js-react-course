import { combineReducers } from 'redux'

import { reducer as todosReducer } from '../modules/todos'

export const rootReducer = combineReducers({
  todos: todosReducer,
})