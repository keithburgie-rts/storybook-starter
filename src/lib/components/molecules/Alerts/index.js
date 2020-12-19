import React, { useState } from 'react'
import PropTypes from 'prop-types'

import { Alert as ReachAlert } from '@reach/alert'
import { Alert as ThemeUIAlert, Grid } from 'theme-ui'
import { Heading, PaddedCell, Paragraph, TextLink } from '../../atoms'
import { alertTypes, alertPositions, alertVariants } from '../../../types'

export const Alert = ({
  type = 'polite',
  position = 'top',
  variant = 'primary',
  closeable = true,
  onDismiss,
  heading,
  message,
  ...rest
}) => {
  const styles =
    position === 'side'
      ? {
          position: 'fixed',
          top: 0,
          right: 0,
          zIndex: 4,
          maxWidth: ['none', 320],
          margin: 4,
          boxShadow: 'default',
        }
      : {}
  return (
    <ReachAlert type={type}>
      <ThemeUIAlert variant={variant} sx={{ borderRadius: 0, padding: 0, ...styles }} {...rest}>
        <PaddedCell>
          {heading && <Heading as={'h4'} value={heading} sx={{ mb: 3 }} />}
          {message && (
            <Grid columns={position === 'top' ? ['auto', '1fr auto'] : '1fr'}>
              <Paragraph value={message} />
              <Paragraph sx={{ alignSelf: 'end', '* + *': { ml: 4 } }}>
                {closeable && <TextLink href="#" value="Dismiss" onClick={onDismiss} />}
                {/* <TextLink href="#" value="Action 2" />*/}
              </Paragraph>
            </Grid>
          )}
        </PaddedCell>
      </ThemeUIAlert>
    </ReachAlert>
  )
}

Alert.propTypes = {
  type: PropTypes.string,
  position: PropTypes.oneOf(alertPositions),
  variant: PropTypes.oneOf(alertVariants),
  closeable: PropTypes.bool,
  onDismiss: PropTypes.func,
  heading: PropTypes.string,
  message: PropTypes.node,
  styles: PropTypes.object,
}

export const Alerts = (props) => {
  const [alerts, setAlerts] = useState(props.alerts)
  function dismissAlert(id) {
    setAlerts(alerts.map((alert) => (alert.id === id ? { ...alert, show: false } : alert)))
  }
  if (alerts.length) {
    return alerts
      .filter((alert) => alert.show)
      .map((alert) => <Alert key={alert.id} onDismiss={() => dismissAlert(alert.id)} {...alert} />)
  }
  return null
}
