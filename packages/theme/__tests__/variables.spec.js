import breakpoints from '../breakpoints'
import { variables } from '../variables'
import { colors } from '../colors'

describe('tests variables', () => {
  it('test value of spacer', () => {
    expect(variables.spacer === 8).toEqual(true)
  })

  it('test value of colors #01163E', () => {
    expect(colors.blue900).toEqual('#01163E')
  })

  it('test value of colors #6600F7', () => {
    expect(colors.purple900).toEqual('#6600F7')
  })

  it('test value of colors #DE0C4B', () => {
    expect(colors.pink900).toEqual('#DE0C4B')
  })

  it('breakpoint less than 800 pixels', () => {
    expect(breakpoints.breakpoints.down('md')).toEqual('@media (max-width: 800px)')
  })

  it('breakpoint less than 800 pixels', () => {
    expect(breakpoints.breakpoints.up('md')).toEqual('@media (min-width: 800px)')
  })
})
