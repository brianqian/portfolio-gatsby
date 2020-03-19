import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import React from 'react';
import { theme } from '../utils/theme';
import Footer from './footer';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Open+Sans|Work+Sans&display=swap');
body, html{
  font-family: 'Work Sans';
  max-width: 100vw;
  background-color: ${p => p.theme.backgroundColor};
  color: ${p => p.theme.strokeColor};
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  cursor: pointer;
  transition: .25s ease-in;
  :visited {
    color: ${p => p.theme.strokeColor};
  }
}
`;

const Content = styled.main`
  padding: 0 9%;
  min-height: calc(100vh - 50px);
  margin-bottom: 2rem;

  @media all and (max-width: 1200px) {
    padding: 0;
  }
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Content>{children}</Content>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
