import React, {useState, useEffect} from 'react';
import SpeechRecognition from 'react-speech-recognition';
import {getBookings} from './api/checkBooking'

import Logo from './components/Logo/Logo';
import Button from './components/Button/Button';
import Instructions from './components/Instructions/Instructions';
import Details from './components/Details/Details'

import './App.css';

function App({
  startListening,
  stopListening,
  finalTranscript,
  browserSupportsSpeechRecognition
}) {
  //set state for App
  const [bookingState, setBookingState] = useState({
    journey: 'init',
    transcript: '',
    customer: []
  })
  const { journey, transcript, customer} = bookingState

  let updateBookingState = (status, transctipt, customerDetails) => {
    setBookingState({
      journey: status,
      transcript: transctipt,
      customer: customerDetails
    })
  }

  useEffect(() => {
    finalTranscript &&
      getBookings(finalTranscript).then(res => {

        if(res.length > 0){
          updateBookingState('success', finalTranscript, res)

          setTimeout(() => {
            stopListening()
            updateBookingState('init', '', [])  
          }, 20000)
        }
        else {
          updateBookingState('failed', finalTranscript, [])  
          startListening()
        }
      })
  }, [finalTranscript, startListening, stopListening])

  if (!browserSupportsSpeechRecognition) {
    return <h1 className='App'>Please use a supported browser, such as Google Chrome</h1>;
  }
  
  const handleResetSession = () => {
    updateBookingState('init', '', [])  
    stopListening()
  }

  const handleInitSession = () => {
    updateBookingState('waiting', '', [])  
    startListening()
  }

  const handleBtnClick = stage => {
    stage === 'init' ? handleInitSession() : handleResetSession()
  }

  return (
    <div className='App'>
      { /* display branding */ }
      <Logo stage={journey} />
      <h1>Check In</h1>

      { /* display instructional text */ }
      { transcript && <h2>Booking Reference: {transcript}</h2> }

      { /* display instructional text */ }
      <Instructions stage={journey} />

      { /* display booking details text */ }
      { customer.length > 0 && <Details {...customer[0]} /> }

      { /* display button to start/reset session */ }
      <Button onclick={() => handleBtnClick(journey)} stage={journey} />
    </div>
  );
}

export default SpeechRecognition({autoStart:false, continuous:false})(App);
