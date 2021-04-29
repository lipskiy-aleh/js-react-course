
import { Day } from './day.js'

function calculateDayNumber(weekNumber, index) {
  return (weekNumber - 1) * 7 + index + 1
}

export class Week {
  constructor(weekNumber) {
    this.day = []

    for (let i = 0; i < 7; i++) {
      const dayNumber = calculateDayNumber(weekNumber, i)
      this.day.push(new Day(dayNumber))
    }
  }
}