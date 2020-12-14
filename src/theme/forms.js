export default {
  label: {
    fontSize: 1,
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'gray',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (theme) => `0 0 0 2px ${theme.colors.primary}`,
      outline: 'none',
    },
  },
  select: {
    borderColor: 'gray',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (theme) => `0 0 0 2px ${theme.colors.primary}`,
      outline: 'none',
    },
  },
  textarea: {
    borderColor: 'gray',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (theme) => `0 0 0 2px ${theme.colors.primary}`,
      outline: 'none',
    },
  },
  slider: {
    bg: 'muted',
  },
}
