import React from "react";
import styled from "styled-components";
import IconContainer from "./IconContainer";

const Container = styled.footer`
  height: 50px;
  width: 100vw;
  background-color: black;
  color: white;
  position: fixed;
  bottom: 0;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 200px;
  position: absolute;
  right: 10%;
`;

const Footer = () => (
  <Container>
    <Icons>
      <a
        href="https://github.com/brianqian"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconContainer path="github.svg" size="25" />
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
    </Icons>
  </Container>
);

export default Footer;
