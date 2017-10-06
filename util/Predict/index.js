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
  const strength = o / 100;

  let text = '';

  if (o > 50) {
    add(strength, [parties.green, parties.labour, parties.top]);

    text += "You are rank higher than 50 on oppenness, which research shows would suggest you are more likely to vote for socially liberal/left wing parties. "
  }

  if (o < 50) {
    add(strength, [parties.national, parties.act, parties.nzf])
    text += "You are rank lower than 50 on oppenness, which research shows would suggest you are more likely to vote for socially conservative/right wing parties. "
  }

  if (c < 50) {
    add(strength, [parties.green, parties.labour, parties.top])
    text += "You are rank lower than 50 on conscientiousness, which research shows would suggest you are more likely to vote for socially liberal/left wing parties. "
  }

  if (c > 50) {
    add(strength, [parties.national, parties.act, parties.nzf])
    text += "You are rank higher than 50 on conscientiousness, which research shows would suggest you are more likely to vote for socially conservative/right wing parties. "
  }

  if (a > 50) {
    add(strength / 2, [parties.green, parties.labour, parties.top, parties.act])
    text += "You are rank higher than 50 on agreeableness, which research shows would suggest you are somewhat more likely to vote for economically and socially liberal parties. "
  }

  if (a < 50) {
    add(strength / 2, [parties.national, parties.act, parties.nzf])
    "You are rank lower than 50 on agreeableness, which research shows would suggest you are somewhat more likely to vote for economically and socially conservative parties. "
  }

  text += "The strength of your personality on these factors will determine which party was predicted. "

  let max = parties.national;
  for (const [key, value] of Object.entries(parties)) {
    if (value.predictor > max.predictor) {
      max = value;
    }
  }

  max.text = text;
  return max;
}

const add = (strength, parties) => {
  parties.forEach((party) => (
    party.predictor += strength
  ), this)
}
