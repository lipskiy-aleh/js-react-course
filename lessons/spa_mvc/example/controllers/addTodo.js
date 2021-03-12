
export function addTodo(e) {
  const dayKey = e.target.dataset.day_index

  const appData = window.getAppData()
  appData.addTodoToDay(dayKey)

  window.renderApp(appData)
}