import React from 'react'
import PropTypes from 'prop-types'
import { Text as ThemeUIText } from 'theme-ui'
import { listTypes } from '../../../types'
import { ListItem } from '../../atoms'

/**
 * List
 * @augments {Component<Props, State>}
 */

export const List = ({ as = 'ul', items, children, ...rest }) => {
  return (
    <ThemeUIText as={as} variant={`styles.${as}`} {...rest}>
      {items ? items.map((item, index) => <ListItem value={item} key={index} />) : <>{children}</>}
    </ThemeUIText>
  )
}

List.propTypes = {
  as: PropTypes.oneOf(listTypes),
  items: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
}
