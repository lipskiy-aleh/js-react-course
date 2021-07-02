import { fork } from 'redux-saga/effects'

import { saga as todosSaga } from '../modules/todos'

export function* rootSaga() {
  yield fork(todosSaga)
}