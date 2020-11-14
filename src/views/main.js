import styled from "styled-components"
import { useState } from "react"
import { colors } from "../colors"
import { Card } from "../components/card"
import { PageHeader } from "../components/page_header"
import { Button } from "../styled_components/button"
import { Form } from "../styled_components/form"
const { primaryText, primary } = colors
const balance = 1234

const SendForm = () => {
  const [destinationAddress, setDestinationAddress] = useState('')
  const [amount, setAmount] = useState(0)

  const handleSend = (e) => {
    e.preventDefault()
    if (destinationAddress == "" || amount == 0) return
    //  send amount
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
  return (
    <MainView>
      <PageHeader currentAddress={currentAddress} logout={logout} />
      <div className="main">
        <div className="side-bar">
          <Card headerText="Jobcoin Balance">
            <p className="balance">{balance}</p>
          </Card>
          <Card headerText="Send Jobcoin">
            <SendForm></SendForm>
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