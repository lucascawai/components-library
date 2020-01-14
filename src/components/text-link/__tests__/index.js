import React from 'react'
import { TextLink } from '../index'
import { renderWithTheme } from '../../../test/helpers'
import 'jest-styled-components'

describe('TextLink', () => {
  it('renders correctly', () => {
    const component = renderWithTheme(<TextLink text="Test" onClick={jest.fn} color="red" />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
