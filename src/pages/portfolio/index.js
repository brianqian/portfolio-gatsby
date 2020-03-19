import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import ProjectGridItem from '../../components/ProjectGridItem';
import Layout from '../../components/layout';

const Container = styled.div`
  padding: 0 8%;
`;

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  justify-content: center;
  padding: 2rem 0;
  grid-gap: 1rem 3rem;
  margin-top: 2rem;
`;

function Portfolio({ data }) {
  const { edges } = data.allMarkdownRemark;
  return (
    <Layout>
      <Container>
        <h1>Projects</h1>
        <ProjectContainer>
          {!!edges.length &&
            edges.map(({ node: { frontmatter, id } }) => (
              <ProjectGridItem title={frontmatter.title} key={id}>
                <Img
                  fixed={frontmatter.splashImg.childImageSharp.fixed}
                  style={{
                    boxShadow: '-1px 10px 15px -2px hsla(570, 50%, 35%, .5)',
                  }}
                  imgStyle={
                    {
                      // border: "1.5px solid hsla(300, 50%, 40%, .6)",
                    }
                  }
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
    allMarkdownRemark(sort: { fields: frontmatter___id, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            splashImg {
              childImageSharp {
                fixed(width: 450, quality: 100) {
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
