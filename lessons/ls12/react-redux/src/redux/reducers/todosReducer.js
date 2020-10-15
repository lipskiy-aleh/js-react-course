import { ADD_TODO, TOGGLE_TODO } from "../actions/todoActions"

const initialState = []

function todosReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return [...state, action.payload]
    }
    case TOGGLE_TODO: {
      return action.payload
    }
    default:
      return state
  }
}

export default todosReducer