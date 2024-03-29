import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { Week } from './Week'
import { days } from '../../../constants'
import moment from 'moment'
import { WeeklyTodoContext } from '../contexts/WeeklyTodoContext'
import { todosModel } from '../models/todo.model'

class WeekTodosCmp extends React.Component {
  static propTypes = {
    todos: todosModel,
    startDate: PropTypes.string.isRequired,
    onAddTodo: PropTypes.func.isRequired,
  }

  static defaultProps = {
    todos: []
  }

  constructor(props) {
    super(props)

    this.state = {
      week: this.getWeekData(props.todos, props.startDate),
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.todos !== this.props.todos ||
      prevProps.startDate !== this.props.startDate
    ) {
      this.setState({
        week: this.getWeekData(this.props.todos, this.props.startDate)
      })
    }
  }

  getWeekData = (todos, startDate) => {
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

  render() {
    const { week } = this.state
    const { onAddTodo } = this.props

    return (
      <WeeklyTodoContext.Provider value={{ data: 'text' }}>
        <div className="weeklyTodo">
          <Week weekData={week} onAddTodo={onAddTodo} />
        </div>
      </WeeklyTodoContext.Provider>
    )
  }
}

export const WeekTodos = withRouter(WeekTodosCmp)