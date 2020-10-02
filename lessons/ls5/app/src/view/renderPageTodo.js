import state from '../engine/state.js'

export default function renderPageTodo() {
  // GET DATA
  const todo = state.get('current')

  // CREATE HTML
  const el = document.createElement('div')

  const name = document.createElement('div')
  // let text = document.createTextNode(todo.name)
  // name.appendChild(text)
  name.innerText = todo.name
  const description = document.createElement('div')
  let text = document.createTextNode(todo.description)
  description.appendChild(text)


  const btn = document.createElement('button')
  btn.innerText = 'Back'
  btn.className = 'todo-pg-back-btn'


  el.appendChild(name)
  el.appendChild(description)
  el.appendChild(btn)

  return el
}