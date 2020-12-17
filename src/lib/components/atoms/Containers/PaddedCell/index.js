import React from 'react'
import { Box } from 'theme-ui'

export const PaddedCell = ({ ...rest }) => {
  return <Box sx={{ paddingX: 5, paddingY: 4 }} {...rest} />
}
