import React from 'react'
import PropTypes from 'prop-types'
import { Text as ThemeUIText } from 'theme-ui'

/**
 * HintText
 * @augments {Component<Props, State>}
 * Used to provide as much additional information as in needed to be helpful to the user in order to provide input that is:
- Accurate, appropriate, and expected for a given field
- Valid--in accord with the formatting requirements for a given field
 */

export const HintText = ({ children, value, ...rest }) => {
  return (
    <ThemeUIText as="span" {...rest}>
      {value || children}
    </ThemeUIText>
  )
}

HintText.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
}
