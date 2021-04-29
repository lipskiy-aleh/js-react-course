const MODULE_NAME = 'todo'

export const ADD_TODO = `${MODULE_NAME}/ADD_TODO`
export const COMPLETE_TODO = `${MODULE_NAME}/COMPLETE_TODO`
export const SET_WEEK = `${MODULE_NAME}/SET_WEEK`

export function setWeek(newWeek) {
  return {
    type: SET_WEEK,
    payload: newWeek,
  }
}

// export const addTodo = actionCreate(ADD_TODO)
export function addTodo(dayName, todoText) {
  return {
    type: ADD_TODO,
    payload: {
      dayName,
      todoText
    },
  }
}

export function completeTodo(dayName, todoId, status) {
  return {
    type: COMPLETE_TODO,
    payload: {
      dayName,
      todoId,
      status
    }
  }
}