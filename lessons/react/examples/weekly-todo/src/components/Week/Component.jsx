import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { Day } from '../Day'
import { weekModel } from '../../models/week.model'

export class Week extends React.Component {
  static propTypes = {
    week: weekModel,
    onAddTodo: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const { weekData, onAddTodo } = this.props
    console.log('Render week')
    return (
      <div className="week">
        {weekData.map(({ dayName, date, todos }) => (
          <Day
            key={date}
            date={date}
            dayName={dayName}
            todos={todos}
            onAddTodo={onAddTodo}
          />
        ))}
      </div>
    )
  }
}