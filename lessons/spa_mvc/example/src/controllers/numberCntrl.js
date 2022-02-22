import { state } from '../state.js'

export const numberCntrlClick = (e) => {
  const number = e.target.dataset.number

  state.concatNumber(number)
  window.render(state.getRenderData())
}