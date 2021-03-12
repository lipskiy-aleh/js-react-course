import { render as renderDay } from './day.js'

export function render(data) {
  return `
    <div class="week">
      ${data.day.map(renderDay).join('')}
    </div>
  `
}