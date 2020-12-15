/* Theme-aware properties that utilize colors:
  - color	
  - backgroundColor (bg)
  - borderColor
*/

/* 
  Add @theme-ui/color package to manipulate
  https://theme-ui.com/packages/color
*/

export const hexToRGBA = (hex, alpha) => {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16)

  if (alpha) {
    return 'rgba(' + r + ', ' + g + ', ' + b + ', ' + alpha + ')'
  } else {
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
  }
}

export default {
  text: '#000000',
  background: '#ffffff',
  primary: '#0077cc',
  secondary: '#3300cc',
  accent: '#44cc33',
  highlight: '#FF11cc',
  muted: '#f6f6f6',
  links: '#3300cc',
  get borders() {
    return hexToRGBA(this.text, 0.25)
  },
  get focus() {
    return hexToRGBA(this.primary, 0.25)
  },
  modes: {
    dark: {
      text: '#ffffff',
      background: '#000000',
      primary: '#00ccff',
      secondary: '#0099cc',
      muted: '#111111',
      links: '#00ccff',
    },
  },
}
