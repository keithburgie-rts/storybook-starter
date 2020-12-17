import React from 'react'
// import PropTypes from 'prop-types'
import { Badge as ThemeUIBadge } from 'theme-ui'

/**
 * OptionalTag
 * @augments {Component<Props, State>}
 * Used to designate which questions in a form are not required for form submission, rather than drawing attention to all fields that must be filled out.
 */

export const OptionalTag = ({ ...rest }) => {
  return <ThemeUIBadge {...rest}>Optional</ThemeUIBadge>
}

// OptionalTag.propTypes = {}
