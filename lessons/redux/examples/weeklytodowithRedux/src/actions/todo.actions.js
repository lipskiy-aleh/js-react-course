import { NEW_TODO_STATUS, DONE_TODO_STATUS } from '../constants'
import { store } from '../store'

const MODULE_NAME = 'todo'

export const ADD_TODO = `${MODULE_NAME}/ADD_TODO`
export const COMPLETE_TODO = `${MODULE_NAME}/COMPLETE_TODO`

export function addTodo(dayName, todoText) {
  // TODO: refactoring
  const week = store.getState().todo.week
  //

  const newWeek = week.map((data) => {
    if (data.name !== dayName) {
      return data
    }

    return ({
      name: data.name,
      todo: [...data.todo, {
        id: new Date().getTime(),
        status: NEW_TODO_STATUS,
        text: todoText,
      }]
    })
  })

  return {
    type: ADD_TODO,
    payload: newWeek,
  }
}

export function completeTodo(dayName, todoId, status) {
  // TODO: refactoring
  const week = store.getState().todo.week
  //
  const newWeek = week.map((data) => {
    if (data.name !== dayName) {
      return data
    }

    return ({
      name: data.name,
      todo: data.todo.map((todo) => {
        if (todo.id !== todoId) {
          return todo
        }

        return {
          ...todo,
          status: status === NEW_TODO_STATUS ? DONE_TODO_STATUS : NEW_TODO_STATUS,
        }
      })
    })
  })

  return {
    type: COMPLETE_TODO,
    payload: newWeek,
  }
}