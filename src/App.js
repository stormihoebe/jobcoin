import React from "react";
import { useState } from 'react'
import './App.css'
import { getCurrentAddress, handleLogout } from './utils/session_utils'
import { Login } from './views/login'
import { Main } from './views/main'

const App = () => {
  const [currentAddress, setCurrentAddress] = useState(getCurrentAddress())
  const logout = () => {
    setCurrentAddress(null)
    handleLogout()
  }
  return (
    <div className="App">
      {currentAddress != null ? <Main logout={logout} currentAddress={currentAddress} /> : <Login setCurrentAddress={setCurrentAddress} />}
    </div>
  )
}

export default App
