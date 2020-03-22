import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
  height: 100%;
  width: 100%;
`;

const Container = styled.div`
  /* margin: 1.5rem; */
  transition: 0.4s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-radius: 20px;
  transition: 0.2s linear;
  background-color: ${p => p.theme.secondary};
  box-shadow: 0px 10px 25px 0px hsla(570, 50%, 35%, 0.5),
    0px 4px 10px 0px hsla(0, 0%, 0%, 0.1);
  border-radius: 20px;
  overflow: hidden;
  :hover {
    transform: translateY(-3.5px);
  }

  ${StyledLink} :hover & {
    /* opacity: 0.8; */
  }
  > p {
    margin: 1.5rem;
    font-size: 1.2em;
    & :hover {
      text-decoration: underline;
    }
  }
`;

function ProjectGridItem({ title, children }) {
  return (
    <StyledLink to={`/portfolio/${title.toLowerCase().replace(/\s/g, '')}`}>
      <Container>
        {children}
        <p>{title}</p>
      </Container>
    </StyledLink>
  );
}

export default ProjectGridItem;
