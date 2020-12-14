import React from 'react'
import PropTypes from 'prop-types'
import { Radio as ThemeUIRadio } from 'theme-ui'
import { Label } from '../Label'

/**
 * Radio
 * @augments {Component<Props, State>}
 */

export const Radio = ({ id, label, ...rest }) => {
  return (
    <Label htmlFor={id}>
      <ThemeUIRadio id={id} {...rest} />
      {label}
    </Label>
  )
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  /** label is the text displayed beside the radio button */
  label: PropTypes.string,
}
