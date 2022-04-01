import { takeEvery, call, put, delay, select } from 'redux-saga/effects'
import { FETCH_USERS, setUsersAction } from '../actions/usersActions'
import { startFetchAction, stopFetchAction } from '../actions/appActions'
import { getUsersList } from '../selectors/usersSelectors'

async function getUsers() {
  const res = await fetch('http://demo6226555.mockable.io/users')
  const data = await res.json()
  return data
}

function* fetchUsers() {
  const usersOld = yield select(getUsersList)
  yield call(console.log, 'HERE', usersOld)

  yield put(startFetchAction())
  const users = yield call(getUsers)
  yield put(setUsersAction(users))
  yield delay(1000)
  yield put(stopFetchAction())
}

export function* rootUsersSaga() {
  yield takeEvery(FETCH_USERS, fetchUsers)
}