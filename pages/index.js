import React from 'react';
import styled from 'styled-components';
import Header from 'components/Header';
import Card from 'components/Card';

import { orange } from 'styles/colors';

export default () => (
  <Background>
    <Card />
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
