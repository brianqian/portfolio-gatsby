import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Container = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  padding-top: 10%;
  flex: 1;
  position: relative;
`;

const ImagePlaceholder = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 100%;
  background-color: black;
  position: absolute;
  right: 50px;
`;

const AboutMeContainer = styled.div`
  flex: 2;
  padding-top: 10%;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <ImageContainer>
        <ImagePlaceholder />
      </ImageContainer>
      <AboutMeContainer>
        <h1>BRIAN QIAN</h1>
        <h3>
          Self-taught programmer focused on creating excellent experiences for
          users and developers alike.
        </h3>
        <p>
          I'm a fullstack dev that works primarily with React for the frontend
          and Node/MySQL for the backend. I'm a bootcamp grad from UC Berkeley
          but I would consider myself mostly self-taught. The bootcamp taught me
          everything leading up to React: HTML/CSS, vanilla Javascript, jQuery,
          and SQL/NoSQL databases. After the bootcamp, I picked up Redux and the
          Context API for state management, Jest/Enzyme for testing, and
          Webpack/Babel for build tools. I've also learned to use more modern
          tools like Typescript and NextJS for server-side rendering. As
          class-based architecture in React faded, I've familiarized myself with
          hooks and how to use them effectively. I'm always learning and always
          getting better.
        </p>
        <Link to="/portfolio/">View Portfolio</Link>
      </AboutMeContainer>
    </Container>
  </Layout>
);

export default IndexPage;
