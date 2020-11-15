import axios from 'axios'
const url = 'http://jobcoin.gemini.com/errant-clear/api'

export const getBalance = async (address) => {
  const { data } = await axios(`${url}/addresses/${address}`)
  return parseFloat(data.balance)
}

export const getHistory = async () => {
  const { data } = await axios(`${url}/transactions`)
  return data
}

export const postJobcoinTransaction = async (toAddress, fromAddress, amount) => {
  try {
    const resp = await axios({
      method: 'post',
      url: `${url}/transactions?fromAddress=${fromAddress}&toAddress=${toAddress}&amount=${amount}`,
    })
    return resp
  } catch (err) {
    alert("Something Went Wrong Processing Your Request. Try Again.")
    return null;
  }
}
