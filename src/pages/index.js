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
  display: flex;
  flex-direction: column;
  padding: 10% 0;
  height: calc(100vh - 50px);
  span {
    color: white;
    background-color: blue;
    padding: 10px 15px;
    border-radius: 10px;
  }
  a {
    margin-top: 2rem;
  }
`;
const AboutMeText = styled.div`
  flex: 1;
`;
const LinkButtons = styled.div`
  flex: 1;
`;

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Container>
      <ImageContainer>
        <ImagePlaceholder />
      </ImageContainer>
      <AboutMeContainer>
        <AboutMeText>
          <h1>BRIAN QIAN</h1>
          <h3>
            Self-taught programmer focused on creating experiences for users and
            developers alike.
          </h3>
          <p>
            I'm a fullstack dev that works primarily with React for the frontend
            and Node/MySQL for the backend. I'm a bootcamp grad from UC Berkeley
            but I would consider myself mostly self-taught. I've always had a
            passion for problem solving and found programming filled that void
            in ways other careers couldn't.
          </p>
        </AboutMeText>
        <LinkButtons>
          <Link to="/portfolio/">
            <span>View Portfolio ></span>
          </Link>
        </LinkButtons>
      </AboutMeContainer>
    </Container>
  </Layout>
);

export default IndexPage;
