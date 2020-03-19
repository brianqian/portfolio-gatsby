import React, { useState, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
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
  margin: 0 auto;
  @media all and (max-width: 1200px) {
    width: 100%;
  }
`;

const BackButton = styled.button`
  border: none;
  border-radius: 100%;
  box-shadow: 0px 10px 23px -5px rgba(0,0,0,.2);
  padding: 0.5rem;
  font-size: 20px;
  height: 50px;
  width: 50px;
  transition: .2s ease-in;
  :hover {
    background-color: hsla(0, 0%, 93%, .7);
    box-shadow: -1px 7px 9px 0px rgba(0,0,0,.4);
  }
  :active {
    outline: none;
  }
}
`;

const ImageCarousel = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  grid-gap: 0.5rem;
  transition: 0.25s ease-in;
  .carousel__image {
    transition :hover {
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

const ProjectTitle = styled.h2`
  font-size: 2em;
  display: flex;
`;

const StackDiv = styled.div`
  grid-row: 2;
  grid-column: 1;
  padding: 0 0.5rem;
`;

function Portfolio(props) {
  const themeContext = useContext(ThemeContext);
  const [imageMap, setImageMap] = useState({});
  const closeModal = id => {
    setImageMap({ ...imageMap, [id]: false });
  };
  console.log('THEME', themeContext, themeContext?.strokeColor);

  const openModal = id => {
    // if (e.type === 'click')
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
  } = props.data;

  return (
    <Layout>
      <Container>
        <Link to="/portfolio">
          <BackButton type="button">
            <img src="/img/icons8-back-50.png" width="100%" alt="back" />
          </BackButton>
        </Link>
        <ImageCarousel>
          {!!nodes.length &&
            nodes.map((image, i) => {
              const {
                childImageSharp: { id, fluid },
              } = image;
              return (
                <div
                  key={id}
                  onClick={() => openModal(id)}
                  role="tablist"
                  tabIndex={i}
                  onKeyPress={e => handleKeyPress(e, id)}
                >
                  <Img
                    fixed={image.childImageSharp.fixed}
                    className="carousel__image"
                  />
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
            })}
          {/* <Img fixed={frontmatter.img1.fixed}></Img> */}
        </ImageCarousel>
        <TextContainer>
          <ProjectTitle>
            {frontmatter.title}
            <a href={frontmatter.deployment}>
              <LinkIcon size="15" color="black" />
            </a>
            <a href={frontmatter.github}>
              <CodeIcon size="15" color="black" />
            </a>
          </ProjectTitle>
          <StackDiv>
            {frontmatter.stack &&
              frontmatter.stack.map(item => {
                return <StackContainer key={item} name={item} />;
              })}
          </StackDiv>
          <DescriptionDiv>
            {/* <header>
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
            </header> */}
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
        relativeDirectory: { glob: $title }
        extension: { in: ["png", "jpg", "webp", "gif"] }
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
          id
        }
      }
    }
  }
`;

export default Portfolio;
