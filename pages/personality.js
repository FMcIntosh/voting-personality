import React from 'react';
import styled from 'styled-components';

import Card from 'components/Card';
import Button from 'material-ui/Button';
import PersonalitySection from 'components/PersonalitySection';
import AppBar from 'components/AppBar';
import { Header, Paragraph } from 'components/Text';
import Typography from 'material-ui/Typography';
import MuiThemeWrapper from 'hoc/MuiThemeWrapper';
import { makeStore, submit } from 'data/store'
import withRedux from "next-redux-wrapper"

const Personality = ({ dispatch }) => (
  <Wrapper>
    <AppBar>Personality</AppBar>
    <Card>
      <Header gutter>Personality</Header>
      <Paragraph>First you will need to complete an online test to score your personality. Complete one here:
        </Paragraph> 
      <Button color="accent">
        <a href="https://www.truity.com/view/tests/big-five-personality">Personality Quiz</a>
      </Button>
        <Paragraph>Enter your score below</Paragraph>    
      <PersonalitySection dispatch={dispatch}/>
    </Card>
  </Wrapper>
)

export default withRedux(makeStore, null)(MuiThemeWrapper(Personality));

const Wrapper = styled.div`
    margin-top: 40px;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
