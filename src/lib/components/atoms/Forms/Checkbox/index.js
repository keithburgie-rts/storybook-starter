import React from 'react'
import PropTypes from 'prop-types'
import { Box, Checkbox as ThemeUICheckbox } from 'theme-ui'
import { Label } from '../Label'

/**
 * Checkbox
 * @augments {Component<Props, State>}
 */

export const Checkbox = ({ id, label, ...rest }) => {
  return (
    <Box>
      <Label htmlFor={`${id}`}>
        <ThemeUICheckbox id={`${id}`} {...rest} />
        {label}
      </Label>
    </Box>
  )
}

Checkbox.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** label is the text displayed beside the checkbox */
  label: PropTypes.string,
}
