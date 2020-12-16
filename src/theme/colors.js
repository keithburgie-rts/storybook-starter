/* Theme-aware properties that utilize colors:
  - color	
  - backgroundColor (bg)
  - borderColor
*/

/* 
  Add @theme-ui/color package to manipulate
  https://theme-ui.com/packages/color
*/
import { hexToRGBA } from '../lib/utils'

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
      get borders() {
        return hexToRGBA(this.text, 0.25)
      },
      get focus() {
        return hexToRGBA(this.primary, 0.25)
      },
    },
  },
}
