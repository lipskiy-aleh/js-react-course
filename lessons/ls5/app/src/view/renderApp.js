import renderPageTodo from './renderPageTodo.js'
import renderPageTodoList from './renderPageTodoList.js'

function renderNotFound() {
  const el = document.createElement('div')
  el.innerText = 'Not found'
  return el
}

function renderApp(pageId, state) {
  switch (pageId) {
    case 'list':
      return renderPageTodoList(state)
    case 'current':
      return renderPageTodo(state)
    default:
      return renderNotFound()
  }
}

export default renderApp