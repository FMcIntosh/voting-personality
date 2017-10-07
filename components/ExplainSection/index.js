import React, { Component } from 'react';
import { Header, Paragraph } from 'components/Text';
import Party from 'components/Party';
import Button from 'material-ui/Button'
import Card, { CardHeader, CardMedia, CardContent, CardActions } from 'material-ui/Card';
import Collapse from 'material-ui/transitions/Collapse';
import Typography from 'material-ui/Typography'
import styled from 'styled-components'
import Grid from 'material-ui/Grid';
import Explain from './text';


export default class ResultCard extends Component {
  state = { expanded: false };

  handleExpandClick = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  render() {
    const { name, color, textColor, text } = this.props.party;

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

    // const text = `Based on your personality, we predict that you voted ${name} in the election`
    return (
      <Grid justify="center" align="center" direction="column" container>
        {!this.state.expanded && <div>
          <Button
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            Yes
          </Button>
          <Button
            onClick={this.handleExpandClick}
            aria-expanded={this.state.expanded}
            aria-label="Show more"
          >
            No
          </Button>
        </div>}
        <CardS>
          <Collapse in={this.state.expanded} transitionDuration="auto" unmountOnExit>
            <CardContent>
            <Typography paragraph type="body2">
            {true ? "That's awesome! But I probobably just got lucky. " + Explain: "Oh bummer! s" + Explain}
            </Typography>
            </CardContent>
          </Collapse>
        </CardS>
      </Grid>
    )
  }
}

const CardS = styled(Card) `
  width: 90%;

  @media (min-width: 500px) {
    width: 60%;
    background: green;
  }
`