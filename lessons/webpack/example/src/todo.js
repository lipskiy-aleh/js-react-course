import './todo.css'
import img from './circle.png'
import { test } from 'utils/test'

test()

export function renderTodo() {
  return `
    <div class="todo">
      Hello world test hot module
      <img src="${img}" alt="">
    </div>
  `
}

