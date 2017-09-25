import React from 'react';
import styled from 'styled-components';

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
    min-height: 70vh;
    padding: 60px 40px; 
    box-sizing: border-box;
`