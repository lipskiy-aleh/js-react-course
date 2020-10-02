import state from '../engine/state.js'

export default function todoItemClick(e) {
  const idToFind = e.target.dataset.id

  const todos = state.get('list')
  const todo = todos.findById(idToFind)

  state.set('current', todo)
  state.set('pageId', 'current')
}