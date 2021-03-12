import { Week } from "./week.js"

export class Calendar {
  constructor() {
    this.week = []

    for (let i = 0; i < 4; i++) {
      this.week.push(new Week(i + 1))
    }
  }

  getDayPath(dayKey) {
    // FIXME: bug with calculation index of last day in week
    const dayIndex = dayKey % 7
    const weekIndex = (dayKey - dayIndex)/7
    return [weekIndex, dayIndex - 1]
  }

  addTodoToDay(dayKey) {
    const [weekIndex, dayIndex] = this.getDayPath(dayKey)
    const day = this.week[weekIndex].day[dayIndex]
    day.addTodo()
  }
}