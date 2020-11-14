import styled from "styled-components"
import { Button } from "../styled_components/button"
import { colors } from "../colors"
const { primary, primaryText } = colors

export const Login = () => {
  return (
    <LoginView>
      <div className="wrapper">
        <div className="logo">
          logo here
        </div>
        <div className="login-area">
          <div className="header">
            Welcome! Sign in With Your Jobcoin Address
          </div>
          <div className="body">
            <form>
              <label>Jobcoin Address</label>
              <input></input>
              <Button>Sign In</Button>
            </form>
          </div>
        </div>

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
  .login-area {
    border: 1px solid ${primary};
    border-radius: 5px;
    .header {
      font-size: medium;
      text-align: center;
      height: 60px;
      border-bottom: 1px solid ${primary};
      display:flex;
      justify-content: center;
      align-items: center;
      padding: 1em 8em;
    }
    .body {
      justify-content: center;
      align-items: center;
      margin: 50px;
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
  }
`