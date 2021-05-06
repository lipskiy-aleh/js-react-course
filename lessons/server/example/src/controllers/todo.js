const models = require('../models')
const { todoModelKey } = require('../models/todo')

class Todos {
  constructor(models) {
    this.models = models
  }

  get() {
    return this.models[todoModelKey].get()
  }

  create({text}) {
    const newTodo = {
      id: Number(new Date().getTime()),
      status: 'new',
      text
    }

    this.models[todoModelKey].create(newTodo)

    return newTodo
  }

  getById(idToFind) {
    return this.models[todoModelKey].getById(idToFind)
  }
}

const todos = new Todos(models)

module.exports = todos