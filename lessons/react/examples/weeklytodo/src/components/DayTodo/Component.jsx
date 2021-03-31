import React from 'react'
import PropTypes from 'prop-types'
import { DONE_TODO_STATUS, NEW_TODO_STATUS } from '../../constants'
import { withCreationTime } from '../../hocs/withCreationTime'
import { AddTodo } from '../AddTodo'
import './style.css'

// class Todo {
//   constructor(todoText) {
//     this.id = new Date().getTime();
//     this.status = NEW_TODO_STATUS;
//     this.text = todoText;
//   }
// }

// todo = [new Todo(''), ....]
// todo: PropsTypes.arrayOf(PropsTypes.instanceOf(Todo))

class DayTodoCmp extends React.PureComponent {
  static propTypes = {
    name: PropTypes.string.isRequired,
    todo: PropTypes.arrayOf(
      PropTypes.exact({
        text: PropTypes.string,
        id: PropTypes.number,
        status: PropTypes.oneOf([DONE_TODO_STATUS, NEW_TODO_STATUS]),
      })
    ),
    onTodoClick: PropTypes.func,
    focusInput: PropTypes.bool,
  }

  static defaultProps = {
    todo: [],
    focusInput: false,
    onTodoClick: () => {},
  }

  onAddTodo = (todo) => {
    const { name, onAddTodo } = this.props
    onAddTodo(name, todo)
  }

  render() {
    const { name, todo, onTodoClick, focusInput } = this.props

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
          focusInput={focusInput}
        />
      </div>
    )
  }
}

export const DayTodo = withCreationTime(DayTodoCmp)