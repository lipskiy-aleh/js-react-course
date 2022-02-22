import { renderApp } from './views/app.js'
import { initEventListeners } from './controllers/rootCntrl.js'
import { state } from './state.js'

function render(state) {
  const container = document.getElementById('root')

  const content = renderApp(state)

  container.innerHTML = content
}

function startApp() {
  const container = document.getElementById('root')

  window.render = render

  render(state.getRenderData())
  initEventListeners(container)
}

startApp()