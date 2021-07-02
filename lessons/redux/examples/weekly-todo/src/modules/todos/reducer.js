import { ADD_TODO, SET_TODOS } from './actions'

const initialState = {
  list: []
}

export function todosReducer(state = initialState, action) {
  // console.log(action.type, action, state)

  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        list: [...action.payload]
      }
    case ADD_TODO:
      return {
        ...state,
        list: [...state.list, action.payload]
      }
    default:
      return state
  }
}