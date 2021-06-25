import moment from "moment"
import { days } from '../../constants'

export const getTodosState = (state) => state.todos

export const getTodosList = (state) => getTodosState(state).list

export const getWeekData = (state, startDate) => {
  const todos = getTodosList(state)

  return (
    days.map((day, index) => {
      const dateCurrent = moment(startDate, 'DD-MM-YYYY').add(index, 'days').format('DD-MM-YYYY')
      return ({
        dayName: day,
        todos: todos.filter(({ date }) => date === dateCurrent),
        date: dateCurrent,
      })
    })
  )
}