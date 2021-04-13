import React from 'react'
import { DayTodo } from '../DayTodo'
import { WeeklyTodoWrapper } from './Styled'

export class WeeklyTodoCmp extends React.Component {
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
