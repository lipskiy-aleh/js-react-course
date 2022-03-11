import PropTypes from 'prop-types'

const obj = {
  field: 'one' | 'two',
  arr: [1, '1'],
  field2: { [key]: string }
}

const objProps = PropTypes.shape({
  field: PropTypes.oneOf(['one', 'two']),
  arr: PropTypes.arrayOf(
    PropTypes.oneOfType(
      [PropTypes.number, PropTypes.string]
    )
  ),
  field2: PropTypes.objectOf(PropTypes.string)
})