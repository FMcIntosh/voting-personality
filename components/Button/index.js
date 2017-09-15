import React from 'react';
import styled from 'styled-components';
import { green } from 'styles/colors';
import Link from 'next/link';

export default ({ href, as, children}) => {
  console.log(as);
  return (
    <Link href={href} as="personality">
      <StyledLink>{ children }</StyledLink>
    </Link>
  )
}

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