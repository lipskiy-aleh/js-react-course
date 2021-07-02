import { takeLatest, call, put, fork } from 'redux-saga/effects'

import { FETCH_TODOS, setTodosAction } from './actions'

import { finishRequest, startRequest } from '../../actions/common'

function* fetchTodosSaga() {
  yield put(startRequest())
  const res = yield call(async () => (
    await new Promise(async (res, rej) => {
      const result = await fetch('http://demo6226555.mockable.io/todos')
      setTimeout(() => res(result), 1000)
    }))
  )

  yield fork(async () => (
    await new Promise(async (res, rej) => {
      setTimeout(() => res(), 10000)
    }))
  )

  if(!res.ok) {
    yield put(finishRequest(true))
    return
  }

  const data = yield call(async() => await res.json())
  yield put(setTodosAction(data))
  yield put(finishRequest())
}

export function* rootTodosSaga() {
  yield takeLatest(FETCH_TODOS, fetchTodosSaga)
}