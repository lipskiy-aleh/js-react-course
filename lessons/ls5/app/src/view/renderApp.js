import renderPageTodo from './renderPageTodo.js'
import renderPageTodoList from './renderPageTodoList.js'

import render from '../engine/render.js'
import state from '../engine/state.js'

function renderNotFound() {
  const el = document.createElement('div')
  el.innerText = 'Not found'
  return el
}

function renderApp() {
  const pageId = state.get('pageId')

  let content
  switch (pageId) {
    case 'list':
      content = renderPageTodoList()
      break
    case 'current':
      content = renderPageTodo()
      break
    default:
      content = renderNotFound()
  }

  render(content)
}

export default renderApp