import React from "react";
import styled from "styled-components";
import { graphql } from "gatsby";

import ProjectGridItem from "../../components/ProjectGridItem";
import Layout from "../../components/layout";

const Container = styled.div``;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

function Portfolio({ data }) {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Container>
        <h1>Projects</h1>
        <ProjectContainer>
          {edges.length &&
            edges.map(({ node }) => (
              <ProjectGridItem
                title={node.frontmatter.title}
                img={node.frontmatter.img1}
              />
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
            img1
          }
        }
      }
    }
  }
`;

export default Portfolio;
