import styled from "styled-components"
import { colors } from "../colors"
const { primary, primaryText, accent } = colors

export const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 0;
  width: 100%;
  background: ${primary};
  color: ${primaryText};
  border: none;
  height: 35px;
  font-weight: bolder;
  font-size: medium;
  transition-duration: 0.2s;
  :hover{
    background-color: ${accent};
    color: white;
  }
`