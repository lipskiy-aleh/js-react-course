import state from '../engine/state.js'

export default function backBtnController() {
  state.set('pageId', 'list')
  state.set('current', null)
}