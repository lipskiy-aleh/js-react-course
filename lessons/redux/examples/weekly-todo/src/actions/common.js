export const MODULE_NAME = 'common'

export const PENDING = `${MODULE_NAME}/pending`
export const SUCCESS = `${MODULE_NAME}/success`
export const FAILED = `${MODULE_NAME}/failed`

export function startRequest() {
  return {
    type: PENDING,
  }
}

export function finishRequest(error) {
  return {
    type: error ? FAILED : SUCCESS,
  }
}