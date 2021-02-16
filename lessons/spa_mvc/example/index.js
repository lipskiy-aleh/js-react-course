import { renderWeek } from './view/week.js'
import { Week } from './model/Week.js'
import { createHandler } from './controller/root.js'



function renderApp(data, container) {
  const html = renderWeek(data)

  container.innerHTML = html
}



function initApp() {
  const container = document.getElementById('root')
  const data = new Week()

  renderApp(data, container)
  createHandler(container, data, renderApp)
}
initApp()