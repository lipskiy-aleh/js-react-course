import { useContext } from 'react'
import { ThemeContext } from './themeContext'

export const withTheme = (Component) => (props) => {
  const { theme } = useContext(ThemeContext)

  return <Component {...props} theme={theme} />
}
