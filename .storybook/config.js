import { configure, addDecorator } from '@storybook/react'
import Theme from '../packages/theme/breakpoints'
import React from 'react'
import { ThemeProvider } from 'styled-components'

const req = require.context('../packages', true, /\.stories\.(js|jsx)$/)

configure(() => {
  req.keys().forEach(filename => req(filename))
}, module)

addDecorator(story => <ThemeProvider theme={Theme}>{story()}</ThemeProvider>)
configure(loadStories, module)
