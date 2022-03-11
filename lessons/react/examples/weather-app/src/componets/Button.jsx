import PropTypes from 'prop-types'
import { themeProp } from '../propTypes'
import { withTheme } from '../theme'

const ButtonCmp = ({ label, theme, ...props }) => {
  return (
    <button
      {...props}
      style={{
        color: theme.color,
        background: theme.background,
        ...props.style,
      }}
    >{label}</button>
  )
}

ButtonCmp.propTypes = {
  label: PropTypes.node.isRequired,
  theme: themeProp.isRequired,
}

export const Button = withTheme(ButtonCmp)
