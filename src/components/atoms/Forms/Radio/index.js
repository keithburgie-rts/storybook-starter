import React from 'react'
import PropTypes from 'prop-types'
import { Radio as ThemeUIRadio } from 'theme-ui'
import { Label } from '../Label'

/**
 * Radio
 * @augments {Component<Props, State>}
 */

export const Radio = ({ id, name, value, label, checked = false, ...rest }) => {
  return (
    <Label htmlFor={id}>
      <ThemeUIRadio id={id} name={name} value={value} checked={checked} {...rest} />
      {label}
    </Label>
  )
}

Radio.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  /** name should be the same for all radio buttons in a group*/
  name: PropTypes.string.isRequired,
  /** value is unique for a single radio button within a group */
  value: PropTypes.string,
  /** label is the text displayed beside the radio button */
  label: PropTypes.string,
}
