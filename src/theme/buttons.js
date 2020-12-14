import { darken } from '@theme-ui/color'

export default {
  primary: {
    color: 'white',
    bg: 'primary',
    borderColor: 'primary',
    '&:hover, &:focus': {
      bg: darken('primary', 0.05),
    },
  },
  primaryOutline: {
    color: 'primary',
    bg: 'transparent',
    borderColor: 'primary',
    '&:hover, &:focus': {
      color: 'white',
      bg: 'primary',
    },
  },
  secondary: {
    color: 'white',
    borderColor: 'secondary',
    bg: 'secondary',
    '&:hover, &:focus': {
      bg: darken('secondary', 0.05),
    },
  },
  secondaryOutline: {
    color: 'secondary',
    bg: 'transparent',
    borderColor: 'secondary',
    '&:hover, &:focus': {
      color: 'white',
      bg: 'secondary',
    },
  },
}
