import PropTypes from 'prop-types'

export const todoModel = PropTypes.exact({
  date: PropTypes.string,
  text: PropTypes.string,
  status: PropTypes.oneOf(['new'])
})

export const todosModel = PropTypes.arrayOf(todoModel)