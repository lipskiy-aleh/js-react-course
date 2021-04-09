import { generateWeekData } from '../services/weekData'

// TODO: refactoring
// import { ADD_TODO } from '../actions/todo.actions'
const ADD_TODO = `todo/ADD_TODO`
const COMPLETE_TODO = `todo/COMPLETE_TODO`



const initialState = {
  week: generateWeekData()
}

export function todoReducer(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case ADD_TODO:
    case COMPLETE_TODO:
      return {
        ...state,
        week: action.payload
      }
    default:
      return state
  }
}