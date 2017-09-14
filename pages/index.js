import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Card from 'components/Card';
import { green, darkOrange, darkGrey } from 'styles/colors';
import Link from 'next/link'

import { orange } from 'styles/colors';

export default () => (
  <Background>
    <Card>
      <Title>Voting and Personality</Title>
      <p>Research into the link between personality and voting has shown that there is correlation between your big five personality
                      and so on.
        </p>       
      <Link href="/personality">
        <StyledLink>Get Started!</StyledLink>
      </Link>
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

const Title = styled.h2`
    color: ${darkGrey};
`

const StyledLink = styled.a`
    padding: 0 20px;
    border-radius: 20px;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${green};
    color: white;
`

const Paragraph = styled.p`
`