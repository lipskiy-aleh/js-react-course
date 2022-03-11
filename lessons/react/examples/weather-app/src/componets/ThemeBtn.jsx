import { Button } from './Button'
import { useThemeChange } from '../theme'
import { themes } from '../themes'

export const ThemeBtn = () => {
  const setTheme = useThemeChange()

  return (
    <div>
      <Button onClick={() => setTheme(themes.light)} label="Use light theme" />
      <Button onClick={() => setTheme(themes.dark)} label="Use dark theme" />
    </div>
  )
}
