import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Card from 'components/Card';
import CardTitle from 'components/CardTitle';
import Button from 'components/Button';
import PersonalitySection from 'components/PersonalitySection';

import { orange } from 'styles/colors';

export default () => (
  <Background>
    <Card>
      <CardTitle>Personality</CardTitle>
      <p>First you will need to complete an online test to score your personality. Complete one here:
        </p> 
        <p>Enter your score below</p>    
      <PersonalitySection />
      <Button href="/personal" as="personality">Next</Button>
    </Card>
  </Background>
) 

const Background = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${orange};
`
