import React from 'react';
import styled from 'styled-components';
import Input from './Input';

const attributes = ["Openness", "Concientiousness", "Extraversion", "Agreeableness", "Neuroticism"];

export default () => {
  const inputs = attributes.map(station => (
    <Input placeholder={station} id={station}/>
    ));
  
  return (
    <Wrapper>
      {inputs}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`