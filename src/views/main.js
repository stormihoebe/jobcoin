import styled from "styled-components"
import { useState, useEffect } from "react"

import { colors } from "../colors"
import { Card } from "../components/card"
import { PageHeader } from "../components/page_header"
import { Button } from "../styled_components/button"
import { Form } from "../styled_components/form"
import { getBalance, getHistory, postJobcoinTransaction } from "../utils/client_utils"
const { primaryText, primary } = colors

const SendForm = ({ sendCoin }) => {
  const [destinationAddress, setDestinationAddress] = useState("")
  const [amount, setAmount] = useState(0)

  const handleSend = async (e) => {
    e.preventDefault()
    if (destinationAddress == "" || amount == 0) return
    await sendCoin(destinationAddress, amount)
    // reset form
    setAmount(0)
    setDestinationAddress("")
  }
  return (
    <Form onSubmit={handleSend}>
      <label>Destination Address</label>
      <input type="text" autoFocus={true} value={destinationAddress} onChange={e => setDestinationAddress(e.target.value)}></input>
      <label>Amount to send</label>
      <input type="number" value={amount} onChange={e => setAmount(e.target.value)}></input>
      <Button>Send Jobcoins</Button>
    </Form>
  )
}

export const Main = ({ currentAddress, logout }) => {
  const [err, setError] = useState(null)
  const [balance, setBalance] = useState(0)
  const [transactionHistory, setTransactionHistory] = useState([])

  const sendCoin = async (toAddress, amount) => {
    const resp = await postJobcoinTransaction(toAddress, currentAddress, amount)
  }

  useEffect(async () => {
    const newBalance = await getBalance(currentAddress)
    setBalance(newBalance)
    const transactions = await getHistory()
    setTransactionHistory(transactions)
  }, [])

  return (
    <MainView>
      <PageHeader currentAddress={currentAddress} logout={logout} />
      <div className="main">
        <div className="side-bar">
          <Card headerText="Jobcoin Balance">
            <p className="balance">{balance}</p>
          </Card>
          <Card headerText="Send Jobcoin">
            <SendForm sendCoin={sendCoin}></SendForm>
          </Card>
        </div>
        <div className="graph-viewer">Jobcoin History Graph</div>
      </div>
    </MainView>
  )
}

const MainView = styled.div`
  color: ${primaryText};
  font-weight: bolder;
  .main {
    display:flex;
    justify-content: center;
    padding: 40px;
    .side-bar {
      display:flex;
      flex-direction: column;
      margin-right: 20px;
      width: 400px;
      .balance {
        text-align: center;
      }
    }
    .graph-viewer {
      width: 75%;
      border: 1px solid ${primary};
      border-radius: 5px;
      padding: 20px 40px;
    }
  }
  `