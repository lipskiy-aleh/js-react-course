import render from '../engine/render.js'
import { get } from '../engine/state.js'
import renderApp from '../view/renderApp.js'

export default function backBtnController() {
  const todos = get('todos')

  render(renderApp('list', todos))
}