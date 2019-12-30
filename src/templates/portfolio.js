import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  button {
    border: 1px solid black;
    border-radius: 100%;
    padding: 0.5rem;
    font-size: 20px;
    height: 42px;
    width: 42px;
    :hover {
      background-color: lightgray;
    }
    :active {
      outline: none;
    }
  }
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
    images: { nodes },
  } = data;
  return (
    <Layout>
      <Container>
        <Link to="/portfolio">
          <button type="button"> &lt; </button>
        </Link>
        <ImageCarousel>
          {!!nodes.length &&
            nodes.map(image => <Img fixed={image.childImageSharp.fixed} />)}
          {/* <Img fixed={frontmatter.img1.fixed}></Img> */}
        </ImageCarousel>
        <TextContainer>
          <h2>{frontmatter.title}</h2>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </TextContainer>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query PortfolioItem($id: String!, $imgPath: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        date
        github
        deployment
        stack
      }
    }
    images: allFile(
      filter: {
        sourceInstanceName: { eq: "projects" }
        relativeDirectory: { glob: $imgPath }
      }
    ) {
      nodes {
        childImageSharp {
          fixed(width: 250) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  }
`;

export default Portfolio;
