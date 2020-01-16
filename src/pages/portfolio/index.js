import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ProjectGridItem from "../../components/ProjectGridItem";
import Layout from "../../components/layout";

const Container = styled.div`
  padding: 0 8%;
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  justify-content: center;
  padding: 2rem 0;
  grid-gap: 1rem 0;
`;

function Portfolio({ data }) {
  const { edges } = data.allMarkdownRemark;

  return (
    <Layout>
      <Container>
        <h1>Projects</h1>
        <ProjectContainer>
          {!!edges.length &&
            edges.map(({ node: { frontmatter }, id }) => (
              <ProjectGridItem title={frontmatter.title}>
                <Img
                  key={id}
                  fixed={frontmatter.splashImg.childImageSharp.fixed}
                />
              </ProjectGridItem>
            ))}
        </ProjectContainer>
      </Container>
    </Layout>
  );
}

export const query = graphql`
  query PortfolioPage {
    allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            splashImg {
              childImageSharp {
                fixed(width: 300) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default Portfolio;
