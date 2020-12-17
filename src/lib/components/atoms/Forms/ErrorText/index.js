import React from 'react'
import PropTypes from 'prop-types'
import { Text as ThemeUIText } from 'theme-ui'

/**
 * ErrorText
 * @augments {Component<Props, State>}
 * Provides feedback to the user when an input that is required is left blank or the input provided does not match formatting requirements.
• Should be as specifically descriptive as possible.
 */

export const ErrorText = ({ children, value, ...rest }) => {
  return (
    <ThemeUIText as="span" {...rest}>
      {value || children}
    </ThemeUIText>
  )
}

ErrorText.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
}
