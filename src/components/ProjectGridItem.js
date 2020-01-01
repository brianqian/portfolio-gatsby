import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  > p {
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
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
