import { render as calendarRender } from './calendar.js'

export function renderApp(data) {
  const html = (`
    <div class="app">
      ${calendarRender(data)}
    </div>
  `)

  const el = document.getElementById('root')
  el.innerHTML = html
}