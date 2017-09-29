export default (personality) => {
  const parties = {
    national: {
      name: 'National',
      color: 'blue'
    },
    labour: {
      name: 'Labour',
      color: 'red'
    },
    green: {
      name: 'Green Party',
      color: 'green'
    },
    nzf: {
      name: 'New Zealand First',
      color: 'black',
      textColor: 'white'
    },
    act: {
      name: 'ACT',
      color: 'black'
    },
    maori: {
      name: 'ACT',
      color: 'black'
    },
    top: {
    },
  }

  const party = 'national'
  //TODO
  return parties[party]
}
