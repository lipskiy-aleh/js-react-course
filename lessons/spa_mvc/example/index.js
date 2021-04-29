import { renderApp } from './views/index.js'
import { Calendar } from './models/calendar.js'
import { initRootController } from './controllers/index.js'

function initApplication() {
  // 1 - init data
  const appData = new Calendar();

  // 3 - add global functions
  window.getAppData = function() {
    return appData
  }
  window.renderApp = renderApp

  // 2 - render application
  renderApp(appData);

  // 4 -  init controllers
  initRootController()
}

initApplication()
