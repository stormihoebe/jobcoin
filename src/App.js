import React from "react";
import { useState } from 'react'
import './App.css'
import { getCurrentAddress } from './utils/session_utils'
import { Login } from './views/login'
import { Main } from './views/main'

const App = () => {
  const [currentAddress, setCurrentAddress] = useState(getCurrentAddress())
  return (
    <div className="App">
      {currentAddress ? <Main /> : <Login setCurrentAddress={setCurrentAddress} />}
    </div>
  )
}

export default App
