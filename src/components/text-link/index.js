import React from 'react'
import PropTypes from 'prop-types'
import { StyledTextLink } from './style'

export const TextLink = ({ text, onClick, color }) => {
  return (
    <StyledTextLink color={color} onClick={onClick}>
      {text}
    </StyledTextLink>
  )
}

TextLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string
}
