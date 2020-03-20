import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.nav`
  width: 100px;
  margin-left: 5rem;
  display: flex;
  align-items: center;
  color: white;
  font-size: 1.3em;
  font-family: 'Inconsolata';
  span {
    white-space: nowrap;
    color: white;
    text-decoration: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

function Nav({ location, ctx }) {
  const title = ctx?.title;
  const parentPage = location?.split('/')[1];
  return (
    <Container>
      <StyledLink to="/">
        <img src="/img/folder.svg" width="30px" />
      </StyledLink>
      <span>/</span>
      <StyledLink to="/portfolio">
        {!!parentPage && <span>{parentPage}/</span>}
      </StyledLink>
      {!!title && <span>{title}</span>}
    </Container>
  );
}

export default Nav;
