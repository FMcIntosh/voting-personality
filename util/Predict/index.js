export default (personality) => {
  const parties = {
    national: {
      name: 'National',
      color: '#2c81b8',
      textColor: 'white',
      predictor: 1,
    },
    labour: {
      name: 'Labour',
      color: '#d82c20',
      textColor: 'white',
      predictor: 1
    },
    green: {
      name: 'Green',
      color: '#00c760',
      textColor: 'white',
      predictor: 1,
    },
    nzf: {
      name: 'New Zealand First',
      color: 'black',
      textColor: 'white',
      predictor: 1,
    },
    act: {
      name: 'ACT',
      color: '#ffda37',
      textColor: '#063964',
      predictor: 1,
    },
    maori: {
      name: 'Maori',
      color: 'black',
      textColor: '#bf0001',
      predictor: 1,
    },
    top: {
      name: 'TOP',
      color: 'white',
      textColor: 'black',
      predictor: 1,
    },
  }

  const { o, c, e, a, n } = personality;


  // oppenness equals liberal
  // Concientious equals conservative
  // Low

  // if highly agreeable, left and big, low right and small
  // a > 50
  // labour+2, green+1, national+1
  // a < 50
  // act+2, nzf+2, top+1, maori+1

  // if highly open left + small, low open right + big
  // highly extraverted - nzf a bit higher
  // High concientious = right
  // Highly neurotic - favour change ie not national

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
