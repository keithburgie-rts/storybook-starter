import React from 'react'
import PropTypes from 'prop-types'

import { Alert as ReachAlert } from '@reach/alert'
import { Alert as ThemeUIAlert, Close, Box, Flex } from 'theme-ui'
import { Heading, PaddedCell, Paragraph, TextLink } from '../../atoms'
import { alertTypes, alertPositions } from '../../../types'

export const Alert = ({
  type = 'polite',
  position = 'top',
  variant = 'primary',
  heading,
  message,
  ...rest
}) => {
  return (
    <ReachAlert type={type}>
      <ThemeUIAlert
        variant={variant}
        {...rest}
        sx={{ flexDirection: 'column', alignItems: 'flex-start', borderRadius: 0, padding: 0 }}
      >
        <PaddedCell css={{ width: '100%' }}>
          {heading && <Heading as={'h4'} value={heading} />}
          {message && (
            <Box sx={{ display: position === 'top' ? 'flex' : 'block' }}>
              <Paragraph value={message} />
              <Box sx={{ ml: 'auto' }}>
                <TextLink href="#" value="Action 1" sx={{ mr: 4 }} />
                <TextLink href="#" value="Action 2" />
              </Box>
            </Box>
          )}
        </PaddedCell>
      </ThemeUIAlert>
    </ReachAlert>
  )
}

Alert.propTypes = {
  type: PropTypes.oneOf(alertTypes),
  position: PropTypes.oneOf(alertPositions),
  variant: PropTypes.string,
  heading: PropTypes.string,
  message: PropTypes.node,
}
