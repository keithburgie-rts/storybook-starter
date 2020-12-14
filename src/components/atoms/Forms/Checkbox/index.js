import React from 'react'
import PropTypes from 'prop-types'
import { Checkbox as ThemeUICheckbox } from 'theme-ui'
import { Label } from '../Label'

/**
 * Checkbox
 * @augments {Component<Props, State>}
 */

export const Checkbox = ({ id, label, ...rest }) => {
  return (
    <Label htmlFor={id}>
      <ThemeUICheckbox id={id} {...rest} />
      {label}
    </Label>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  /** label is the text displayed beside the checkbox */
  label: PropTypes.string,
}
