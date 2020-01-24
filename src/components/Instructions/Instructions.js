import React from 'react'
import PropTypes from 'prop-types'

const Instructions = ({stage}) => {
  switch(stage) {
    case 'waiting':
      return <p>Tell us your numerical booking reference. Please speak clearly, saying one digit at a time.</p>
    case 'failed':
      return <h4>Sorry we were unable to find a booking for that reference! Please try again, or speak with the staff member on the reception desk for assistance.</h4>
    case 'success':
      return <h4>Great news! We were able to find your booking. Please find your booking details below</h4>
    case 'init':
    default:
      return <p>Click the button below to find your room number</p>
  }
}

Instructions.propTypes = {
  stage: PropTypes.string.isRequired,
}

export default Instructions
