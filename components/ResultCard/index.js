import React from 'react';
import {Header, Paragraph} from 'components/Text';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Party from 'components/Party';
import Button from 'material-ui/Button'


export default ({ party }) => {
 
  const {name, color, textColor} = party;
  
  const styles = {
    card: {
      width: 275,
    },
    text: {
      fontSize: "16px",
      margin: 0,
      textAlign: "left",
      color: textColor
    }
  }

  const text= `Based on your personality, we predict that you voted ${name} in the election`

  return (
    <Card style={styles.card}>
      <CardMedia>
      <Party
        name={name}
        color={color}
        textColor={textColor}
      />
      </CardMedia>
      <CardContent>
        <Paragraph style={styles.text}>
            {text}
        </Paragraph>

       </CardContent>
    </Card>
  )
}