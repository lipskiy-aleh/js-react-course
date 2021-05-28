import { addTodoCtrl } from './addTodo.controller.js'

function rootClickCtrl(e) {
  if(e.target.classList.contains('add_todo_btn')) {
    addTodoCtrl(e)
  }
}

export function initRootController(rootCmp) {
  rootCmp.addEventListener('click', rootClickCtrl)
}