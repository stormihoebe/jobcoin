import styled from "styled-components"
import { colors } from "../colors"
const { primary } = colors

export const Card = ({ headerText, children }) => {
  return (
    <CardStyle>
      <div className="header">
        {headerText}
      </div>
      <div className="body">
        {children}
      </div>
    </CardStyle>
  )
}

const CardStyle = styled.div`
  border: 1px solid ${primary};
  border-radius: 5px;
  margin-bottom: 20px;
  .header {
    font-size: medium;
    text-align: center;
    height: 60px;
    border-bottom: 1px solid ${primary};
    display:flex;
    justify-content: center;
    align-items: center;
    padding: 1em;
  }
  .body {
    justify-content: center;
    align-items: center;
    margin: 50px;
  }
`