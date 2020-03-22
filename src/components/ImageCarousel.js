import React, { useState } from 'react';
import styled from 'styled-components';
import Img from 'gatsby-image';
import Modal from './ImageModal';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: content-fit;
  overflow: auto;
  overflow-x: hidden;
  box-shadow: -3px 5px 5px 0px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  background-color: ${props => props.theme.bgColorDarken};
  .carousel__image {
    :hover {
      border: 1px solid ${props => props.theme.strokeColor};
    }
  }
`;

const MediaItem = styled.div`
  padding: 1rem;
`;

function ImageCarousel({ media }) {
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

  return (
    <Container>
      {!!media.length &&
        media.map((node, i) => {
          const { childImageSharp, extension, id, publicURL } = node;
          if (extension !== 'mp4') {
            const { fixed, fluid } = childImageSharp;
            return (
              <MediaItem
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
              </MediaItem>
            );
          }
          return (
            <video muted controls width="350" key={id}>
              <source src={publicURL} type="video/mp4" />⚠ Embedded videos not
              enabled
            </video>
          );
        })}
    </Container>
  );
}

export default ImageCarousel;
