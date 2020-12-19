export const forms = {
  label: {
    fontSize: 1,
    fontWeight: 'bold',
  },
  input: {
    borderColor: 'borders',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (theme) => `0 0 0 2px ${theme.colors.primary}`,
      outline: 'none',
    },
  },
  select: {
    borderColor: 'borders',
    '&:focus': {
      borderColor: 'primary',
      boxShadow: (theme) => `0 0 0 2px ${theme.colors.primary}`,
      outline: 'none',
    },
  },
  textarea: {
    borderColor: 'borders',
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
