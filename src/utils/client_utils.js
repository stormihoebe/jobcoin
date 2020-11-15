import axios from 'axios'
const url = 'http://jobcoin.gemini.com/errant-clear/api'

export const getBalance = async (address) => {
  // const { data } = await axios(`${url}/addresses/${address}`)
  // return parseInt(data.balance)
  return 50
}


export const getHistory = async () => {
  // const { data } = await axios(`${url}/transactions`)
  // return data
  // var str = JSON.stringify(data, null, 2); // spacing level = 2
  // console.log(str)

  return []
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
