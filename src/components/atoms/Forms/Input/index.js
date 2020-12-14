import React from 'react'
import PropTypes from 'prop-types'
import { Input as ThemeUIInput } from 'theme-ui'
import { Label } from '../Label'

/**
 * Input
 * @augments {Component<Props, State>}
 */

export const Input = ({ label, type = 'text', name, id, ...rest }) => {
  return (
    <Label htmlFor={id} label={label}>
      <ThemeUIInput type={type} name={name} id={id} {...rest} />
    </Label>
  )
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'password', 'search', 'email']),
  /** name is the value posted to the server*/
  name: PropTypes.string.isRequired,
  /** id is for JS/CSS and must match the label's htmlFor */
  id: PropTypes.string.isRequired,
  /** value is the content of the input */
}
