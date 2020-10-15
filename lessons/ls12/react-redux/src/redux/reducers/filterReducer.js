import { CHANGE_FILTER } from "../actions/filterActions"

const initialState = 'all'

function filterReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.payload
    default:
      return state
  }
}

export default filterReducer