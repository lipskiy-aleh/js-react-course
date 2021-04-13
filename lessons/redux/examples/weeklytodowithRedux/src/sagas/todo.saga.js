import { takeEvery, call, put, select } from 'redux-saga/effects'
import { NEW_TODO_STATUS, DONE_TODO_STATUS } from '../constants'
import { startFetching, finishFetching } from '../actions/common.actions'
import { ADD_TODO, COMPLETE_TODO, setWeek } from '../actions/todo.actions'
import { getWeekTodo } from '../selectors/todo.selectors'

// JUST EXAMPLE
const asyncCreation = (text) => new Promise((res, rej) => {
  console.log('Text from async function ', text)
  setTimeout(res, 1000)
})
//

function* addTodoSaga({ payload }) {
  const { dayName, todoText } = payload
  yield put(startFetching())
  yield call(asyncCreation, 'Test text')

  const week = yield select(getWeekTodo)

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

  yield put(setWeek(newWeek))
  yield put(finishFetching())
}

function* competeTodoSaga({ payload }) {
  const { dayName, todoId, status } = payload
  const week = yield select(getWeekTodo)

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

  yield put(setWeek(newWeek))
}

export function* todoSaga() {
  yield takeEvery(ADD_TODO, addTodoSaga)
  yield takeEvery(COMPLETE_TODO, competeTodoSaga)
}