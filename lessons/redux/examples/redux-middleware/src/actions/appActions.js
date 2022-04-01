
const MODULE_NAME = 'APP'

export const START_FETCH = `${MODULE_NAME}/START_FETCH`
export const STOP_FETCH = `${MODULE_NAME}/STOP_FETCH`

export function startFetchAction() {
  return {
    type: START_FETCH
  }
}

export function stopFetchAction() {
  return {
    type: STOP_FETCH
  }
}