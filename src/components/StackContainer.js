import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  /* margin: 0.5rem 0; */
  padding: 0.5rem 1rem;
  transition: 0.25s ease-in;
  :hover {
    /* background-color: lightgray; */
    opacity: 0.65;
    cursor: default;
  }
  > p {
    margin: 0 0.5rem;
  }
`;

function StackContainer({ name }) {
  const format = name === 'styled-components' ? '.png' : '.svg';
  return (
    <Container>
      <img
        src={`/img/${name.toLowerCase()}${format}`}
        alt={`${name}-logo`}
        width="35px"
        height="35px"
      />

      <p>{name}</p>
    </Container>
  );
}

export default StackContainer;
