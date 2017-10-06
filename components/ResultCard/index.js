import React, { Component } from 'react';
import { Header, Paragraph } from 'components/Text';
import Party from 'components/Party';
import Button from 'material-ui/Button'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography'
import styled from 'styled-components'


export default class ResultCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { name, color, textColor, text } = this.props.party;
    console.log ("WHY", text)
    const styles = {
      card: {
        width: '60%'
      },
      text: {
        fontSize: "16px",
        margin: 0,
        textAlign: "left",
      },
      actions: {
        justifyContent: "center"
      },
    }

    const textVote = `Based on your personality, we predict that you voted ${name} in the election`
    return (
      <CardS>
        <CardMedia>
          <Party
            name={name}
            color={color}
            textColor={textColor}
          />
        </CardMedia>
        <CardContent>
          <Paragraph style={styles.text}>
            {textVote}
          </Paragraph>

        </CardContent>
        <CardActions disableActionSpacing style={styles.actions}>
          <Button
            color="accent"
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            Why is this?
            </Button>
        </CardActions>
        <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph type="body2">
              {text}
            </Typography>
          </CardContent>
        </Collapse>
      </CardS>
    )
  }
}

const CardS = styled(Card) `
  width: 60%;

 
`