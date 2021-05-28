import { renderApp } from './view/app.view.js'
import { AppModel } from './model/app.model.js'
import { initRootController } from './controller/app.controller.js'

const ROOT_ID = 'root'

function initApp() {
  const node = document.getElementById(ROOT_ID);

  const todoList = window.localStorage.getItem('todoList') ? JSON.parse(window.localStorage.getItem('todoList')) : []
  const rootData = new AppModel({ todoList })

  window.render = function(data) {
    const html = renderApp(data)
    node.innerHTML = html
  }

  window.getAppData = function() {
    return rootData
  }

  window.render(rootData)
  initRootController(node)
}

initApp()

window.onbeforeunload = () => {
  const data = window.getAppData()
  window.localStorage.setItem('todoList', JSON.stringify(data.todoList))
}