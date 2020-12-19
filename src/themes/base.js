import { darken } from '@theme-ui/color'

/**
 * THEME SCALES:
 * -----------------
 * colors:	color, background-color, border-color
 * fonts:	font-family
 * fontSizes:	font-size
 * fontWeights:	font-weight
 * lineHeights:	line-height
 * space:	margin, margin-top, margin-right, margin-bottom, margin-left, padding, padding-top, padding-right, padding-bottom, padding-left, grid-gap, grid-column-gap, grid-row-gap
 * letterSpacings:	letter-spacing
 * sizes:	width, height, min-width, max-width, min-height, max-height
 * borders:	border, border-top, border-right, border-bottom, border-left
 * borderWidths:	border-width
 * borderStyles:	border-style
 * radii:	border-radius
 * shadows:	box-shadow, text-shadow
 * zIndices:	z-index
 */

import {
  alerts,
  breakpoints,
  buttons,
  forms,
  text,
  borders,
  borderWidths,
  borderStyles,
  radii,
  colors,
  sizes,
  space,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  cards,
  // shadows,
  zIndices,
} from './partials'

export default {
  name: 'Base',
  alerts,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  space,
  sizes,
  borders,
  borderWidths,
  borderStyles,
  radii,
  buttons,
  text,
  forms,
  cards,
  zIndices,
  shadows: {
    default: '0 1px 3px 1px rgba(0,0,0,.25)',
    none: 'none',
  },

  styles: {
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    // p: {},
    a: {
      color: 'links',
      '&:hover, &:focus': {
        color: darken('links', 0.25),
      },
      '&:active': {
        textDecoration: 'none',
      },
    },
    h1: {
      ...text.heading,
      fontSize: 6,
    },
    h2: {
      ...text.heading,
      fontSize: 5,
    },
    h3: {
      ...text.heading,
      fontSize: 4,
    },
    h4: {
      ...text.heading,
      fontSize: 3,
    },
    h5: {
      ...text.heading,
      fontSize: 2,
    },
    h6: {
      ...text.heading,
      fontSize: 1,
    },
    img: {
      maxWidth: '100%',
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit',
      },
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit',
    },
    // ol: {},
    // ul: {},
    // blockquote: {},
    // hr: {},
    // em: {},
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0,
    },
    // tr: {},
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid',
    },
    // strong: {},
    // div: {}
  },
}
