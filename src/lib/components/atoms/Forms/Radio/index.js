import React from 'react'
import PropTypes from 'prop-types'
import { Box, Radio as ThemeUIRadio } from 'theme-ui'
import { Label } from '../Label'

/**
 * Radio
 * @augments {Component<Props, State>}
 */

export const Radio = ({ id, label, ...rest }) => {
  return (
    <Box>
      <Label htmlFor={`${id}`}>
        <ThemeUIRadio id={`${id}`} {...rest} />
        {label}
      </Label>
    </Box>
  )
}

Radio.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** label is the text displayed beside the radio button */
  label: PropTypes.string,
}
