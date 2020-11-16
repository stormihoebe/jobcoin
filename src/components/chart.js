import styled from "styled-components"
import { VictoryChart, VictoryLine } from 'victory'
import { victoryChartReadable } from "../utils/chart_utils"
const chartColors = ["#01c5c4", "#f39233", "#b8de6f", "#f1e189", "#ec5858", "#5c6e91"]

const Legend = ({ data }) => {
  return (
    <div className="legend">
      {data.map((i, index) => {
        return <p key={i} style={{ color: chartColors[index] }}> {i.name}</p>
      })}
    </div>
  )
}

export const HistoryGraph = ({ transactionHistory }) => {
  const data = victoryChartReadable(transactionHistory)
  return (
    <ChartStyles>
      <h3>Address Balances over Time</h3>
      <Legend data={data} />
      <VictoryChart>
        {data.map((i, index) => {
          return (
            <VictoryLine
              keyEvent="x"
              key={i.name}
              data={i.data}
              name={i.name}
              style={{ data: { stroke: chartColors[index] || "black" } }}
              scale={{ x: "time", y: "linear" }}
            />
          )
        })}
      </VictoryChart>
    </ChartStyles >
  )
}

const ChartStyles = styled.div`
  .legend {
    display: flex;
    justify-content: space-around;
  }
  `