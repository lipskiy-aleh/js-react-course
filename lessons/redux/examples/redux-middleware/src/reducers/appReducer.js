import {
  START_FETCH,
  STOP_FETCH
} from '../actions/appActions'

const initialState = {
  init: true,
  fetching: false,
}

export function appReducer(state = initialState, action) {
  debugger
  switch (action.type) {
    case START_FETCH:
      return {
        ...state,
        fetching: true,
      }
    case STOP_FETCH:
      return {
        ...state,
        fetching: false,
      }
    default:
      return state
  }
}