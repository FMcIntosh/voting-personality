import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { green, darkOrange, darkGrey } from 'styles/colors';
import Link from 'next/link'

export default () => (
  <Wrapper>
    <Title>Voting and Personality</Title>
    <p>Research into the link between personality and voting has shown that there is correlation between your big five personality
                     and so on.
      </p>       
    <Link href="/about">
      <StyledLink>Get Started!</StyledLink>
    </Link>
    
  </Wrapper>
    )

const Wrapper = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 70vh;
    width: 50%;
    border-radius: 10px;
    box-shadow: 10px 10px 10px 0px rgba(0,0,0,.03);
    padding: 20px 40px; 
    box-sizing: border-box;
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