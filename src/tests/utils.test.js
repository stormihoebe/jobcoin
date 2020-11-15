import { transformHistory } from "../utils/chart_utils"

test('transformHistory', () => {
  const testHistory = [
    {
      "timestamp": "2020-11-12T19:49:52.489Z",
      "toAddress": "Alice",
      "amount": "50"
    },
    {
      "timestamp": "2020-11-12T19:49:52.497Z",
      "fromAddress": "Alice",
      "toAddress": "Bob",
      "amount": "12.5"
    },
    {
      "timestamp": "2020-11-14T22:03:31.699Z",
      "toAddress": "stormihoebe",
      "amount": "50"
    },
    {
      "timestamp": "2020-11-14T22:03:57.784Z",
      "fromAddress": "Alice",
      "toAddress": "Bob",
      "amount": "10"
    },
    {
      "timestamp": "2020-11-14T23:01:58.521Z",
      "fromAddress": "stormihoebe",
      "toAddress": "Bob",
      "amount": "2"
    },
    {
      "timestamp": "2020-11-14T23:03:40.286Z",
      "fromAddress": "Alice",
      "toAddress": "Bob",
      "amount": "5"
    },
    {
      "timestamp": "2020-11-14T23:08:31.536Z",
      "fromAddress": "stormihoebe",
      "toAddress": "Bob",
      "amount": "2"
    },
    {
      "timestamp": "2020-11-14T23:14:26.948Z",
      "fromAddress": "stormihoebe",
      "toAddress": "Bob",
      "amount": "2"
    },
    {
      "timestamp": "2020-11-14T23:18:33.106Z",
      "fromAddress": "stormihoebe",
      "toAddress": "Alice",
      "amount": "5"
    },
    {
      "timestamp": "2020-11-14T23:26:01.296Z",
      "fromAddress": "stormihoebe",
      "toAddress": "Bob",
      "amount": "1"
    }
  ]
  const expected = {
    "Alice": [
      {
        "x": 1605210592489,
        "y": 50
      },
      {
        "x": 1605210592497,
        "y": 37.5
      },
      {
        "x": 1605391437784,
        "y": 27.5
      },
      {
        "x": 1605395020286,
        "y": 22.5
      },
      {
        "x": 1605395913106,
        "y": 27.5
      }
    ],
    "Bob": [
      {
        "x": 1605210592497,
        "y": 12.5
      },
      {
        "x": 1605391437784,
        "y": 22.5
      },
      {
        "x": 1605394918521,
        "y": 24.5
      },
      {
        "x": 1605395020286,
        "y": 29.5
      },
      {
        "x": 1605395311536,
        "y": 31.5
      },
      {
        "x": 1605395666948,
        "y": 33.5
      },
      {
        "x": 1605396361296,
        "y": 34.5
      }
    ],
    "stormihoebe": [
      {
        "x": 1605391411699,
        "y": 50
      },
      {
        "x": 1605394918521,
        "y": 48
      },
      {
        "x": 1605395311536,
        "y": 46
      },
      {
        "x": 1605395666948,
        "y": 44
      },
      {
        "x": 1605395913106,
        "y": 39
      },
      {
        "x": 1605396361296,
        "y": 38
      }
    ]
  }

  const actual = transformHistory(testHistory)

  expect(expected).toEqual(actual)
})
