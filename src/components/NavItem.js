import React from "react";
import styled, { keyframes } from "styled-components";
import { Link } from "gatsby";

const colorText = keyframes`
to {
  background-size: 100% 100%;
}
`;

const Container = styled.div`
  position: relative;
  :hover {
    background: linear-gradient(darkorange, darkorange) white no-repeat 0 0;
    background-size: 0 100%;
    animation: ${colorText} 0.25s linear 1 backwards;
  }
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  color: white;
  background-color: black;
  ${Container} :hover & {
    mix-blend-mode: multiply;
  }
`;

function NavItem({ isActive, children, to }) {
  return (
    <Container isActive={isActive}>
      <StyledLink to={to}>{children}</StyledLink>
    </Container>
  );
}

export default NavItem;
