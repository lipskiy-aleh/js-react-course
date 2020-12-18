import { INCREMENT, DECREMENT } from '../actions'

const initialState = {
  number: 0,
  counter: 0,
}

export default function (state = initialState, action) {
  console.log(action.type)

  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + action.payload,
        counter: state.counter + 1,
      }
    case DECREMENT:
      return {
        ...state,
        number: state.number - action.payload,
        counter: state.counter + 1,
      }
    default:
      break;
  }

  return state
}