import React from 'react'
import { DayTodo } from '../DayTodo'
import { WeeklyTodoWrapper } from './Styled'
import { connect } from 'react-redux'
import { getWeekTodo } from '../../selectors/todo.selectors'

class WeeklyTodoCmp extends React.Component {
  render() {
    return (
      <WeeklyTodoWrapper>
        {this.props.weekData.map(({ name, todo }) => (
          <DayTodo
            key={name}
            name={name}
            todo={todo}
            focusInput={name === 'Monday'}
          />
        ))}
      </WeeklyTodoWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  weekData: getWeekTodo(state)
})


export const WeeklyTodo = connect(mapStateToProps)(WeeklyTodoCmp)