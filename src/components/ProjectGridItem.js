import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  /* width: 100%; */
  display: flex;
  justify-content: center;
  text-decoration: none;
  /* border: 1px solid black; */
`;

const Container = styled.div`
  padding: 1.5rem;
  transition: 0.4s ease-out;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${StyledLink} :hover & {
    box-shadow: ${props => props.theme.bs};
    border-radius: 18px;
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
        <p>{title}</p>
      </Container>
    </StyledLink>
  );
}

export default ProjectGridItem;
