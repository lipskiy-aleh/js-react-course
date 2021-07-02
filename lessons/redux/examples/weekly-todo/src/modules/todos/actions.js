import { startRequest, finishRequest } from '../../actions/common'

export const MODULE_NAME = 'todos'

export const ADD_TODO = `${MODULE_NAME}/addTodo`
export const SET_TODOS = `${MODULE_NAME}/setTodos`
export const FETCH_TODOS = `${MODULE_NAME}/fetchTodos`

export function fetchTodosAction() {
  return {
    type: FETCH_TODOS,
  }
  // return async function(dispatch) {
  //   dispatch(startRequest())
  //   const res = await new Promise(async (res,rej) => {
  //     const result  = await fetch('http://demo6226555.mockable.io/todos')
  //     setTimeout(() => res(result),10000)
  //   })

  //   if(!res.ok) {
  //     dispatch(finishRequest(true))
  //     return
  //   }

  //   const data = await res.json()
  //   dispatch(setTodosAction(data))
  //   dispatch(finishRequest())
  // }
}

export function setTodosAction(todos) {
  return {
    type: SET_TODOS,
    payload: todos,
  }
}

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