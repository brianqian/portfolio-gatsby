import React, { useState } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import Modal from '../components/ImageModal';
import Layout from '../components/layout';
import StackContainer from '../components/StackContainer';
import LinkIcon from '../components/svg/LinkComponent';
import CodeIcon from '../components/svg/CodeComponent';

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

const ImageCarousel = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  grid-gap: 0.5rem;
  /* transition: 0.25s ease-in; */
  box-shadow: 0px 10px 24px 0px rgba(0, 0, 0, 0.2);
  /* inset 0px 10px 12px 0px rgba(0, 0, 0, 0.2); */
  padding: 2rem 0;
  .carousel__image {
    :hover {
      border: 1px solid ${props => props.theme.strokeColor};
    }
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
  const [imageMap, setImageMap] = useState({});

  const closeModal = id => {
    setImageMap({ ...imageMap, [id]: false });
  };

  const openModal = id => {
    setImageMap({ ...imageMap, [id]: true });
  };

  const handleKeyPress = (e, id) => {
    console.log(e.type, e.key, e.keyCode);
    if (e.key === 'Enter') openModal(id);
    if (e.key === 'Escape') closeModal(id);
  };

  const {
    markdownRemark: { frontmatter, html },
    images: { nodes },
  } = data;
  console.log('port item', data);
  return (
    <Layout location={uri} ctx={pageContext}>
      <Container>
        <Link to="/portfolio" />
        <ImageCarousel>
          {!!nodes.length &&
            nodes.map((node, i) => {
              const { childImageSharp, extension, id, publicURL } = node;
              if (extension !== 'mp4') {
                const { fixed, fluid } = childImageSharp;
                return (
                  <div
                    key={id}
                    onClick={() => openModal(id)}
                    role="tablist"
                    tabIndex={i}
                    onKeyPress={e => handleKeyPress(e, id)}
                  >
                    <Img fixed={fixed} className="carousel__image" />
                    <Modal
                      height="85vh"
                      width="70vw"
                      padding="1rem"
                      hide={closeModal}
                      isShowing={!!imageMap[id]}
                      id={id}
                    >
                      <Img fluid={fluid} />
                    </Modal>
                  </div>
                );
              }
              return (
                <video muted controls width="350" key={id}>
                  <source src={publicURL} type="video/mp4" />
                  "⚠ Embedded videos not enabled "
                </video>
              );
            })}
        </ImageCarousel>
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
