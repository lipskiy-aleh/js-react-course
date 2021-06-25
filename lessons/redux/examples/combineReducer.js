
const initialTodosState = {
  list: []
}

function todosReducer(state = initialTodosState, action) {
  switch (action.type) {
    default:
      return state
  }
}

const initialAuthState = {
  user: {},
  isLogged: false
}

function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    default:
      return state
  }
}

function rootReducer(state, action) {
  return {
    auth: authReducer(state.auth, action),
    todos: todosReducer(state.todos, action),
  }
}

const rootReducer = Redux.combineReducers({
  auth: authReducer,
  todos: todosReducer
})


const store = Redux.createStore(rootReducer)