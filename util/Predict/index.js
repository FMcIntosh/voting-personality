export default (personality) => {
  const parties = {
    national: {
      name: 'National',
      color: '#2c81b8',
      textColor: 'white',
    },
    labour: {
      name: 'Labour',
      color: '#d82c20',
      textColor: 'white',
    },
    green: {
      name: 'Green',
      color: '#00c760',
      textColor: 'white'
    },
    nzf: {
      name: 'New Zealand First',
      color: 'black',
      textColor: 'white',
    },
    act: {
      name: 'ACT',
      color: '#ffda37',
      textColor: '#063964',
    },
    maori: {
      name: 'Maori',
      color: 'black',
      textColor: '#bf0001',
    },
    top: {
      name: 'TOP',
      color: 'white',
      textColor: 'black',
    },
  }

  let party = '';
  console.log(personality.o)
  switch (personality.o) {
    case '1':
      party = 'national'
      break
    case '2':
      party = 'labour'
      break
    case '3':
      console.log("WHAT")
      party = 'nzf'
      break
    case '4':
      party = 'green'
      break
    case '5':
      party = 'top'
      break
    case '6':
      party = 'act'
      break
    case '6':
      party = 'maori'
      break
    default:
      party = 'national'
  }
  //TODO
  console.log(party)
  return parties[party]
}
