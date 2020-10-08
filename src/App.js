import React, { useState, useEffect } from 'react'
import './App.css'
import CloudBackground from './CloudBackground'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'



function App () {
  const [phoneNumber, setPhoneNumber] = useState(null)


  return (
    <div className='App'>
      <CloudBackground>
      
        <div style={{ position: 'relative', textAlign: 'center' }}>
          <h1 className='title'>Zen Caller</h1>
          <div style={{ position: 'relative' }}>
            <PhoneInput
              country={'us'}
              value={phoneNumber}
              onChange={phone => setPhoneNumber( phoneNumber + phone)}
            />
          </div>
        </div>
      </CloudBackground>
    </div>
  )
}

export default App
