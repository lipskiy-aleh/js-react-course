import { renderWeek } from './week.view.js'

const dayNames = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
]

function formatWeekData(todoList, startWeekDay) {
  const arr = dayNames.map((name, index) => {
    const date = new Date(startWeekDay)
    date.setDate(date.getDate() + index)
    const dateStr = date.toISOString()

    const todos = todoList.filter(({day}) => day === dateStr)
    return ({
      day: dateStr,
      name,
      todos,
    })
  })

  return arr
}

export function renderApp(data) {
  const week = formatWeekData(data.todoList, data.startWeekDay);

  return `
    <div class="app">
      ${renderWeek(week)}
    </div> 
  `
}