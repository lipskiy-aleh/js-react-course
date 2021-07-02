import { combineReducers } from 'redux'
import { commonReducer } from './common'

import { reducer as todosReducer } from '../modules/todos'

export const rootReducer = combineReducers({
  common: commonReducer,
  todos: todosReducer,
})