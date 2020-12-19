import { ColorPalette } from '@theme-ui/style-guide'
import React from 'react'
import { Box, Grid, Image } from 'theme-ui'
import { headingTypes, textTypes, listTypes } from '../../lib/types'
import { Heading, Paragraph } from '../../lib/components/atoms'
import { List, SectionGroup } from '../../lib/components/molecules'
import { Alerts } from '../../lib/components/molecules/Alerts'
import { Accordion } from '../../lib/components/organisms/'
import { ButtonDemo, FontFamilies, FormsDemo, TypeScale } from './'

const DEMO_HEADING = 'This is an example heading'

const DEMO_PARAGRAPH =
  'Var eenig der leven ter als nam. Al ad te bezit komst ficus op. Is ploeg of groen ze wijze japan er. Boringen langzaam ik kolonien te strooien ze. Ons ander enkel bak roode dit sinds meest het. Dit had geslaagd generaal een afstands. Maleiers bevatten deeltjes behoefte in mogelijk en.'

const DEMO_PARAGRAPH_SHORT = `${DEMO_PARAGRAPH.substring(0, DEMO_PARAGRAPH.length / 3)}…`

const DEMO_LIST_ITEMS = ['The first item', 'The second item', 'The third item']

const DEMO_ACCORDION_ITEMS = [
  {
    heading: DEMO_HEADING,
    content: DEMO_PARAGRAPH,
  },
  {
    heading: 'Contains a list',
    content: <List items={DEMO_LIST_ITEMS} />,
  },
  {
    heading: 'Contains a horse',
    content: (
      <Image src="https://media.gq.com/photos/56e71c0b14cbe0637b261d7f/4:3/w_640,h_480/horseinsuit2.jpg" />
    ),
  },
]

const DEMO_ALERTS = [
  {
    id: 0,
    heading: 'Top Alert',
    message: DEMO_PARAGRAPH_SHORT,
    show: true,
    // action: () => console.log('Some other action'),
  },
  {
    id: 1,
    heading: 'Side Alert',
    message: DEMO_PARAGRAPH_SHORT,
    position: 'side',
    variant: 'muted',
    show: true,
  },
]

export const KitchenSink = () => {
  return (
    <>
      <Alerts alerts={DEMO_ALERTS} />

      <Grid gap={2} columns={[1, 2]}>
        <Box sx={{ bg: 'muted', px: 4 }}>
          {headingTypes.map((h) => (
            <SectionGroup label={h} key={h}>
              <Heading as={h} value={DEMO_HEADING} />
            </SectionGroup>
          ))}
          {textTypes.map((t) => (
            <SectionGroup label={`Body (${t})`} key={t}>
              <Paragraph variant={t} value={DEMO_PARAGRAPH} />
            </SectionGroup>
          ))}
          <SectionGroup label="Lists">
            <Grid gap={2} columns={2}>
              {listTypes.map((l) => (
                <List as={l} key={l} items={DEMO_LIST_ITEMS} />
              ))}
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
            <Accordion items={DEMO_ACCORDION_ITEMS} />
          </SectionGroup>
        </Box>

        <Box sx={{ px: 4 }}>
          <SectionGroup label="Forms">
            <FormsDemo />
          </SectionGroup>
        </Box>
      </Grid>
    </>
  )
}
