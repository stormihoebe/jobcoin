import styled from "styled-components"
import { colors } from "../colors"
const { primary } = colors

export const Form = styled.form`
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
`