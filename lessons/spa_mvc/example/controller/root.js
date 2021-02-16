import { addTodo } from './addTodo.js'

export function createHandler(container, data, renderApp) {
  function render(data) {
    renderApp(container, data)
  }

  function rootHandler(e) {
    if(e.target.className.includes('add_todo_btn')) {
      addTodo(e, data, render)
    }
  }

  container.addEventListener('click', rootHandler)
}