import React from 'react'
import PropTypes from 'prop-types'
import { Heading as ThemeUIHeading } from 'theme-ui'

/**
 * Heading
 * @augments {Component<Props, State>}
 */

export const Heading = ({ value, children, as = 'h2', ...rest }) => {
  return (
    <ThemeUIHeading as={as} variant={`styles.${as}`} {...rest}>
      {value || children}
    </ThemeUIHeading>
  )
}

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.node,
  value: PropTypes.string,
}
