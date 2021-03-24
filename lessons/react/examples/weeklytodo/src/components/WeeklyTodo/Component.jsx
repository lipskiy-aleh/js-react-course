import React from 'react'
import './style.css'
import { DayTodo } from '../DayTodo'
import { NEW_TODO_STATUS, DONE_TODO_STATUS } from '../../constants'

function getInitWeekData() {
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

// todo = {
//   id: '',
//   status: '', DONE, NEW
//   text: ''
// }

export class WeeklyTodo extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      weekData: getInitWeekData()
    }
  }

  onAddTodo = (dayName, todoText) => {
    const newWeek = this.state.weekData.map((data) => {
      if (data.name !== dayName) {
        return data
      }

      return ({
        name: data.name,
        todo: [...data.todo, {
          id: new Date().getTime(),
          status: NEW_TODO_STATUS,
          text: todoText,
        }]
      })
    })

    this.setState({ weekData: newWeek })
  }

  onTodoClick = (dayName, todoId) => {
    const newWeek = this.state.weekData.map((data) => {
      if (data.name !== dayName) {
        return data
      }

      return ({
        name: data.name,
        todo: data.todo.map((todo) => {
          if(todo.id !== todoId) {
            return todo
          }

          return {
            ...todo,
            status: DONE_TODO_STATUS,
          }
        })
      })
    })

    this.setState({ weekData: newWeek })
  }

  render() {
    return (
      <div className="weekly_todo">
        {this.state.weekData.map(({ name, todo }) => (
          <DayTodo
            key={name}
            name={name}
            todo={todo}
            onAddTodo={this.onAddTodo}
            onTodoClick={this.onTodoClick}
            focusInput={name === 'Monday'}
          />
        ))}
      </div>
    );
  }
}
