import PropTypes from 'prop-types'
import { days } from '../../../constants'
import { todosModel} from './todo.model'

export const weekModel = PropTypes.arrayOf(PropTypes.exact({
  dayName: PropTypes.oneOf(days),
  todos: PropTypes.arrayOf(todosModel),
  date: PropTypes.string
}))