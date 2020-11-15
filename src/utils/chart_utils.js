const getCurrentValue = (username, acc) => {
  if (!acc[username]) {
    return 0
  }
  return acc[username][acc[username].length - 1].y
}

export const transformHistory = (transactions) => {
  if (transactions.length === 0) {
    return {}
  }
  const sorted = transactions.map(t => {
    return { ...t, epoch: Date.parse(t.timestamp) }
  }).sort((a, b) => a.epoch - b.epoch)
  const obj = sorted.reduce((a, i) => {
    let acc = { ...a }
    const { toAddress, amount, epoch: recordTime } = i
    // add value to toAddress current total
    if (acc[toAddress]) {
      acc = {
        ...acc,
        [toAddress]:
          [...acc[toAddress], { x: recordTime, y: getCurrentValue(toAddress, acc) + parseFloat(amount) }]
      }
    } else {
      // account doesn't exist in series yet, create it
      acc = { ...acc, [toAddress]: [{ x: recordTime, y: parseFloat(amount) }] }
    }
    if (i.fromAddress !== undefined) {
      const fromAddress = i.fromAddress
      // subtract value from fromAddress current total
      acc = {
        ...acc,
        [fromAddress]:
          [...acc[fromAddress], { x: recordTime, y: getCurrentValue(fromAddress, acc) - parseFloat(amount) }]
      }
    }
    return acc
  }, {})
  return obj
}

// transform dataset into something readable by chart library
// add set final node for current time
export const victoryChartReadable = (raw) => {
  if (raw.length === 0) {
    return []
  }
  const data = transformHistory(raw)
  return Object.keys(data).map((i) => {
    const currentEpochTime = Date.now()
    return {
      name: i,
      data: [...data[i], { ...data[i][data[i].length - 1], x: currentEpochTime }],
    }
  })
}