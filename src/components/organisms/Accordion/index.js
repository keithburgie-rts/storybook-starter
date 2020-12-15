import React from 'react'
import PropTypes from 'prop-types'

import {
  Accordion as ReachAccordion,
  AccordionItem as ReachAccordionItem,
  AccordionButton as ReachAccordionButton,
  AccordionPanel as ReachAccordionPanel,
} from '@reach/accordion'
import { Box } from 'theme-ui'
import { Button, Heading, PaddedCell } from '../../atoms'

export const Accordion = ({ collapsible = true, multiple = false, children, items, ...rest }) => {
  Accordion.propTypes = {
    children: PropTypes.node,
    /** receives [{heading: 'foo', content: 'bar'}, {heading: 'foo2', content: 'bar2'}] */
    items: PropTypes.arrayOf(
      PropTypes.exact({
        heading: PropTypes.string,
        content: PropTypes.node,
      })
    ),
    /** true: all panels may be collapsed simultaneously; false: one must be open */
    collapsible: PropTypes.bool,
    /** true: all panels may be open simultaneously; false: only one may be open */
    multiple: PropTypes.bool,
  }
  return (
    <ReachAccordion as={Box} collapsible={collapsible} multiple={multiple} {...rest}>
      {items ? (
        items.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>{item.heading}</AccordionItemHeading>
            <AccordionItemPanel>{item.content}</AccordionItemPanel>
          </AccordionItem>
        ))
      ) : (
        <>{children}</>
      )}
    </ReachAccordion>
  )
}

export const AccordionItem = ({ children, ...rest }) => {
  AccordionItem.propTypes = {
    children: PropTypes.node.isRequired,
  }
  return (
    <Box
      as={ReachAccordionItem}
      {...rest}
      sx={{
        '&:first-of-type button': {
          borderTopLeftRadius: 1,
          borderTopRightRadius: 1,
        },
        '&:last-of-type': {
          '& [data-reach-accordion-panel], &[data-state="collapsed"] button': {
            borderBottomWidth: 1,
            borderBottomLeftRadius: 1,
            borderBottomRightRadius: 1,
          },
        },
        '&[data-state="open"]': {
          '& button': {
            color: 'primary',
            backgroundColor: 'muted',
            '&::after': {
              transform: 'rotate(180deg)',
            },
          },
        },
        '&[data-state="collapsed"] button': {
          borderBottomWidth: 0,
        },
        '& [data-reach-accordion-panel]': {
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderStyle: 1,
          borderColor: 'borders',
          '&:focus': {
            outline: 0,
          },
        },
        '& button': {
          borderRadius: 0,
          borderWidth: 1,
          borderStyle: 1,
          borderColor: 'borders',
          padding: 0,
          alignItems: 'center',
          justifyContent: 'space-between',

          '&:focus': {
            borderColor: 'primary',
            boxShadow: (theme) => `0 0 0 4px ${theme.colors.focus}`,
            outline: 0,
          },
          '&::after': {
            content: '""',
            position: 'relative',
            backgroundImage: 'url(https://static.thenounproject.com/png/427197-200.png)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            width: 5,
            height: 5,
            right: 5, // TODO: Make this match padded cell if that component changes
            transition: 'transform .2s ease-in-out',
          },
        },
      }}
    >
      {children}
    </Box>
  )
}

export const AccordionItemHeading = ({ as = 'h3', value, children, ...rest }) => {
  AccordionItemHeading.propTypes = {
    as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
    value: PropTypes.string,
    children: PropTypes.node,
  }
  return (
    <Heading as={as} {...rest}>
      <AccordionButton>
        <PaddedCell>{value || children}</PaddedCell>
      </AccordionButton>
    </Heading>
  )
}

export const AccordionItemPanel = ({ value, children, ...rest }) => {
  AccordionItemPanel.propTypes = {
    value: PropTypes.string,
    children: PropTypes.node,
  }
  return (
    <Box as={ReachAccordionPanel} {...rest} sx={{ borderWidth: '0 1px', borderStyle: 'solid' }}>
      <PaddedCell>{value || children}</PaddedCell>
    </Box>
  )
}

export const AccordionButton = ({ ...props }) => {
  return <Button as={ReachAccordionButton} variant="link" block {...props} />
}

/* 
// Passing data to accordion:
const accordionItems = [
    {
      heading: "I'm a heading",
      content: 'This is the body of an accordion panel',
    },
    {
      heading: "I'm also a heading",
      content: 'This is the body of another accordion panel',
    },
  ] 
*/

/* 
// Pattern 1
<AccordionItem>
    <AccordionItemHeading value="Step 1: Do a thing" />
    <AccordionItemPanel value="Here are some detailed instructions about doing a thing. I am very complex and probably contain a lot of content, so a user can hide or show me by clicking the button above." />
</AccordionItem>

// Pattern 2
<AccordionItem>
    <AccordionItemHeading>
        Step 2: Do another thing
    </AccordionItemHeading>
    <AccordionItemPanel>
        Here are some detailed instructions about doing yet another thing. There are a lot of
        things someone might want to do, so I am only going to talk about doing that other thing.
        I'll let my fellow accordion items go into detail about even more things.
    </AccordionItemPanel>
</AccordionItem> 
*/
