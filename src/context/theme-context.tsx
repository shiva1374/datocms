import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import React, { ReactNode } from 'react'
import theme from 'lib/theme'
import useDarkMode from 'hooks/useDarkMode'

const defaultContextData: [boolean, () => void] = [false, () => {}]

const ThemeContext = React.createContext(defaultContextData)
ThemeContext.displayName = 'ThemeContext'

export const useThemeMode = () => React.useContext(ThemeContext)

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeState, setThemeState] = useDarkMode()
  if (!themeState.hasThemeLoaded) {
    return <div />
  }
  const themeMode = themeState.dark ? theme('dark') : theme('light')
  const toggle = () => {
    const dark = !themeState.dark
    localStorage.setItem('dark', JSON.stringify(dark))
    setThemeState({ ...themeState, dark })
  }
  return (
    <EmotionThemeProvider theme={themeMode}>
      <ThemeContext.Provider value={[themeState.dark, toggle]}>
        {children}
      </ThemeContext.Provider>
    </EmotionThemeProvider>
  )
}
