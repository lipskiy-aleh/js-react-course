
let count = 0

export class Day {
  constructor(name) {
    // generate unique id
    this.id = new Date().getTime() + count
    count++
    
    this.name = name
    this.todos = []
  }

  setTodo(todo) {
    this.todos.push({
      description: todo
    })
  }
}
