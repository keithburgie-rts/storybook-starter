import React from 'react'
import PropTypes from 'prop-types'
import { Box, Label as ThemeUILabel } from 'theme-ui'

/**
 * Label
 * @augments {Component<Props, State>}
 */

export const Label = ({ htmlFor, children, label, ...rest }) => {
  return (
    <ThemeUILabel
      htmlFor={`${htmlFor}`}
      sx={{ position: 'relative', flexDirection: label ? 'column' : 'row' }}
      {...rest}
    >
      {label && <Box as="span">{label}</Box>}
      {children}
    </ThemeUILabel>
  )
}

Label.propTypes = {
  htmlFor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  children: PropTypes.node,
  /** value is the label text */
  label: PropTypes.string,
}
