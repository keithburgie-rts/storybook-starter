import { ColorPalette } from '@theme-ui/style-guide'
import React from 'react'
import { Box, Grid } from 'theme-ui'
import { Heading, ListItem, Paragraph } from '../../components/atoms'
import { List, SectionGroup } from '../../components/molecules'
import { Accordion } from '../../components/organisms/'
import { ButtonDemo } from './ButtonDemo'
import { FontFamilies } from './FontFamilies'
import { FormsDemo } from './FormsDemo'
import { TypeScale } from './TypeScale'

export const KitchenSink = () => {
  return (
    <Grid gap={0} columns={[1, 2]} sx={{ columnGap: 2, mb: 8, mt: '-1px' }}>
      <Box sx={{ bg: 'muted', px: 4 }}>
        <SectionGroup label="h1">
          <Heading as="h1">This is an example heading</Heading>
        </SectionGroup>
        <SectionGroup label="h2">
          <Heading as="h2">This is an example heading</Heading>
        </SectionGroup>
        <SectionGroup label="h3">
          <Heading as="h3">This is an example heading</Heading>
        </SectionGroup>
        <SectionGroup label="h4">
          <Heading as="h4">This is an example heading</Heading>
        </SectionGroup>
        <SectionGroup label="h5">
          <Heading as="h5">This is an example heading</Heading>
        </SectionGroup>
        <SectionGroup label="h6">
          <Heading as="h6">This is an example heading</Heading>
        </SectionGroup>
        <SectionGroup label="Body (Lead)">
          <Paragraph variant="lead">
            Lead variant eenig der leven ter als nam. Al ad te bezit komst ficus op. Is ploeg of
            groen ze wijze japan er. Boringen langzaam ik kolonien te strooien ze. Ons ander enkel
            bak roode dit sinds meest het. Dit had geslaagd generaal een afstands. Maleiers bevatten
            deeltjes behoefte in mogelijk en.
          </Paragraph>
        </SectionGroup>
        <SectionGroup label="Body (Normal)">
          <Paragraph>
            Terug eenig der leven ter als nam. Al ad te bezit komst ficus op. Is ploeg of groen ze
            wijze japan er. Boringen langzaam ik kolonien te strooien ze. Ons ander enkel bak roode
            dit sinds meest het. Dit had geslaagd generaal een afstands. Maleiers bevatten deeltjes
            behoefte in mogelijk en.
          </Paragraph>
        </SectionGroup>
        <SectionGroup label="Body (Small)">
          <Paragraph variant="small">This is small text from a small variant.</Paragraph>
        </SectionGroup>
        <SectionGroup label="Lists">
          <Grid gap={2} columns={2}>
            <List>
              <ListItem value="List Item" />
              <ListItem>List Item 2</ListItem>
            </List>
            <List as="ol">
              <ListItem value="List Item" />
              <ListItem>List Item 2</ListItem>
            </List>
          </Grid>
        </SectionGroup>
      </Box>

      <Box sx={{ px: 4 }}>
        <SectionGroup label="Type Scale">
          <TypeScale />
        </SectionGroup>
        <SectionGroup label="Font Styles">
          <FontFamilies />
        </SectionGroup>
        <SectionGroup label="Color Palette">
          <ColorPalette sx={{ textTransform: 'uppercase' }} />
        </SectionGroup>
      </Box>

      <Box sx={{ bg: 'muted', px: 4 }}>
        <SectionGroup label="Buttons">
          <ButtonDemo />
        </SectionGroup>
        <SectionGroup label="Accordion">
          <Accordion
            items={[
              {
                heading: "I'm a heading",
                content: 'This is the body of an accordion panel',
              },
              {
                heading: "I'm also a heading",
                content: 'This is the body of another accordion panel',
              },
              {
                heading: 'I am also, also a heading, as well',
                content: 'This is the body of another accordion panel',
              },
            ]}
          />
        </SectionGroup>
      </Box>

      <Box sx={{ px: 4 }}>
        <SectionGroup label="Forms">
          <FormsDemo />
        </SectionGroup>
      </Box>
    </Grid>
  )
}
