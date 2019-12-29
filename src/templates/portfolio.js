import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
`;

const ImageCarousel = styled.div`
  display: flex;
  justify-content: space-around;
  width: 80%;
  margin: 0 auto;
  > div {
    height: 200px;
    width: 200px;
    background-color: gray;
  }
`;

const TextContainer = styled.div`
  padding: 2rem;
`;

function Portfolio({ data }) {
  console.log(data);
  const {
    markdownRemark: { frontmatter, html },
  } = data;
  return (
    <Layout>
      <Container>
        <ImageCarousel>
          <div></div>
          <div></div>
          <div></div>
        </ImageCarousel>
        <TextContainer>
          <h2>{frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }}></div>
        </TextContainer>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query PortfolioItem($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        img1
        img2
        img3
        github
        deployment
        stack
      }
    }
  }
`;

export default Portfolio;
