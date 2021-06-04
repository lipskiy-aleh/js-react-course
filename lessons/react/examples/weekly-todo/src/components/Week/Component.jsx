import React from 'react'
import './style.css'
import { Day } from '../Day'

import { days } from '../../constants'

export class Week extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  render() {
    const { weekData, onAddTodo } = this.props
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