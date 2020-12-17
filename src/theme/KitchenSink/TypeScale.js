import React from 'react'
import { Grid, Flex, Text } from 'theme-ui'
import { fontSizes } from '../partials/typography'

export const TypeScale = () => {
  return (
    <Grid
      sx={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        textAlign: 'center',
        lineHeight: 1,
      }}
    >
      {fontSizes.map((size, index) => (
        <Flex
          key={size}
          sx={{
            flexDirection: 'column',
            padding: 2,
            border: (theme) => `1px dotted ${theme.colors.borders}`,
          }}
        >
          <Text
            as="small"
            sx={{ borderBottom: (theme) => `1px solid ${theme.colors.borders}`, pb: 2, mx: 4 }}
          >
            {index}
          </Text>
          <Flex
            sx={{
              fontSize: index,
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              lineHeight: 1,
              pt: 2,
            }}
          >
            {size}px
          </Flex>
        </Flex>
      ))}
    </Grid>
  )
}
