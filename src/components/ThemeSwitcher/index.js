import React from 'react'
import PropTypes from 'prop-types'
import { Box, Select } from 'theme-ui'

export const ThemeSwitcher = ({ themes, setTheme }) => {
  const handleChange = (e) => {
    const selection = e.target.value
    setTheme(themes.find((theme) => theme.name === selection))
  }
  return (
    <Box sx={{ position: 'fixed', bottom: 4, left: 4, width: 320, zIndex: 4 }}>
      <Select
        sx={{ bg: 'background', cursor: 'pointer', boxShadow: 'default' }}
        onChange={handleChange}
      >
        {themes.map((theme) => (
          <option key={theme.name}>{theme.name}</option>
        ))}
      </Select>
    </Box>
  )
}

ThemeSwitcher.propTypes = {
  theme: PropTypes.object,
  themes: PropTypes.array,
  setTheme: PropTypes.func,
}
