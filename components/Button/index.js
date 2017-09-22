import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from 'material-ui/Button';

export default ({ href, as, children}) => (
    <Link href={href} as="personality">
      <StyledLink> 
        <Button raised color="primary">
          {children}
        </Button>
      </StyledLink>
    </Link>
)


const StyledLink = styled.a`
  text-decoration: none;
`
