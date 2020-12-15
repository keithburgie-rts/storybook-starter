import React from 'react'
import PropTypes from 'prop-types'

import {
  Accordion as ReachAccordion,
  AccordionItem as ReachAccordionItem,
  AccordionButton as ReachAccordionButton,
  AccordionPanel as ReachAccordionPanel,
} from '@reach/accordion'
// import '@reach/accordion/styles.css'
import { Box } from 'theme-ui'
import { Button, Heading } from '../../atoms'

export const Accordion = ({ collapsible = true, multiple = true, children, items, ...rest }) => {
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
    <Box as={ReachAccordionItem} {...rest}>
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
      <Button as={ReachAccordionButton}>{value || children}</Button>
    </Heading>
  )
}

export const AccordionItemPanel = ({ value, children, ...rest }) => {
  AccordionItemPanel.propTypes = {
    value: PropTypes.string,
    children: PropTypes.node,
  }
  return (
    <Box as={ReachAccordionPanel} {...rest}>
      {value || children}
    </Box>
  )
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
