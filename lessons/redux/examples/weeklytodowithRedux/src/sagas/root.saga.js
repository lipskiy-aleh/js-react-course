import { fork } from 'redux-saga/effects'
import { todoSaga } from './todo.saga'

export function* rootSaga() {
  yield fork(todoSaga)
  // yield fork(userSaga)
}