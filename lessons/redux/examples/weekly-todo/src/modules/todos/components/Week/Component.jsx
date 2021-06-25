import React from 'react'
import PropTypes from 'prop-types'
import './style.css'
import { Day } from '../Day'
import { weekModel } from '../../models/week.model'

import { List } from 'antd'

const LIST_GRID = {
  gutter: 16,
  xs: 1,
  sm: 2,
  md: 4,
  lg: 4,
  xl: 7,
  xxl: 3,
}

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

    return (
      <List
        grid={LIST_GRID}
        dataSource={weekData}
        renderItem={({ dayName, date, todos }) => (
          <List.Item>
            {/* <Card title={item.title}>Card content</Card> */}
            <Day
              key={date}
              date={date}
              dayName={dayName}
              todos={todos}
              onAddTodo={onAddTodo}
            />
          </List.Item>
        )}
      />
      // <div className="week">
      //   {weekData.map(({ dayName, date, todos }) => (
          // <Day
          //   key={date}
          //   date={date}
          //   dayName={dayName}
          //   todos={todos}
          //   onAddTodo={onAddTodo}
          // />
      //   ))}
      // </div>
    )
  }
}