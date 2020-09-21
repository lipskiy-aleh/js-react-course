import renderTodo from './renderTodo.js'

export default function renderTodoList(todoList) {
  const el = document.createElement('ul')
  todoList.list.forEach(todo => {
    const child = renderTodo(todo)
    el.appendChild(child)
  })
  return el
}
