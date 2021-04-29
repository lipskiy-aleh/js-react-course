import { generateWeekData } from '../services/weekData'
import { SET_WEEK } from '../actions/todo.actions'

const initialState = {
  week: generateWeekData()
}

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case SET_WEEK:
      return {
        ...state,
        week: action.payload
      }
    default:
      return state
  }
}