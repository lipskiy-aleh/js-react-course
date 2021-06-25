	
import { SHOW_ALL } from './actions'
 
const initialState = {
  visibilityFilter: SHOW_ALL,
  todos: []
}
 
function todoApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState
  }
 
  // For now, don't handle any actions
  // and just return the state given to us.
  return state
}
 
// or just use ES6 default argument syntax
 
function todoApp(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TODO':
        // error
        // state.todos.push(action.payload)
        // return state
        // correct
        return {
          ...state,
          todos: [...state.todos, action.payload]
        }
      default:
        return state
  }
}

store.dispatch(addTodoAction(text))

function addTodoAction(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      status: 'NEW',
      text
    }
  }
}
