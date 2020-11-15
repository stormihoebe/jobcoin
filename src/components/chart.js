import { VictoryChart, VictoryLine } from 'victory'
import { victoryChartReadable } from "../utils/chart_utils"

export const HistoryGraph = ({ transactionHistory }) => {
  const data = victoryChartReadable(transactionHistory)
  const colors = ["#01c5c4", "#f39233", "#b8de6f", "#f1e189", "#ec5858", "#5c6e91"]
  return (
    <VictoryChart>
      {data.map((i, index) => {
        return (
          <VictoryLine
            keyEvent="x"
            key={i.name}
            data={i.data}
            name={i.name}
            style={{ data: { stroke: colors[index] || "black" } }}
            scale={{ x: "time", y: "linear" }}
          />
        )
      })}
    </VictoryChart>
  )
}