
export default class TodoList{
  constructor() {
    this.list = []
  }

  add(todo) {
    this.list.push(todo)
  }

  findById(idToFind) {
    return this.list.find(({id}) => id === idToFind)
  }
}
