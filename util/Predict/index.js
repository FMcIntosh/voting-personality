export default (personality) => {
  const parties = {
    national: {
      name: 'National',
      color: 'blue',
      textColor: 'white',
    },
    labour: {
      name: 'Labour',
      color: 'red',
      textColor: 'white,'
    },
    green: {
      name: 'Green',
      color: 'green',
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
      textColor: 'white',
    },
    top: {
      name: 'TOP',
      color: 'black',
      textColor: 'white',
    },
  }

  let party = '';
  switch (personality.o) {
    case 1:
      party='act'
      break
    case 2:
      party='nzf'
      break
    default:
      party='national'
  }
  //TODO
  return parties[party]
}
