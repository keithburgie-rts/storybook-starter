import React from 'react'
import PropTypes from 'prop-types'
import { Text as ThemeUIText } from 'theme-ui'

/**
 * Paragraph
 * @augments {Component<Props, State>}
 */

export const Paragraph = ({ value, children, ...rest }) => {
  return (
    <ThemeUIText as={'p'} {...rest}>
      {value || children}
    </ThemeUIText>
  )
}

Paragraph.propTypes = {
  children: PropTypes.string,
  value: PropTypes.string,
}
