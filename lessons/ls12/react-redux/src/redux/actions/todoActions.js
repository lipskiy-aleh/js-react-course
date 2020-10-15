
export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

export function addTodoAction(text) {
  const newTodo = {
    id: new Date().getTime(),
    done: false,
    title: text
  }

  return {
    type: ADD_TODO,
    payload: newTodo
  }
}

export function toggleTodoAction(id, todos) {
  return {
    type: TOGGLE_TODO,
    payload: todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo)
  }
}