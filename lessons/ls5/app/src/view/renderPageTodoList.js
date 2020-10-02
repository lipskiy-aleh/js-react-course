import renderTodoList from './renderTodoList.js'

import state from '../engine/state.js'

export default function renderPageTodoList() {
  const todoList = state.get('list')

  const el = document.createElement('div')

  el.appendChild(renderTodoList(todoList))

  return el
}