import todoItemClick from './todoItemClick.js'
import backBtnController from './backBtnController.js'

const todoBtnClass = 'todo-list-btn'
const backBtnClass = 'todo-pg-back-btn'

export default function rootController(e) {
  if(e.target.classList.contains(todoBtnClass)) {
    todoItemClick(e)
  } else if(e.target.classList.contains(backBtnClass)) {
    backBtnController(e)
  }
}