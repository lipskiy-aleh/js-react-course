import { SET_USERS } from '../actions/usersActions'

const initialState = {
  list: []
}

export function usersReducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        list: action.payload
      }
    default:
      return state
  }
}