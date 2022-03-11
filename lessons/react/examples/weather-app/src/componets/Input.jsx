import React from 'react'
import { withTheme } from '../theme'
import { themeProp } from '../propTypes'
// import { ThemeContext } from '../theme/themeContext'

class InputCmp extends React.Component {
  // static contextType = ThemeContext

  static propTypes = {
    theme: themeProp.isRequired,
  }

  render() {
    return (<input {...this.props} />)
  }
}

// InputCmp.propTypes = {}

export const Input = withTheme(InputCmp)

// export const Input = (props) => (<input {...props} />)