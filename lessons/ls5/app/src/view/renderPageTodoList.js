import renderTodoList from './renderTodoList.js'

export default function renderPageTodoList(todoList) {
  const el = document.createElement('div')

  el.appendChild(renderTodoList(todoList))

  return el
}