const { TodoModel, todoModelKey } = require('./todo')

const connections = {
  [todoModelKey]: new TodoModel()
}

module.exports = connections