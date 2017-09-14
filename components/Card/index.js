import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button';
import { green, darkOrange, darkGrey } from 'styles/colors';
import Link from 'next/link'

export default ({ children }) => (
  <Wrapper>
    {children}
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