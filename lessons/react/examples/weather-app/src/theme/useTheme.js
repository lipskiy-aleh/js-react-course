import { useContext } from 'react'
import { ThemeContext } from './themeContext'

export const useTheme = () => {
  const { theme } = useContext(ThemeContext)
  return theme
}

export const useThemeChange = () => {
  const { setTheme } = useContext(ThemeContext)
  return setTheme
}
