import { numberCntrlClick } from './numberCntrl.js'
import { operationCntrlClick } from './operationCntrl.js'

export const rootCntrl = (e) => {
  if (e.target.classList.contains('number')) {
    numberCntrlClick(e)
  } else if (e.target.classList.contains('operation')) {
    operationCntrlClick(e)
  } else {
    console.log('Root', e)
  }
}

export const initEventListeners = (container) => {
  container.addEventListener('click', rootCntrl)
}