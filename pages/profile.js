import React from 'react';
import styled from 'styled-components';

import Card from 'components/Card';
import { Header } from 'components/Text';
import Button from 'components/Button';
import ProfileSection from 'components/ProfileSection';
import AppBar from 'components/AppBar';
import MuiThemeWrapper from 'hoc/MuiThemeWrapper';

const Personal = () => (
  <Background>
    <AppBar>Profile</AppBar>
    <Card>
      <Header>Profile</Header>
      <ProfileSection />
      <Button href="/profile">Guess My Vote</Button>
    </Card>
  </Background>
) 

export default MuiThemeWrapper(Personal);

const Background = styled.div`
  margin-top: 40px;

`
