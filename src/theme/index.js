import { darken } from '@theme-ui/color'

import buttons from './buttons'
import colors from './colors'
import forms from './forms'
// import { layout } from './layout';
// import { nav } from './nav';
import { sizes } from './sizes'
import { space } from './space'
import { fonts, fontSizes, fontWeights, lineHeights, letterSpacings, text } from './typography'

export const theme = {
  space,
  sizes,
  breakpoints: ['40em', '56em', '64em'],
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  letterSpacings,
  buttons,
  text,
  colors,
  forms,
  radii: [0, 4],
  borders: [0, 1],
  borderWidths: [0, 1, 2, 4],
  borderStyles: [
    'none',
    'solid',
    'dashed',
    'dotted',
    'double',
    'groove',
    'ridge',
    'inset',
    'outset',
    'dotted solid double dashed',
  ],
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',
      // boxShadow: theme => `0 0 4px ${theme.colors.primary}`,
    },
  },
  links: {
    bold: {
      fontWeight: 'bold',
    },
    nav: {
      fontWeight: 'bold',
      color: 'inherit',
      textDecoration: 'none',
    },
  },

  // Everything outside of styles is accessed as variant
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
