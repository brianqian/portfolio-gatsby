import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import IconContainer from "./IconContainer";
import Tooltip from "./Tooltip";
import NavItem from "./NavItem";

const Container = styled.footer`
  height: 50px;
  width: 100vw;
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  padding: 0 8rem;
`;

const SocialItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 200px;
`;

const NavItems = styled(SocialItems)`
  color: white;
  text-transform: uppercase;
`;

const Footer = props => {
  console.log(props);
  return (
    <Container>
      <NavItems>
        <NavItem to="/">Home</NavItem>
        <NavItem to="/portfolio">Portfolio</NavItem>
      </NavItems>
      <SocialItems>
        <a href="http://localhost:8000">
          <Tooltip text="Home">
            <IconContainer path="home.svg" size="25" />
          </Tooltip>
        </a>
        <a
          href="https://github.com/brianqian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip text="github">
            <IconContainer path="github.svg" size="25" />
          </Tooltip>
        </a>
        <a
          href="mailto:qian.brian@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContainer path="gmail.svg" size="25" />
        </a>
        <a
          href="https://www.linkedin.com/in/brian-qian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <IconContainer path="linkedin.svg" size="25" />
        </a>
      </SocialItems>
    </Container>
  );
};

export default Footer;
