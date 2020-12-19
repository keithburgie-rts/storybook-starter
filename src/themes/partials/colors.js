/* Theme-aware properties that utilize colors:
  - color	
  - backgroundColor (bg)
  - borderColor
*/

/* 
  Add @theme-ui/color package to manipulate
  https://theme-ui.com/packages/color
*/
import { hexToRGBA } from '../../lib/utils'

/**
 * REQUIRED THEME COLORS:
 * --------------------------
 * text:	Body foreground color
 * background:	Body background color
 * primary:	Primary brand color for links, buttons, etc.
 * secondary:	A secondary brand color for alternative styling
 * accent:	A contrast color for emphasizing UI
 * highlight:	a background color for highlighting text, focus, etc.
 * muted:	A faint color for backgrounds, borders, and accents
 */

export const colors = {
  text: '#000000',
  background: '#ffffff',
  primary: '#0571cc',
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
      accent: '#44cc33',
      highlight: '#FF11cc',
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
