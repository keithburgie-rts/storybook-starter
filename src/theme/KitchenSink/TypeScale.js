import React from 'react'
import { Grid, Flex, Text } from 'theme-ui'
import { fontSizes } from '../typography'

export const TypeScale = () => {
  return (
    <Grid
      sx={{
        gridTemplateColumns: `repeat(${fontSizes.length / 2}, 1fr)`,
        textAlign: 'center',
        lineHeight: 1,
      }}
    >
      {fontSizes.map((size, index) => (
        <Flex
          key={index}
          sx={{
            flexDirection: 'column',
            padding: 2,
            border: '1px dotted lightgray',
          }}
        >
          <Text as="small" sx={{ borderBottom: '1px solid lightgray', pb: 2, mx: 4 }}>
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
