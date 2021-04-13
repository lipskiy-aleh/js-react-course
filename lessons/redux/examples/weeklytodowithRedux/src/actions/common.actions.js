
const MODULE_NAME = 'common'

export const START_FETCHING = `${MODULE_NAME}/START_FETCHING`
export const FINISH_FETCHING = `${MODULE_NAME}/FINISH_FETCHING`

export function startFetching() {
  return {
    type: START_FETCHING
  }
}

export function finishFetching() {
  return {
    type: FINISH_FETCHING
  }
}