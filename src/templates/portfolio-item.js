import React, { useState } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import StackContainer from '../components/StackContainer';
import LinkIcon from '../components/svg/LinkComponent';
import CodeIcon from '../components/svg/CodeComponent';
import ImageCarousel from '../components/ImageCarousel';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 50px);
  width: 75%;
  margin: 3rem auto;
  @media all and (max-width: 1200px) {
    width: 100%;
  }
`;
const TextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr;
  padding: 2rem;
`;

const DescriptionDiv = styled.div`
  font-family: 'Open Sans';
  line-height: 1.5em;
  font-size: 18px;
  grid-column: 2;
  grid-row: 2;
  padding: 1rem 2rem;
  > header {
    display: flex;
    align-items: center;
  }
`;

const ProjectTitle = styled.header`
  font-size: 1.2em;
  display: flex;
  margin-left: 2rem;
  align-items: flex-end;
  grid-column: 2;
  /* justify-self: center; */
  a {
    margin: 0 0.5rem;
  }
  h1 {
    margin-right: 1rem;
  }
`;

const StackDiv = styled.aside`
  grid-row: 2;
  grid-column: 1;
  padding: 0.5rem;
  > div {
    padding: 0.5rem;
    border-radius: 20px;
    ${props =>
      props.theme.isDark && 'background-color: hsla(0, 0%, 100%, 0.2)'};
  }
`;

function Portfolio(props) {
  const { data, uri, pageContext } = props;

  const {
    markdownRemark: { frontmatter, html },
    images: { nodes },
  } = data;
  console.log('port item', data);
  return (
    <Layout location={uri} ctx={pageContext}>
      <Container>
        <Link to="/portfolio" />
        <ImageCarousel media={nodes} />
        <TextContainer>
          <ProjectTitle>
            <h1>{frontmatter.title}</h1>
            <ThemeConsumer>
              {theme => (
                <>
                  <a href={frontmatter.deployment}>
                    <LinkIcon size="16" color={theme.strokeColor} />
                  </a>
                  <a href={frontmatter.github}>
                    <CodeIcon size="18" color={theme.strokeColor} />
                  </a>
                </>
              )}
            </ThemeConsumer>
          </ProjectTitle>
          <StackDiv>
            <div>
              {frontmatter.stack &&
                frontmatter.stack.map(item => {
                  return <StackContainer key={item} name={item} />;
                })}
            </div>
          </StackDiv>
          <DescriptionDiv>
            <div dangerouslySetInnerHTML={{ __html: html }} />
          </DescriptionDiv>
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
        relativeDirectory: { eq: $title }
        extension: { in: ["png", "jpg", "webp", "gif", "mp4"] }
      }
    ) {
      nodes {
        childImageSharp {
          fixed(width: 350) {
            ...GatsbyImageSharpFixed_withWebp
          }
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
        id
        extension
        publicURL
      }
    }
  }
`;

export default Portfolio;
