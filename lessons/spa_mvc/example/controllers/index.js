import { addTodo } from './addTodo.js'

function rootClickHandler(e) {
  if(e.target.classList.contains('addTodoBtn')) {
    addTodo(e)
  }
}

export function initRootController() {
  const el = document.getElementById('root')

  el.addEventListener('click', rootClickHandler)
}