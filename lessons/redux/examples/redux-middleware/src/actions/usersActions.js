import { startFetchAction, stopFetchAction } from './appActions'

const MODULE_NAME = 'USERS'

export const FETCH_USERS = `${MODULE_NAME}/FETCH_USERS`
export const SET_USERS = `${MODULE_NAME}/SET_USERS`

export function setUsersAction(users) {
  return ({
    type: SET_USERS,
    payload: users
  })
}

export function fetchUsersAction() {
  return ({
    type: FETCH_USERS
  })
  // return async (dispatch) => {
  //   dispatch(startFetchAction())
  //   const res = await fetch('http://demo6226555.mockable.io/users')
  //   const data = await res.json()

  //   await new Promise((res) => {
  //     setTimeout(() => { res() }, 10000)
  //   })

  //   dispatch(setUsersAction(data))
  //   dispatch(stopFetchAction())
  // }
}