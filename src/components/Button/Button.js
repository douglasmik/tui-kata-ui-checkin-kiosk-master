import React from 'react'
import PropTypes from 'prop-types'

const Button = ({stage, onclick}) => {
  const buttonText = stage === 'init' ? 'Check in now' : 'Start Again'

  return (
    <button onClick={onclick}>
      {buttonText}
    </button>
  )
}

Button.propTypes = {
  stage: PropTypes.string.isRequired,
}

export default Button
