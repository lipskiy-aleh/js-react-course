import React, { createRef } from 'react'
import './style.css'
import { AddTodo } from '../AddTodo'
import { MONDAY } from '../../../../constants'
import { Card, Tooltip } from 'antd'
// import { WeeklyTodoContext } from '../WeeklyTodo/WeeklyTodoContext'


export class Day extends React.PureComponent {
  // static contextType = WeeklyTodoContext;
  constructor(props) {
    super(props)

    this.state = {
    }

    this.addTodoCmpRef = createRef()
  }

  // componentDidMount() {
  //   if(this.props.dayName === MONDAY) {
  //     this.addTodoCmpRef.current.setFocus()
  //   }
  // }

  onAddTodo = (text) => {
    this.props.onAddTodo(this.props.date, text)
  }

  render() {
    const { dayName, date, todos } = this.props

    return (
      <Card
        title={
          <Tooltip title={date}>
            <h3>
              {dayName}
            </h3>
          </Tooltip>
        }
        actions={[
          <AddTodo
            onAddTodo={this.onAddTodo}
            setDefaultFocus={dayName === MONDAY}
            todosNumber={todos.length}
          />
        ]}
      >
        <div>
          <ul>
            {todos.map((todo) => (<li key={todo.text}>{todo.text}</li>))}
          </ul>
        </div>
      </Card>
    )
  }
}