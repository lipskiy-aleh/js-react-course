export const MODULE_NAME = 'todos'

export const ADD_TODO = `${MODULE_NAME}/addTodo`

export function addTodoAction(date, text) {
  return {
    type: ADD_TODO,
    payload: {
      status: 'new',
      date,
      text
    }
  }
}