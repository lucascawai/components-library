import React from 'react'
import PropTypes from 'prop-types'
import { TextLink } from '../text-link'
import { makeStyles } from '@material-ui/core/styles'
import ArrowForward from '@material-ui/icons/ArrowForward'
import { theme } from 'theme'
import { ButtonWrapper, ContainerButton } from './style'

const useStyles = makeStyles({
  icon: {
    fontSize: theme.variables.spacer * 2,
    marginLeft: 10
  }
})

export const Button = ({ disabled, onClick, text, type = 'button', textLink = false, backgroundDisabled, icon }) => {
  const classes = useStyles()
  return (
    <ContainerButton>
      <ButtonWrapper
        backgroundDisabled={backgroundDisabled}
        variant="contained"
        onClick={onClick}
        disabled={disabled}
        type={type}
      >
        {text}
        {icon || <ArrowForward className={classes.icon} />}
      </ButtonWrapper>
      {textLink && <TextLink text={textLink.text} onClick={textLink.onClick} color={textLink.color} />}
    </ContainerButton>
  )
}

Button.propTypes = {
  background: PropTypes.string,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string,
  textLink: PropTypes.object,
  backgroundDisabled: PropTypes.bool,
  icon: PropTypes.children
}
