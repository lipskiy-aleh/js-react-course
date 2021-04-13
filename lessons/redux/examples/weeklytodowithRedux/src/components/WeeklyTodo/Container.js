import { connect } from 'react-redux'
import { getWeekTodo } from '../../selectors/todo.selectors'
import { WeeklyTodoCmp } from './Component'

const mapStateToProps = (state) => ({
  weekData: getWeekTodo(state)
})

const mapDispatchToProps = () => ({})

const mergeProps = (stateProps, dispatchProps, ownProps) => ({
  ...ownProps,
  ...stateProps,
  ...dispatchProps,
})

export const WeeklyTodo = connect(
  mapStateToProps,
  mapDispatchToProps,
  mergeProps,
)(WeeklyTodoCmp)