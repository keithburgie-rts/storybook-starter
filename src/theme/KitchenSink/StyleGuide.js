import React from 'react'
import { Heading } from 'theme-ui'
import {
  TypeScale,
  TypeStyle,
  HeadingStyle,
  FontFamily,
  ColorSwatch,
  ColorPalette,
  ThemeCard,
} from '@theme-ui/style-guide'

export const StyleGuide = (props) => (
  <>
    <Heading>Colors</Heading>
    <ColorPalette />

    <Heading>Type Scale</Heading>
    <TypeScale reverse={false} />

    <Heading>Type Styles</Heading>
    <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body">
      System Font (Body)
    </TypeStyle>
    <TypeStyle fontFamily="heading" fontWeight="heading" lineHeight="heading">
      Heading
    </TypeStyle>
    <TypeStyle fontFamily="monospace" fontWeight="monospace" lineHeight="monospace">
      Monospace
    </TypeStyle>

    <Heading>Theme Card</Heading>
    <ThemeCard />
  </>
)
