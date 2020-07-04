import React from 'react'

const useDarkMode = (): [
  { dark: boolean; hasThemeLoaded: boolean },
  React.Dispatch<
    React.SetStateAction<{
      dark: boolean
      hasThemeLoaded: boolean
    }>
  >
] => {
  const [themeState, setThemeState] = React.useState({
    dark: false,
    hasThemeLoaded: false,
  })
  React.useEffect(() => {
    const lsDark = localStorage.getItem('dark') === 'true'
    setThemeState({ ...themeState, dark: lsDark, hasThemeLoaded: true })
  }, [])
  return [themeState, setThemeState]
}

export default useDarkMode
