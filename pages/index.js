import React from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Card from 'components/Card';
import CardTitle from 'components/CardTitle';
import Button from 'components/Button';

import { green, darkOrange, darkGrey } from 'styles/colors';
import Link from 'next/link';

import { orange } from 'styles/colors';

export default () => (
  <Background>
    <Card>
      <CardTitle>Voting and Personality</CardTitle>
      <p>Research into the link between personality and voting has shown that there is correlation between your big five personality
                      and so on.
        </p>       
      <Button href="/personality">Get Started!</Button>
    </Card>
  </Background>
) 

const Button = ({ href, children}) => (
  <Link href={href}>
    <StyledLink>{children}</StyledLink>
  </Link>
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
