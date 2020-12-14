import React from 'react'
import { Divider } from 'theme-ui'
import { TextLink, ListItem, Icon, Paragraph, Heading } from '../../components/atoms'
import { List } from '../../components/molecules'

import { SearchIcon } from '../../components/atoms/Icon/SearchIcon'

export const TypographyDemo = () => {
  return (
    <>
      <TextLink href="#" sx={{ display: 'block' }}>
        <Icon src={SearchIcon} /> Link with Icon
      </TextLink>
      <TextLink href="#" value="I'm a text link" />
      <Divider />
      <List>
        <ListItem value="ul Test" />
        <ListItem>ul Test 2</ListItem>
      </List>
      <List as="ol">
        <ListItem value="ol Test" />
        <ListItem>ol Test 2</ListItem>
      </List>
      <Divider />
      <Paragraph>I'm a paragraph</Paragraph>
      <Paragraph>I'm a paragraph</Paragraph>
      <Paragraph>I'm a paragraph</Paragraph>
      <Divider />
      <Heading as="h1">I'm a heading</Heading>
      <Heading as="h2">I'm a heading</Heading>
      <Heading as="h3">I'm a heading</Heading>
      <Heading as="h4">I'm a heading</Heading>
      <Heading as="h5">I'm a heading</Heading>
      <Heading as="h6">I'm a heading</Heading>
    </>
  )
}
