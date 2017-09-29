import React from 'react';
import styled from 'styled-components';
import Input from './Input';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import { makeStore, submit } from 'data/store'
import Button from 'material-ui/Button';
import Router from 'next/router';

const attributes = ["Openness", "Concientiousness", "Extraversion", "Agreeableness", "Neuroticism"];

class PersonalityForm extends React.Component {
  state = {
    o: '',
    c: '',
    e: '',
    a: '',
    n: ''
  };
  

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(submit(this.state))
    console.log(this.state)
    Router.replace('/')
  }

  render() {
    const { classes } = this.props;

    const style = {
      button: {
        margin: "20px 0;"
      }
    }

    return (
        <form noValidate onSubmit={this.handleSubmit} autoComplete="off">
          <Grid container direction="column" align="center">
          <TextField
            id="oppenness"
            label="Openness"
            value={this.state.o}
            onChange={this.handleChange('o')}
            margin="dense"
          />
          <TextField
            id="conscientiousness"
            label="Conscientiousness"
            value={this.state.c}
            onChange={this.handleChange('c')}
            margin="dense"
          />
          <TextField
            id="extraversion"
            label="Extraversion"
            value={this.state.e}
            onChange={this.handleChange('e')}
            margin="dense"
          />
          <TextField
            id="agreeableness"
            label="Agreeableness"
            value={this.state.a}
            onChange={this.handleChange('a')}
            margin="dense"
          />
          <TextField
            id="neuroticism"
            label="Neuroticism"
            value={this.state.n}
            onChange={this.handleChange('n')}
            margin="dense"
          />
          <Button raised style={style.button} color="accent" type="submit">Submit</Button>
          </Grid>
        </form>
      
    );
  }
}

export default PersonalityForm