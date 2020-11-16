
export default function renderTodo({name, description, id}) {
  const el = document.createElement('li')

  const button = document.createElement('button')
  button.className = 'todo-list-btn'
  button.innerText = name
  button.dataset.id = id

  el.appendChild(button)
  return el
}