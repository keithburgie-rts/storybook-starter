import React, { useState } from 'react'
import { ThemeProvider } from 'theme-ui'
import { KitchenSink } from '../KitchenSink'
import { ThemeSwitcher } from '../ThemeSwitcher'
import { themes } from '../../themes'

export const App = () => {
  // Todo: use local storage
  const baseTheme = themes[0]
  const [theme, setTheme] = useState(baseTheme)

  return (
    <ThemeProvider theme={theme}>
      <ThemeSwitcher themes={themes} setTheme={setTheme} />
      <KitchenSink />
    </ThemeProvider>
  )
}
