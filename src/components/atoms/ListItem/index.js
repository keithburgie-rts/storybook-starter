import React from 'react'
import PropTypes from 'prop-types'
import { Text as ThemeUIText } from 'theme-ui'

/**
 * ListItem
 * @augments {Component<Props, State>}
 */

export const ListItem = ({ value, children, ...rest }) => {
  return (
    <ThemeUIText as={'li'} {...rest}>
      {value || children}
    </ThemeUIText>
  )
}

ListItem.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
}
