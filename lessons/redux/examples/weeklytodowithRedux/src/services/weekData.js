
export function generateWeekData() {
  const week = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ]

  return week.map(dayName => ({
    name: dayName,
    todo: [],
  }))
}