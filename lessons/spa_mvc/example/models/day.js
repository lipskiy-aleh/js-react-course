import { Todo } from './todo.js'

export class Day {
  constructor(number) {
    this.number = number;

    this.todos = [];
  }

  addTodo() {
    this.todos.push(new Todo())
  }
}