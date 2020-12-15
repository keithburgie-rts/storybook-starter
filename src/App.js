import React from 'react'
import { Accordion } from './components/organisms/Accordion'
import { KitchenSink } from './theme/KitchenSink'

function App() {
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
  return (
    <>
      <Accordion items={accordionItems} />
      {/* <KitchenSink /> */}
    </>
  )
}

export default App
