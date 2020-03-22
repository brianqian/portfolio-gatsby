import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import Helmet from 'react-helmet';
import React, { useState, useLayoutEffect } from 'react';
import { theme } from '../utils/theme';
import { darkTheme } from '../utils/darkTheme';
import Footer from './footer';
import desk from '../img/desk.png';
import deskNight from '../img/deskNight.png';
import newYork from '../img/newyork.png';
import newYorkNight from '../img/newyorknight.png';

const GlobalStyle = createGlobalStyle`


body, html{
  font-family: 'Work Sans';
  max-width: 100vw;
  background: ${p => p.theme.bgColor};
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
  transition: 0.5s ease-in;

  background: no-repeat center url(${p => p.bg});
  /* background-size: contain; */
  color: ${p => p.theme.strokeColor};

  @media all and (max-width: 1200px) {
    padding: 0;
  }
`;
const Layout = props => {
  const { children, location, ctx } = props;
  const [isDark, setIsDark] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useLayoutEffect(() => {
    const isDarkBool = localStorage.getItem('isDark');
    const setInitialState = async () => {
      await setIsDark(JSON.parse(isDarkBool));
      setIsLoaded(true);
    };
    setInitialState();
  }, []);

  const toggleDark = () => {
    localStorage.setItem('isDark', !isDark);
    setIsDark(!isDark);
  };

  const generateBgImg = () => {
    const isPortfolioPage = !!location.split('/')[1];
    if (isDark && isPortfolioPage) {
      return deskNight;
    }
    if (!isDark && isPortfolioPage) {
      return desk;
    }
    if (isDark && !isPortfolioPage) {
      return newYorkNight;
    }
    if (!isDark && !isPortfolioPage) {
      return newYork;
    }
    return console.error('generate bg img error');
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
      {isLoaded && <Content bg={generateBgImg()}>{children}</Content>}
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
