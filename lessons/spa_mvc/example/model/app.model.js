
import { NEW_STATUS } from '../constant.js'

export class AppModel {
  constructor({ todoList }) {
    this.todoList = todoList || []
    this.startWeekDay = new Date('2021-05-24T03:00:00').toISOString();
  }

  setTodo(day, text) {
    const todo = {
      day,
      text,
      status: NEW_STATUS
    }

    this.todoList.push(todo)
  }
}