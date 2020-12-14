import React from 'react'
import { FontFamily } from '@theme-ui/style-guide'
import { Text, Box } from 'theme-ui'
import { Icon, TextLink } from '../../components/atoms'
import { SearchIcon } from '../../components/atoms/Icon/SearchIcon'

export const FontFamilies = () => (
  <>
    <Text
      sx={{
        mb: 4,
        fontFamily: 'heading',
        fontWeight: 'heading',
        lineHeight: 'heading',
      }}
    >
      Heading Font: <FontFamily name="heading" />
    </Text>
    <Text
      sx={{
        mb: 4,
        fontFamily: 'body',
        fontWeight: 'body',
        lineHeight: 'body',
      }}
    >
      Body Font: <FontFamily name="body" />
    </Text>
    <Text
      sx={{
        mb: 4,
        fontFamily: 'monospace',
        fontWeight: 'monospace',
        lineHeight: 'monospace',
      }}
    >
      Monospace Font: <FontFamily name="monospace" />
    </Text>
    <Text as="span" sx={{ fontWeight: 'body' }}>
      Body Weight
    </Text>{' '}
    |{' '}
    <Text as="span" sx={{ fontWeight: 'heading' }}>
      Heading Weight
    </Text>{' '}
    |{' '}
    <Text as="span" sx={{ fontWeight: 'bold' }}>
      Bold Weight
    </Text>{' '}
    |{' '}
    <Text as="span" sx={{ letterSpacing: 'normal' }}>
      Normal Spacing
    </Text>{' '}
    |{' '}
    <Text as="span" sx={{ letterSpacing: 'caps' }}>
      Caps Spacing
    </Text>
    <Box sx={{ mb: 4 }} />
    <TextLink href="#">
      <Icon src={SearchIcon} /> Link with Icon
    </TextLink>{' '}
    | <TextLink href="#" value="text link as value" />
  </>
)
