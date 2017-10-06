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
    padding: 50px 40px;
    box-sizing: border-box;
    width: 100%;
`