import React from 'react'
import PropTypes from 'prop-types'
import { Badge, Button as ThemeUIButton } from 'theme-ui'
import { Spinner } from '../Spinner'

/**
 * Button
 * @augments {Component<Props, State>}
 */

export const Button = ({
  children,
  variant = 'primary',
  isLoading = false,
  hasError = false,
  small = false,
  large = false,
  block = false,
  outline = false,
  ...rest
}) => {
  return (
    <ThemeUIButton
      variant={variant + (outline ? 'Outline' : '')}
      sx={{
        cursor: 'pointer',
        display: 'inline-flex',
        alignItems: 'baseline',
        '& > *': {
          alignSelf: 'center',
        },
        justifyContent: 'center',
        width: block ? '100%' : 'auto',
        borderWidth: '1px',
        borderStyle: 'solid',
        transition:
          'color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out,box-shadow .15s ease-in-out',

        fontSize: small ? 1 : large ? 3 : 2,
        px: small ? 2 : large ? 6 : 3,
        py: small ? 1 : large ? 3 : 2,

        '&:disabled': {
          opacity: 0.5,
          cursor: 'not-allowed',
        },
      }}
      {...rest}
    >
      {isLoading && <Spinner mr={2} color="black" />}
      {hasError && (
        <Badge sx={{ mr: 2, borderRadius: '50%', fontSize: 2, height: 24, width: 24, bg: 'black' }}>
          !
        </Badge>
      )}

      {children}
    </ThemeUIButton>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  block: PropTypes.bool,
  outline: PropTypes.bool,
  variant: PropTypes.oneOf(['primary', 'secondary', 'link']),
}
