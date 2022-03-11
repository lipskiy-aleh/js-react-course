import { useState } from 'react'
import { ThemeContext } from './themeContext'

export const ThemeProvider = ({ theme: defaultTheme, children }) => {
  const [theme, setTheme] = useState(defaultTheme)

  const themeState = {
    theme,
    setTheme
  }

  return <ThemeContext.Provider value={themeState}>{children}</ThemeContext.Provider>
}

ThemeProvider.defaultProps = {
  theme: {}
}