import styled from 'styled-components'
import { theme } from '../../theme'

export const TextLinkWrapped = styled.h5`
  font-family: 'CenturyGothicBold', sans serif;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ color }) => (color ? color : theme.colors.blue900)};

  ${theme.breakpoints.down('md')} {
    margin-top: ${theme.variables.spacer * 2}px 0;
    font-size: 12px;
  }
`
