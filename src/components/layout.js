import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import React, { useState, useLayoutEffect } from 'react';
import { theme } from '../utils/theme';
import { darkTheme } from '../utils/darkTheme';
import Footer from './footer';

const GlobalStyle = createGlobalStyle`

body, html{
  font-family: 'Work Sans';
  max-width: 100vw;
  transition: .25s ease-in;
  background-color: ${p => p.theme.backgroundColor};
  color: ${p => p.theme.strokeColor};
}
ul{
  list-style-position: inside;
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
  display: flex;
  justify-content: center;
  align-items: center;

  @media all and (max-width: 1200px) {
    padding: 0;
  }
`;
const Layout = props => {
  const { children, location, ctx } = props;
  const [isDark, setIsDark] = useState(false);

  useLayoutEffect(() => {
    const isDarkBool = localStorage.getItem('isDark');
    setIsDark(JSON.parse(isDarkBool));
  }, []);

  const toggleDark = () => {
    localStorage.setItem('isDark', !isDark);
    setIsDark(!isDark);
  };
  return (
    <ThemeProvider theme={isDark ? darkTheme : theme}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans|Inconsolata|Work+Sans&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <GlobalStyle />
      <Content>{children}</Content>
      <Footer
        toggle={toggleDark}
        isDark={isDark}
        location={location}
        ctx={ctx}
      />
    </ThemeProvider>
  );
};

export default Layout;
