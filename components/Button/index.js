import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Button from 'material-ui/Button';

export default ({ href, as, children, type }) => (
  <Link href={href} as={as}>
    <StyledLink>
      <Button raised color="accent" type={type}>
        {children}
      </Button>
    </StyledLink>
  </Link>
)


const StyledLink = styled.a`
  text-decoration: none;
  margin-top: 30px;
`
