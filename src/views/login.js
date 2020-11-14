import styled from "styled-components"
import { Button } from "../styled_components/button"
import { colors } from "../colors"
import { strings } from "../strings"

import { Card } from "../components/card"
const { primary, primaryText } = colors
const { welcomeText } = strings.login

export const Login = () => {
  return (
    <LoginView>
      <div className="wrapper">
        <div className="logo">
          logo here
        </div>
        <Card headerText={welcomeText}>
          <form>
            <label>Jobcoin Address</label>
            <input></input>
            <Button>Sign In</Button>
          </form>
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
  
  form {
    display: flex;
    flex-direction: column;
    label {
      width: 100%;
      display: block;
      font-size: small;
    }
    input {
      height: 30px;
      border: 1px solid ${primary};
      border-radius: 3px;
      margin-bottom: 18px;
      margin-top: 5px;
    }
  }
`