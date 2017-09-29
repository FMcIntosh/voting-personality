import React from 'react';
import styled from 'styled-components';
import withRedux from "next-redux-wrapper"
import { makeStore, submit } from 'data/store'

import Card from 'components/Card';
import { Header } from 'components/Text';
import Button from 'components/Button';
import ProfileSection from 'components/ProfileSection';
import AppBar from 'components/AppBar';
import MuiThemeWrapper from 'hoc/MuiThemeWrapper';
import Predict from 'util/Predict';

const Result = () => (
  <Background>
    <AppBar>Results</AppBar>
    <Card>
      <Header>Results</Header>
      <ProfileSection />
      <Button href="/profile">Guess My Vote</Button>
    </Card>
  </Background>
) 

Result.getInitialProps = ({store}) => {
  // component will read from store's state when rendered
  console.log(Predict())
};



export default withRedux(makeStore, null)(MuiThemeWrapper(Result));

const Background = styled.div`
  margin-top: 40px;

`
