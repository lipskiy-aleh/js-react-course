
import TodoList from './models/TodoList.js'
import Todo from './models/Todo.js'

import renderApp from './view/renderApp.js'

import rootController from './controllers/rootController.js'

import state from './engine/state.js'
import { init } from './engine/render.js'
const rootEl = document.getElementById('root')
init(rootEl, rootController)

function addContent() {
  const todoList = new TodoList()

  const arr = [{
    id: 'todo1',
    name: 'todo 1',
    description: '1',
  }, {
    id: 'todo2',
    name: 'todo 2',
    description: '2',
  },{
    id: 'todo3',
    name: 'todo 3',
    description: '3',
  }, {
    id: 'todo4',
    name: 'todo 4',
    description: '4',
  }]

  arr.forEach(({name, description, id}) => {
    const todo = new Todo(name, description, id)
    todoList.add(todo)
  })

  state.set('list', todoList)
}

function initApp() {
  addContent()

  state.set('pageId', 'list')
  state.subscribe(renderApp)

  // state.set() => renderApp()
  // Init render
  renderApp()
}

initApp()