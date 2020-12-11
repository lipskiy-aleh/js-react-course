import { renderDay } from './day.js'

export function renderWeek(data) {
  return `
    <ul class="week">
      ${data.week.map(renderDay).join('')}
    </ul>
  `
}