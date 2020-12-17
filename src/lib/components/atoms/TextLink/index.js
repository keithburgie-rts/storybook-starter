import React from 'react'
import PropTypes from 'prop-types'
import { Link as ThemeUILink } from 'theme-ui'

/**
 * TextLink
 * @augments {Component<Props, State>}
 */

export const TextLink = ({ children, href, value, ...rest }) => {
  return (
    <ThemeUILink href={href} {...rest}>
      {value || children}
    </ThemeUILink>
  )
}

TextLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
  value: PropTypes.string,
}
