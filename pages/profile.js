import React from 'react';
import styled from 'styled-components';

import Card from 'components/Card';
import { Title } from 'components/Text';
import Button from 'components/Button';
import ProfileSection from 'components/ProfileSection';
import AppBar from 'components/AppBar';
import MuiThemeWrapper from 'hoc/MuiThemeWrapper';

const Personal = () => (
  <Background>
    <AppBar>Profile</AppBar>
    <Card>
      <Title>Profile</Title>
      <ProfileSection />
      <Button href="/profile">Next</Button>
    </Card>
  </Background>
) 

export default MuiThemeWrapper(Personal);

const Background = styled.div`
  margin-top: 40px;
  min-height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;

`
