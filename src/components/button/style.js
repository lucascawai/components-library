import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { theme } from '../../theme'

export const ContainerButton = styled.div`
  width: 256px;
  text-align: center;
  margin-top: 20px;

  ${theme.breakpoints.down('md')} {
    width: 100%;
  }
`

export const ButtonWrapper = styled(Button)`
  float: none;
  border-radius: ${theme.variables.spacer * 4}px !important;
  background: ${({ disabled, backgroundDisabled }) =>
    disabled ? (backgroundDisabled ? theme.colors.blue800 : theme.colors.grey500) : theme.colors.pink900} !important;
  width: ${theme.variables.spacer * 32}px;
  height: ${theme.variables.spacer * 6}px;
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
  font-size: ${theme.variables.spacer * 2}px;
  margin: 0;
  font-weight: bold;
  color: ${props => (props.visuals ? props.visuals.buttonTextColor : theme.colors.white100)};
`
