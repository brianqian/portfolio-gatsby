import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  width: 250px;
  /* height: 200px; */
  border: 1px solid black;
  position: relative;
  > p {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    top: 0;
  }
`;

function ProjectGridItem({ title, children }) {
  return (
    <Link to={`/portfolio/${title.toLowerCase().replace(/\s/g, "")}`}>
      <Container>
        {children}
        <p>{title}</p>
      </Container>
    </Link>
  );
}

export default ProjectGridItem;
