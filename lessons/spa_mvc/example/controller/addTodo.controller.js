
export function addTodoCtrl(e) {
  const day = e.target.dataset.day
  const input = document.getElementById(day)
  const text = input.value

  if(!text) {
    return
  }

  const appData = window.getAppData()
  appData.setTodo(day, text)

  window.render(appData)
}