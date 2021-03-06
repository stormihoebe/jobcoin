import styled from "styled-components"
import { Button } from "../styled_components/button"
import { Form } from "../styled_components/form"
import { colors } from "../colors"
import { strings } from "../strings"
import logo from "../assets/logo.svg"

import { Card } from "../components/card"
import { useState } from "react"
import { handleLogin } from "../utils/session_utils"
const { primaryText } = colors
const { welcomeText } = strings.login

export const Login = ({ setCurrentAddress }) => {
  const [jobcoinAddress, setJobcoinAddress] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (jobcoinAddress === "") return
    // local storage for persistance 
    handleLogin(jobcoinAddress)
    setCurrentAddress(jobcoinAddress)
  }
  return (
    <LoginView>
      <div className="wrapper">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <Card headerText={welcomeText}>
          <Form onSubmit={handleSubmit}>
            <label>Jobcoin Address</label>
            <input type="text" autoFocus={true} value={jobcoinAddress} onChange={e => setJobcoinAddress(e.target.value)}></input>
            <Button>Sign In</Button>
          </Form>
        </Card>
      </div>
    </LoginView>
  )
}

const LoginView = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  color: ${primaryText};
  font-weight: bolder;
  .wrapper {
    width: 40%;
    min-width: 400px;
  }
  .logo {
    display:flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 2em;
    img {
      width: 100px;
    }
  }
`