import React from 'react'
import PropTypes from 'prop-types'
import { Image as ThemeUIImage } from 'theme-ui'

/**
 * Icon
 * @augments {Component<Props, State>}
 */

export const Icon = ({ src, width = 24, ...rest }) => {
  return <ThemeUIImage as={src} width={width} {...rest} />
}

Icon.propTypes = {
  src: PropTypes.func.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}
