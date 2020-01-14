import styled, { css } from 'styled-components'
import { variables } from '../../theme/variables'
import { colors } from '../../theme/colors'

export const StyledTextLink = styled.h5`
  font-family: 'CenturyGothicBold', sans serif;
  text-decoration: underline;
  cursor: pointer;
  color: ${({ color }) => (color ? color : colors.blue900)};
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down('md')} {
        margin-top: ${variables.spacer * 2}px 0;
        font-size: 12px;
      }
    `};
`
