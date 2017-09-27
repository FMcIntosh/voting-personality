import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';

const attributes = ["Openness", "Concientiousness", "Extraversion", "Agreeableness", "Neuroticism"];

class PersonalityForm extends React.Component {
  state = {
    oppenness: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <Grid container direction="column" align="center">
        <form noValidate autoComplete="off">
          <TextField
            id="oppenness"
            label="Openness"
            value={this.state.oppenness}
            onChange={this.handleChange('oppenness')}
            margin="dense"
          />
        </form>
      </Grid>
    );
  }
}

export default PersonalityForm