import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 750px;
  margin: 2rem auto;
  padding: 2rem;
  box-shadow: 0px 10px 23px 0px rgba(0, 0, 0, 0.2);
  background-color: ${props => props.theme.primary};
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
`;

const ImagePlaceholder = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  background-color: black;
  position: relative;
`;

const AboutMeContainer = styled.div`
  flex: 8;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  height: 100%;
`;
const AboutMeText = styled.div`
  flex: 1;
  > h1 {
    color: purple;
    font-size: 3.2em;
  }
  > h3 {
    font-size: 1.5em;
  }
  > p {
    font-size: 18px;
  }
  > * {
    margin: 1rem 0;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  margin-top: 2rem;
  align-self: flex-end;
  width: fit-content;
  margin-right: 2rem;
  > span {
    font-size: 1.5em;
    border-bottom: 1px solid black;
    padding-bottom: 8px;
  }
`;

const IndexPage = props => {
  const { uri, pageContext } = props;
  return (
    <Layout location={uri} ctx={pageContext}>
      <SEO title="Home" />
      <Container>
        <ImageContainer>
          <ImagePlaceholder />
        </ImageContainer>
        <AboutMeContainer>
          <AboutMeText>
            <h1>BRIAN QIAN</h1>
            <h3>
              Self-taught developer focused on creating experiences for users
              and developers alike.
            </h3>
            <p>
              After finishing a bootcamp at UC Berkeley, I've spent the majority
              of my free time learning new technologies in web development. I'm
              a Javascript developer that's been working mostly in the React
              ecosystem but I've also dedicated time to being fluent in query
              languages, backend optimization, and devops concerns.
            </p>

            <p>
              Familiar tech: React, Typescript, Nextjs, Gatsby, Node, Express,
              MySQL, Postgres, MongoDB, GraphQL, Socket.io, styled-components.
            </p>
          </AboutMeText>

          <StyledLink to="/portfolio/">
            <span>View Portfolio > </span>
          </StyledLink>
        </AboutMeContainer>
      </Container>
    </Layout>
  );
};

export default IndexPage;
