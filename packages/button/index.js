import React from 'react'
import PropTypes from 'prop-types'
import { TextLink } from '@lucascawai/text-link'
import { makeStyles } from '@material-ui/core/styles'
import ArrowForward from '@material-ui/icons/ArrowForward'
import { variables } from '@lucascawai/theme/variables'
import { WrapperButton, ContainerButton } from './style'

const useStyles = makeStyles({
  icon: {
    fontSize: variables.spacer * 2,
    marginLeft: 10
  }
})

export const Button = ({ disabled, onClick, text, type = 'button', textLink = false, backgroundDisabled, icon }) => {
  const classes = useStyles()
  return (
    <ContainerButton cy="button">
      <WrapperButton
        backgroundDisabled={backgroundDisabled}
        variant="contained"
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {text}
        {icon || <ArrowForward className={classes.icon} />}
      </WrapperButton>
      {textLink && <TextLink text={textLink.text} onClick={textLink.onClick} color={textLink.color} />}
    </ContainerButton>
  )
}

Button.prototype = {
  background: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  textLink: PropTypes.object,
  backgroundDisabled: PropTypes.bool,
  icon: PropTypes.children
}
