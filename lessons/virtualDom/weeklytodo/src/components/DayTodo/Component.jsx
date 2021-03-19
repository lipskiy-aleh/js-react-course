import React from 'react'
import { DONE_TODO_STATUS } from '../../constants'
import { AddTodo } from '../AddTodo'
import './style.css'

export class DayTodo extends React.Component {
  onAddTodo = (todo) => {
    const { name, onAddTodo } = this.props
    onAddTodo(name, todo)
  }

  render() {
    const { name, todo, onTodoClick } = this.props

    return (
      <div className="day_todo">
        <div>
          <h3>{name}</h3>
          <ul className="day_todo__content">
            {todo.map(({ text, id, status }) => (
              <li
                key={id}
                onClick={() => onTodoClick(name, id)}
                className={status === DONE_TODO_STATUS ? 'done_todo' : ''}
              >{text}</li>
            ))}
          </ul>
        </div>
        <AddTodo
          onAdd={this.onAddTodo}
        />
      </div>
    )
  }
}