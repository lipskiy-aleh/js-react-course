
export function addTodo(e, data, renderApp) {
  const id = e.target.dataset.id

  const input = Array.prototype.find.call(
    document.getElementsByClassName('add_todo_input'),
    function(el){
      return el.dataset.id === id
    }
  )

  const todoValue = input.value


  data.setTodo(id, todoValue)
  renderApp(data)
}
