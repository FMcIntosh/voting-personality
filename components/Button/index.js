import React from 'react';
import styled from 'styled-components';
import { darkOrange } from 'styles/colors';

export default () => (
    <StyledButton>
        Get Started!
    </StyledButton>
) 

const StyledButton = styled.button`
    width: 40%;
    background: ${darkOrange};
    border-radius: 50%;
    height: 10%;
`