import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Card from 'components/Card';
import CardTitle from 'components/CardTitle';
import Button from 'components/Button';

import { green, darkOrange, darkGrey } from 'styles/colors';
import Link from 'next/link';

import { primary, lightPrimary } from 'styles/colors';

export default () => (
  <Background>
    <Wrapper>
      <CardTitle>Voting and Personality</CardTitle>
      <Paragraph>Research into the link between personality and voting has shown that there is correlation between your big five personality
                      and so on.
      </Paragraph> 
      <Paragraph>Here's your chance to see if your personality might influence who you voted for in New Zealand's 2017 general election.
      </Paragraph>        
      <Button href="/personality">Get Started!</Button>
    </Wrapper>
  </Background>
) 

const Background = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background: ${primary};
`
const Paragraph = styled.p`
  color: white;
  font-weight: 300;
  text-align: center;
`
const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
