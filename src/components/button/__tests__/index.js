import React from 'react'
import { Button } from '../index'
import { BackArrow } from '../../../assets/svg/back-arrow'
import { renderWithTheme } from '../../../test/helpers'
import 'jest-styled-components'

const props = {
  disabled: false,
  onClick: jest.fn(),
  text: 'Avançar',
  type: 'button',
  textLink: false,
  backgroundDisabled: false,
  icon: false
}

const propsTextLink = {
  disabled: false,
  onClick: jest.fn(),
  text: 'Avançar',
  type: 'button',
  textLink: 'Text link',
  backgroundDisabled: false,
  icon: false
}

describe('Button', () => {
  it('renders correctly', () => {
    const component = renderWithTheme(<Button {...props} />).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('renders correctly Button + ArronBack', () => {
    const component = renderWithTheme(
      <Button {...props}>
        <BackArrow />
      </Button>
    ).toJSON()
    expect(component).toMatchSnapshot()
  })

  it('renders correctly + TextLink', () => {
    const component = renderWithTheme(<Button {...propsTextLink} />).toJSON()
    expect(component).toMatchSnapshot()
  })
})
