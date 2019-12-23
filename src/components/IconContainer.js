import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  > img {
    transition: 0.25s ease-in;
    filter: grayscale(40%);
    opacity: 0.8;
    :hover {
      filter: unset;
      opacity: 1;
      transform: translateY(-4px) scale(1.1);
    }
  }
`;

function IconContainer({ path, size }) {
  return (
    <Container>
      <img
        src={`/img/${path}`}
        alt=""
        width={`${size}px`}
        height={`${size}px`}
      />
    </Container>
  );
}

export default IconContainer;
