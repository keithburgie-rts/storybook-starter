import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Textarea as ThemeUITextarea } from 'theme-ui'
import { Label } from '../Label'

/**
 * TextArea
 * @augments {Component<Props, State>}
 */

export const TextArea = ({
  name,
  id,
  label,
  maxLength = 1000,
  showCounter = true,
  // counterPosition = 'top inner', // Todo: create setting for position
  ...rest
}) => {
  const [value, setValue] = useState('')
  const handleChange = (e) => setValue(e.target.value)
  const characterCount = value.length.toLocaleString()
  const characterLimit = maxLength.toLocaleString()

  return (
    <Label htmlFor={id} label={label}>
      <ThemeUITextarea
        id={id}
        name={name}
        rows="10"
        maxLength={maxLength}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      {showCounter && (
        <Box as="span" sx={{ position: 'absolute', right: 0 }}>
          {characterCount}/{characterLimit}
        </Box>
      )}
    </Label>
  )
}

TextArea.propTypes = {
  /** id is for JS/CSS and must match the label's htmlFor */
  id: PropTypes.string.isRequired,
  /** name is the value posted to the server*/
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  maxLength: PropTypes.number,
  showCounter: PropTypes.bool,
  counterPosition: PropTypes.oneOf(['top outer', 'top inner', 'bottom inner']),
}
