import React from 'react'
import PropTypes from 'prop-types'
import { Textarea as ThemeUITextarea } from 'theme-ui'
import { Label } from '../Label'

/**
 * TextArea
 * @augments {Component<Props, State>}
 */

export const TextArea = ({ name, id, label, ...rest }) => {
  return (
    <Label htmlFor={id} label={label}>
      <ThemeUITextarea id={id} name={name} rows="10" {...rest} />
    </Label>
  )
}

TextArea.propTypes = {
  /** id is for JS/CSS and must match the label's htmlFor */
  id: PropTypes.string.isRequired,
  /** name is the value posted to the server*/
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
}
