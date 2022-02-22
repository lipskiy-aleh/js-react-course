import { state } from '../state.js'

export const operationCntrlClick = (e) => {
  const operation = e.target.dataset.operation

  state.makeOperation(operation)
  window.render(state.getRenderData())
}