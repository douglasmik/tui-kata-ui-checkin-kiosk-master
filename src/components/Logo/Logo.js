import React from 'react'
import PropTypes from 'prop-types'

import logo from '../../logo.jpg';
// import styles from './Logo.css'

const Logo = ({stage}) => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />

    </div>
  )
}

Logo.propTypes = {
  stage: PropTypes.string.isRequired,
}

export default Logo
