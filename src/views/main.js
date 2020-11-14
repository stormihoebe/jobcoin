import styled from "styled-components"
import { colors } from "../colors"
import { strings } from "../strings"
const { primaryText } = colors

export const Main = () => {
  return (
    <MainView>
      BASIC MAIN VIEW
    </MainView>
  )
}

const MainView = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  color: ${primaryText};
  font-weight: bolder;
  `