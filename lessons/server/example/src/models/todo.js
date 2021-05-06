
const mockData = [
  { id: 1, status: 'new', text: '1'},
  { id: 2, status: 'new', text: '2'},
  { id: 3, status: 'new', text: '3'},
]

const todoModelKey = 'todos'

class TodoModel {
  constructor() {
    this.data = mockData
  }

  get() {
    return this.data
  }

  create(newTodo) {
    return this.data.push(newTodo)
  }

  getById(idToFind) {
    return this.data.find(({id}) => id === idToFind )
  }
}


module.exports = {
  TodoModel,
  todoModelKey,
}