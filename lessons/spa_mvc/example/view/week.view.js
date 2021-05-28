import { renderDay } from './day.view.js'

export function renderWeek(week) {
  return `
    <ul class="week">
      ${week.map((day) => renderDay(day)).join('')}
    </ul>
  `
}