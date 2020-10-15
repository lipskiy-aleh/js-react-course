
export const CHANGE_FILTER = 'CHANGE_FILTER'

export function changeFilterAction(filterType) {
  return {
    type: CHANGE_FILTER,
    payload: filterType
  }
}