import React from "react";
import styled from "styled-components";
import { graphql, Link } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import StackContainer from "../components/StackContainer";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 50px);
  button {
    border: 1px solid black;
    border-radius: 100%;
    padding: 0.5rem;
    font-size: 20px;
    height: 50px;
    width: 50px;
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
  display: flex;
`;

const DescriptionDiv = styled.div`
  flex: 3;
  padding: 0 2rem;
  > header {
    display: flex;
    align-items: center;
  }
`;

const StackDiv = styled.div`
  flex: 1;
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
          <button type="button">
            {" "}
            <img src="/img/icons8-back-50.png" width="100%" />{" "}
          </button>
        </Link>
        <ImageCarousel>
          {!!nodes.length &&
            nodes.map(image => <Img fixed={image.childImageSharp.fixed} />)}
          {/* <Img fixed={frontmatter.img1.fixed}></Img> */}
        </ImageCarousel>
        <TextContainer>
          <DescriptionDiv>
            <header>
              <h2>{frontmatter.title} -</h2>
              <a
                href={frontmatter.github}
                target="__blank"
                rel="noopener noreferer"
              >
                Github
              </a>
              <a
                href={frontmatter.deployment}
                target="__blank"
                rel="noopener noreferer"
              >
                Deployment
              </a>
            </header>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </DescriptionDiv>
          <StackDiv>
            <h2>Built with: </h2>
            {frontmatter.stack &&
              frontmatter.stack.map(item => {
                return <StackContainer name={item} />;
              })}
          </StackDiv>
        </TextContainer>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query PortfolioItem($id: String!, $title: String!) {
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
        relativeDirectory: { glob: $title }
        extension: { in: ["png", "jpg", "webp", "gif"] }
      }
    ) {
      nodes {
        childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed_withWebp
          }
        }
      }
    }
  }
`;

export default Portfolio;
