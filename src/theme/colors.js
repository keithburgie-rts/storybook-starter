/* Theme-aware properties that utilize colors:
  - color	
  - backgroundColor (bg)
  - borderColor
*/

/* 
  Add @theme-ui/color package to manipulate
  https://theme-ui.com/packages/color
*/

export default {
  text: '#000',
  background: '#fff',
  primary: '#07c',
  secondary: '#30c',
  accent: '#4c3',
  highlight: '#F1c',
  muted: '#f6f6f6',
  links: '#30c',

  modes: {
    dark: {
      text: '#fff',
      background: '#000',
      primary: '#0cf',
      secondary: '#09c',
      muted: '#111',
      links: '#0cf',
    },
    papaya: {
      // this color mode will fallback to the root color object
      // for values not defined here
      text: '#433',
      background: 'papayawhip',
    },
  },
}
