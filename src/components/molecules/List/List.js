import React from 'react'
import PropTypes from 'prop-types'
import { Text as ThemeUIText } from 'theme-ui'
// import { ListItem } from '../../atoms/ListItem'

/**
 * List
 * @augments {Component<Props, State>}
 */

export const List = ({ as = 'ul', children, ...rest }) => {
  return (
    <ThemeUIText as={as} variant={`styles.${as}`} {...rest}>
      {children}
    </ThemeUIText>
  )
}

List.propTypes = {
  as: PropTypes.oneOf(['ul', 'ol']),

  // TODO: Specify that only a ListItem element should be allowed
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element])
    .isRequired,
}
