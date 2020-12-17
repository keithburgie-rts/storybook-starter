import React from 'react'
import PropTypes from 'prop-types'
import { Spinner as ThemeUISpinner } from 'theme-ui'

/**
 * Spinner
 * @augments {Component<Props, State>}
 */

export const Spinner = ({ size, color, ...rest }) => {
  return <ThemeUISpinner size={size || 20} {...rest} color={color} />
}

Spinner.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}
