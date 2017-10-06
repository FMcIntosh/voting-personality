import React from 'react';
import styled from 'styled-components';
import withRedux from "next-redux-wrapper"
import { makeStore, submit } from 'data/store'

import Card from 'components/Card';
import { Header } from 'components/Text';
import Party from 'components/Party';
import ProfileSection from 'components/ProfileSection';
import AppBar from 'components/AppBar';
import MuiThemeWrapper from 'hoc/MuiThemeWrapper';
import Predict from 'util/Predict';
import ResultCard from 'components/ResultCard';
import ExplainSection from 'components/ExplainSection';
import Grid from 'material-ui/Grid';

const Result = ({ party }) => (
  <Background>
    <AppBar>Results</AppBar>
    <Grid justify="center" align="center" direction="column" container>
    <Card>
      <Header gutter>Results</Header>
      <ResultCard
        party={party}
      />
    </Card>
    <Header gutter>Was I right?</Header>
    <ExplainSection party={party}/>
    </Grid>
  </Background>
)

Result.getInitialProps = ({ store }) => {
  // component will read from store's state when rendered
  const party = Predict(store.getState().personality)
  return { party }
};



export default withRedux(makeStore, null)(MuiThemeWrapper(Result));

const Background = styled.div`
  margin-top: 40px;
  width: 100%;
`
