import { fork } from 'redux-saga/effects'
import { rootUsersSaga } from './usersSaga'

export function* rootSaga() {
  yield fork(rootUsersSaga)
}