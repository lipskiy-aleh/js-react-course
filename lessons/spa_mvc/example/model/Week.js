import { Day } from './Day.js'

const nameDay = ['Monday', 'Tuesday', 'Wednesday','Thursday', 'Friday', 'Saturday', 'Sunday']

export class Week {
  constructor() {
    this.week = this.initWeek()
  }

  initWeek() {
    const week = nameDay.map(name => {
      const day = new Day(name)
      return day
    })
    return week
  }

  setTodo(id, todo) {
    const day = this.week.find((day) => day.id === Number(id))
    day.setTodo(todo)
  }
}