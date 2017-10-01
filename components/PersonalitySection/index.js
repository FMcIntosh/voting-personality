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
    o: {
      value: '',
      error: false
    },
    c: {
      value: '',
      error: false
    },
    e: {
      value: '',
      error: false
    },
    a: {
      value: '',
      error: false
    },
    n: {
      value: '',
      error: false
    },
    formValid: false
  };


  handleChange = name => event => {
    return (event.target.value <= 100 && event.target.value >= 0)
      ? this.setState({
        [name]: { value: event.target.value },
      }, () => this.setState({ formValid: this.formIsValid(name, this.state[name]) }))

      : this.setState({
        [name]: { value: event.target.value, error: true }
      }, () => this.setState({ formValid: false }))


  };

  handleSubmit = (e) => {
    e.preventDefault()
    const personality = {}
    Object.entries(this.state).forEach(
      ([key, value]) => {
        if (key !== 'formValid') {
          personality[key] = value.value
        }
      })

    this.props.dispatch(submit(personality))
    Router.push('/result')
  }

  formIsValid = (name, value) => {
    if (value.value === '')
      return false

    let isValid = true;
    Object.entries(this.state).forEach(
      ([key, value]) => {
        if (key === name || key === 'formValid') {
        }
        else {
          if (value.error || value.value === '') {
            isValid = false;
          }
        }

      }
    );

    return isValid
  }

  render() {
    const { classes } = this.props;

    const style = {
      button: {
        margin: "20px 0"
      }
    }

    return (
      <form noValidate onSubmit={this.handleSubmit} autoComplete="off">
        <Grid container direction="column" align="center">
          <TextField
            error={this.state.o.error}
            id="oppenness"
            label={this.state.o.error ? "Value between 0-100" : "Openness"}
            value={this.state.o.value}
            onChange={this.handleChange('o')}
            margin="dense"
          />
          <TextField
            error={this.state.c.error}
            id="conscientiousness"
            label={this.state.c.error ? "Value between 0-100" : "Conscientiousness"}
            value={this.state.c.value}
            onChange={this.handleChange('c')}
            margin="dense"
          />
          <TextField
            error={this.state.e.error}
            id="extraversion"
            label={this.state.e.error ? "Value between 0-100" : "Extraversion"}
            value={this.state.e.value}
            onChange={this.handleChange('e')}
            margin="dense"
          />
          <TextField
            error={this.state.a.error}
            id="agreeableness"
            label={this.state.a.error ? "Value between 0-100" : "Agreeableness"}
            value={this.state.a.value}
            onChange={this.handleChange('a')}
            margin="dense"
          />
          <TextField
            error={this.state.n.error}
            id="neuroticism"
            label={this.state.n.error ? "Value between 0-100" : "Neuroticism"}
            value={this.state.n.value}
            onChange={this.handleChange('n')}
            margin="dense"
          />
          <Button
            raised
            style={style.button}
            color="accent"
            type="submit"
            disabled={!this.state.formValid}
          >
            Submit
          </Button>
        </Grid>
      </form>

    );
  }
}

export default PersonalityForm