import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import styles from './Details.module.css'

const Details = ({name, lastName, roomNumber, otherPassengers}) => {
  return (
    <div>
      <h3>{`${name} ${lastName}`}</h3>
      <h2>Room Number: {roomNumber}</h2>
      {
        (otherPassengers.length > 0) &&
        <Fragment>
          <p>Passengers</p>
          <ul className={styles.Passengers}>
            {otherPassengers.map(passenger => <li className={styles.Passenger} key={passenger}>{passenger}</li>)}
          </ul>
        </Fragment>
      }
    </div>
  )
}

Details.propTypes = {
  roomNumber: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  otherPassengers: PropTypes.array
}

export default Details
