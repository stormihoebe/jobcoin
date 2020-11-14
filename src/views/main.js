import styled from "styled-components"
import { colors } from "../colors"
import { Card } from "../components/card"
import { PageHeader } from "../components/page_header"
const { primaryText, primary } = colors

export const Main = ({ currentAddress, logout }) => {
  return (
    <MainView>
      <PageHeader currentAddress={currentAddress} logout={logout} />
      <div className="body">
        <div className="side-bar">
          <Card headerText="Jobcoin Balance"></Card>
          <Card headerText="Send Jobcoin"></Card>
        </div>
        <div className="graph-viewer">Graph</div>
      </div>
    </MainView>
  )
}

const MainView = styled.div`
  color: ${primaryText};
  font-weight: bolder;
  .body {
    display:flex;
    justify-content: center;
    padding: 40px;
    .side-bar {
      display:flex;
      flex-direction: column;
      margin-right: 20px;
      width: 400px;
    }
    .graph-viewer {
      width: 75%;
      border: 1px solid ${primary};
      border-radius: 5px;
    }
  }
  `