import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox as ThemeUICheckbox } from 'theme-ui'
import { Label } from '../Label'

/**
 * Checkbox
 * @augments {Component<Props, State>}
 */

export const Checkbox = ({ id, name, value, label, checked = false, ...rest }) => {
  return (
    <Label htmlFor={id}>
      <ThemeUICheckbox id={id} name={name} value={value} checked={checked} {...rest} />
      {label}
    </Label>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  /** name should be the same for all radio buttons in a group*/
  name: PropTypes.string.isRequired,
  /** value is unique for a single radio button within a group */
  value: PropTypes.string,
  /** label is the text displayed beside the radio button */
  label: PropTypes.string,
}
