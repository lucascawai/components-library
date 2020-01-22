import React from 'react'
import PropTypes from 'prop-types'
import { TextLinkWrapped } from './style'

export const TextLink = ({ text, onClick, color }) => {
  return (
    <TextLinkWrapped color={color} onClick={onClick}>
      {text}
    </TextLinkWrapped>
  )
}

TextLink.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string
}
