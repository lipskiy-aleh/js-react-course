import {
  PENDING,
  SUCCESS,
  FAILED
} from '../actions/common'
import { FAILED_STATUS, PENDING_STATUS, SUCCESS_STATUS } from '../constants'

const initialState = {
  requestStatus: SUCCESS_STATUS
}

export function commonReducer(state = initialState, action) {
  switch (action.type) {
    case PENDING: 
      return {
        ...state,
        requestStatus: PENDING_STATUS
      }
    case SUCCESS: 
      return {
        ...state,
        requestStatus: SUCCESS_STATUS
      }
    case FAILED: 
      return {
        ...state,
        requestStatus: FAILED_STATUS
      }
    default:
      return state
  }
}