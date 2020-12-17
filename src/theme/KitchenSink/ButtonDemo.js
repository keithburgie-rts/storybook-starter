import React from 'react'
import { Box, Divider } from 'theme-ui'
import { Button } from '../../lib/components/atoms'

export const ButtonDemo = () => {
  return (
    <Box sx={{ '& > button': { mr: 4, mb: 2 } }}>
      <Button>Primary Button</Button>
      <Button outline>Primary Outline</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="secondary" outline>
        Secondary Outline
      </Button>
      <Button disabled>Disabled Button</Button>
      <Button isLoading>Loading Button</Button>
      <Button variant="secondary" hasError>
        Error Button
      </Button>
      <Button small>Small Button</Button>
      <Button large>Large Button</Button>
      <Button block>Block Button</Button>
    </Box>
  )
}
