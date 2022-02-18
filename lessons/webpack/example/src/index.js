import { renderTodo } from './todo.js'
import { renderTodo2 } from './todo2.js'

const root = document.getElementById('root')
root.innerHTML = renderTodo() + renderTodo2()