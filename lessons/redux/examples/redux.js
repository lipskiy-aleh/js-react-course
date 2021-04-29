const ADD_TODO = 'ADD_TODO'

const action = {
  type: ADD_TODO,
  payload: {
    description: '',
  }
}

store.dispatch(action)

function addTodoAction(description) {
  return {
    type: ADD_TODO,
    payload: {
      id: generateUID(),
      description,
    }
  }
}

store.dispatch(addTodoAction('hello world TODO'))


const initialState = {
  list: []
}

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO :
      const newTodo = action.payload
      return {
        ...state,
        list: [...state.todos, newTodo],
      }
    default:
      return state
  }
}

const initialStateUser = { isLogged: false }
function userReducer(state = initialStateUser, action) {
  switch (action.type) {
    default:
      return state
  }
}



const reducers = Redux.combineReducers({
  user: userReducer,
  todo: todoReducer,
})

const store = Redux.createStore(reducers)

const state = store.getState()

// state - isEqual to -  
// {
//   user: {
//     isLogged: false
//   },
//   todo: {
//     list: []
//   }
// }

const list = state.todo.list