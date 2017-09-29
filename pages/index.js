import React from 'react';
import styled from 'styled-components';
import { Title, Paragraph } from 'components/Text';
import Button from 'components/Button';
import { primary, lightPrimary } from 'styles/colors';
import MuiThemeWrapper from 'hoc/MuiThemeWrapper';
import { makeStore, submit } from 'data/store'
import withRedux from "next-redux-wrapper"

const text1 = "Ever wondered if your personality influences who you vote for? Research into "
+ "the link between personality and voting has shown that there is correlation between big five personality"
+ " and who you vote for";

const text2 = "Here's your chance to see if your personality might have influenced who you gave your vote to in New Zealand's 2017 general election"


const Index = () => (
  <Background>
    <Wrapper>
      <Title light>Guess My Vote</Title>
      <Paragraph light>{text1}</Paragraph> 
      <Paragraph light>{text2}</Paragraph>        
      <Button href="/personality">Get Started!</Button>
    </Wrapper>
  </Background>
) 

export default withRedux(makeStore, null)(MuiThemeWrapper(Index))

const Background = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    background: ${primary};
`
const Wrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
  @media (max-width: 500px) {
		width: 90%;
	}
}
`
