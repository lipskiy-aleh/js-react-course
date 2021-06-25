import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// import { withRouter } from 'react-router-dom'
import { Week } from './Week'
import { WeeklyTodoContext } from '../contexts/WeeklyTodoContext'
import { todosModel } from '../models/todo.model'

import { getWeekData } from '../selectors'
import { addTodoAction } from '../actions'

class WeekTodosCmp extends React.Component {
  static propTypes = {
    todos: todosModel,
    startDate: PropTypes.string.isRequired,
    onAddTodo: PropTypes.func.isRequired,
  }

  // static defaultProps = {
  //   todos: []
  // }

  render() {
    console.log('PROPS', this.props)
    const { onAddTodo, week } = this.props

    return (
      <WeeklyTodoContext.Provider value={{ data: 'text' }}>
        <div className="weeklyTodo">
          <Week weekData={week} onAddTodo={onAddTodo} />
        </div>
      </WeeklyTodoContext.Provider>
    )
  }
}

function mapStateToProps(state, { startDate }) {
  return {
    week: getWeekData(state, startDate)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onAddTodo: (date, text) => dispatch(addTodoAction(date,text))
  }
}

function mergeProps(stateProps, dispatchProps, ownProps) {
  return {
    ...ownProps,
    ...dispatchProps,
    ...stateProps,
  }
}

export const WeekTodos = connect(mapStateToProps, mapDispatchToProps, mergeProps)(WeekTodosCmp)
// export const WeekTodos = withRouter(WeekTodosCmp)
