import React from 'react'
import PropTypes from 'prop-types'
import { DONE_TODO_STATUS, NEW_TODO_STATUS } from '../../constants'
import { AddTodo } from '../AddTodo'
import { StyledCard, CardContent, TodoCheckbox } from './styled'
import { List } from 'antd'
import { addTodo, completeTodo } from '../../actions/todo.actions'
import { connect } from 'react-redux'

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
    const { name, onAddTodoRedux } = this.props
    onAddTodoRedux(name, todo)
  }

  render() {
    const { name, todo, onTodoClick, focusInput } = this.props

    return (
      <StyledCard
        title={name}
      >
        <CardContent>
            <List
              dataSource={todo}
              renderItem={({ text, id, status }) => (
                <List.Item
                  key={id}
                >
                  <TodoCheckbox
                    checked={status === DONE_TODO_STATUS}
                    onChange={() => onTodoClick(name, id, status)}
                  >
                    {text}
                  </TodoCheckbox>
                </List.Item>
              )}
            />
          <AddTodo
            onAdd={this.onAddTodo}
            focusInput={focusInput}
          />
        </CardContent>
      </StyledCard>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
  onAddTodoRedux: (dayName, todoText) => dispatch(addTodo(dayName, todoText)),
  onTodoClick: (dayName, todoId, status) => dispatch(completeTodo(dayName, todoId, status)),
})

export const DayTodo = connect(null, mapDispatchToProps)(DayTodoCmp)