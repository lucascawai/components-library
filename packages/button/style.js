import styled, { css } from 'styled-components'
import { Button } from '@material-ui/core'
import { variables } from '../theme/variables'
import { colors } from '../theme/colors'

export const ContainerButton = styled.div`
  width: 256px;
  text-align: center;
  margin-top: 20px;
  ${({ theme }) =>
    css`
      ${theme.breakpoints.down('md')} {
        width: 100%;
      }
    `};
`

export const WrapperButton = styled(Button)`
  float: none;
  border-radius: ${variables.spacer * 4}px !important;
  background: ${({ disabled, backgroundDisabled }) =>
    disabled ? (backgroundDisabled ? colors.blue800 : colors.grey500) : colors.pink900} !important;
  width: ${variables.spacer * 32}px;
  height: ${variables.spacer * 6}px;
  .MuiButton-label {
    color: white;
    font-weight: bold;
    text-transform: none;
    font-size: 16px;
    font-family: 'CenturyGothic', sans-serif;
  }
  .MuiButton-contained&:hover {
    background-color: #a50024 !important;
  }
`

export const ButtonTitle = styled.p`
  font-size: ${variables.spacer * 2}px;
  margin: 0;
  font-weight: bold;
  color: ${props => (props.visuals ? props.visuals.buttonTextColor : colors.white100)};
`
