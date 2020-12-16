import React from 'react'
import { Box } from 'theme-ui'
import PropTypes from 'prop-types'
import { darken } from '@theme-ui/color'

export const SectionGroup = ({ label, children }) => {
  const lightgray = darken('muted', 0.5)

  return (
    <Box
      sx={{
        py: 4,
        '& + &': {
          borderTop: (theme) => `1px solid ${theme.colors.borders}`,
        },
      }}
    >
      {label && (
        <Box
          sx={{
            textTransform: 'uppercase',
            color: lightgray,
            mb: 2,
          }}
        >
          {label}
        </Box>
      )}
      {children}
    </Box>
  )
}

SectionGroup.propTypes = {
  label: PropTypes.string,
  children: PropTypes.node,
}
