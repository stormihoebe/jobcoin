import logo from "../assets/logo.svg"
import userIcon from "../assets/logo.svg"
import styled from "styled-components"
import { colors } from "../colors"
const { primaryText, primary, accent } = colors

export const PageHeader = ({ currentAddress, logout }) => {
  return (
    <PageHeaderStyles>
      <div className="branding">
        <img className="logo" src={logo}></img>
        <p> Jobcoin Sender</p>
      </div>
      <div className="user-menu">
        <img className="icon" src={userIcon}></img>
        <p>Signed in ({currentAddress})</p>
        <p className="accent clickable" onClick={() => logout()}>Sign Out</p>
      </div>
    </PageHeaderStyles>
  )
}

const PageHeaderStyles = styled.div`
  color: ${primaryText};
  font-weight: bold;
  font-size: small;
  height: 40px;
  border-bottom: 1px solid ${primary};
  display: flex;
  justify-content: space-between;
  padding: 5px 40px;
  .accent {
    color: ${accent}
  }
  .clickable {
    cursor: pointer;
  }
  img {
    max-height: 80%;
  }
  .branding {
    display: flex;
    max-height: 100%;
    align-items: center;
    .logo {
      margin-right: 10px;
    }
  }
  .user-menu {
    display: flex;
    max-height: 100%;
    align-items: center;
    p:nth-child(2){
      display: inline-block;
      margin: 0 10px;
    }
  }
  `