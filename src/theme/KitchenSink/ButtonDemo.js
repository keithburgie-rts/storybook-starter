import React from 'react'
import { Divider } from 'theme-ui'
import { Button } from '../../components/atoms'

export const ButtonDemo = () => {
  return (
    <>
      <Button>Primary Button</Button>
      <Button outline>Primary Outline</Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="secondary" outline>
        Secondary Outline
      </Button>
      <Button disabled>Disabled Button</Button>
      <Divider />
      <Button block>Block Button</Button>
      <Divider />
      <Button isLoading>Loading Button</Button>
      <Button variant="secondary" hasError>
        Error Button
      </Button>
      <Divider />
      <Button small>Small Button</Button>
      <Button large>Large Button</Button>
    </>
  )
}
