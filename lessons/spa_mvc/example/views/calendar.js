import { render as renderWeek } from './week.js'

export function render(data) {
  return `
    <div class="calendar">
      ${data.week.map((week) => renderWeek(week)).join('')}
    </div>
  `
}