import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  text-decoration: none;
`;

const Container = styled.div`
  margin: 1.5rem;
  transition: 0.4s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${StyledLink} :hover & {
    opacity: 0.8;
  }
  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    margin: 0.5rem;
    font-size: 20px;
  }
`;

function ProjectGridItem({ title, children }) {
  return (
    <StyledLink to={`/portfolio/${title.toLowerCase().replace(/\s/g, "")}`}>
      <Container>
        {children}
        {/* <p>{title}</p> */}
      </Container>
    </StyledLink>
  );
}

export default ProjectGridItem;
