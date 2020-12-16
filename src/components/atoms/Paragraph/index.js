import React from 'react'
import PropTypes from 'prop-types'
import { Text as ThemeUIText } from 'theme-ui'
import { textTypes } from '../../../lib/types'

/**
 * Paragraph
 * @augments {Component<Props, State>}
 */

export const Paragraph = ({ value, variant = 'default', children, ...rest }) => {
  return (
    <ThemeUIText as={'p'} variant={variant} {...rest}>
      {value || children}
    </ThemeUIText>
  )
}

Paragraph.propTypes = {
  variant: PropTypes.oneOf(textTypes),
  children: PropTypes.string,
  value: PropTypes.string,
}
