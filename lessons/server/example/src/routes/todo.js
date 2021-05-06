const todos = require('../controllers/todo')
const express = require('express')
const todoRouter = express.Router()

todoRouter.get('/', (request, response) => {
  const data = todos.get()
  response.send(data)
})

todoRouter.post('/', (request, response) => {
  const newTodo = todos.create(request.body)

  response.send(newTodo)
})

todoRouter.get('/:id', (request, response) => {
  const todoId = Number(request.params.id)

  if(!todoId || isNaN(todoId)) {
    response.status(400).send({ error: 'id should be a number' })
    return
  }

  const todo = todos.getById(todoId)

  if(!todo) {
    response.status(404).send({ error: 'todo not found' })
    return
  }

  response.send(todo)
})

module.exports = todoRouter