import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Container = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid black;
`;

function ProjectGridItem({ title, img }) {
  return (
    <Link to={`/portfolio/${title.toLowerCase().replace(/\s/g, "")}`}>
      <Container>{title}</Container>
    </Link>
  );
}

export default ProjectGridItem;
