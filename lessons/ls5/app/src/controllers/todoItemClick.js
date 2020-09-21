import render from '../engine/render.js'
import { get } from '../engine/state.js'
import renderApp from '../view/renderApp.js'

export default function todoItemClick(e) {
  const idToFind = e.target.dataset.id
  const todos = get('todos')
  const todo = todos.findById(idToFind)

  render(renderApp('current', todo))
}