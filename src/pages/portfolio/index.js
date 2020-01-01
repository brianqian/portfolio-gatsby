import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";
import Img from "gatsby-image";
import ProjectGridItem from "../../components/ProjectGridItem";
import Layout from "../../components/layout";

const Container = styled.div``;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  justify-content: center;
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
                fixed(width: 250) {
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
