import React from 'react'
import './style.css'
import { AddTodo } from '../AddTodo'

export class Day extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
    }
  }

  onAddTodo = (text) => {
    this.props.onAddTodo(this.props.date, text)
  }

  render() {
    const { dayName, date, todos } = this.props

    return (
      <div className="day">
        <div>
          <h3>{dayName}</h3>
          <h4>{date}</h4>
          <div>
            <ul>
              {todos.map((todo) => (<li key={todo.text}>{todo.text}</li>))}
            </ul>
          </div>
        </div>
        <AddTodo onAddTodo={this.onAddTodo}/>
      </div>
    )
  }
}