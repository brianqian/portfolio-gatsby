import React from "react";
import styled from "styled-components";

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

const IconPlaceholder = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 100%;
  background-color: blue;
`;

const Footer = ({ siteTitle }) => (
  <Container>
    <Icons>
      <IconPlaceholder />
      <IconPlaceholder />
      <IconPlaceholder />
    </Icons>
  </Container>
);

export default Footer;
