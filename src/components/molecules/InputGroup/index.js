import React from 'react'
import { Box, Text } from 'theme-ui'
import PropTypes from 'prop-types'

export const InputGroup = ({ legend, children }) => {
  return (
    <Box as="fieldset">
      <Text as="legend">{legend}</Text>
      {children}
    </Box>
  )
}

InputGroup.propTypes = {
  legend: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
}
