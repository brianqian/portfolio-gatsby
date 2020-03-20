import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import IconContainer from './IconContainer';
import Tooltip from './Tooltip';
import Nav from './Nav';

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
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }
`;

const NavItems = styled(SocialItems)`
  color: white;
  text-transform: uppercase;
`;
const Footer = props => {
  const { isDark, toggle, location, ctx } = props;
  console.log(props);
  return (
    <Container>
      <Nav location={location} ctx={ctx} />
      <SocialItems>
        <Link to="/">
          <Tooltip text="Home">
            <IconContainer path="home.svg" size="25" />
          </Tooltip>
        </Link>
        <a
          href="https://github.com/brianqian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip text="Github">
            <IconContainer path="github.svg" size="25" />
          </Tooltip>
        </a>
        <a
          href="mailto:qian.brian@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip text="qian.brian@gmail.com">
            <IconContainer path="gmail.svg" size="25" />
          </Tooltip>
        </a>
        <a
          href="https://www.linkedin.com/in/brian-qian"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Tooltip text="LinkedIn">
            <IconContainer path="linkedin.svg" size="25" />
          </Tooltip>
        </a>
        <button type="button" onClick={toggle}>
          <Tooltip text={`${isDark ? 'Light' : 'Dark'} Mode`}>
            <IconContainer path={`${isDark ? 'sun' : 'moon'}.svg`} size="25" />
          </Tooltip>
        </button>
      </SocialItems>
    </Container>
  );
};

export default React.memo(Footer);
