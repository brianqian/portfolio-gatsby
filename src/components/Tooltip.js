import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const TooltipContainer = styled.div`
  position: absolute;
  top: -38px;
  left: -10px;
  border-radius: 5px;
  background-color: white;
  color: black;
  border: 1px solid black;
  padding: 8px 12px;
  p {
    font-size: 10px;
  }
`;

function Tooltip({ children, text }) {
  const [isHovered, setIsHovered] = useState(false);

  const toggle = () => setIsHovered(!isHovered);

  return (
    <Container onMouseEnter={toggle} onMouseLeave={toggle}>
      {children}
      {isHovered && (
        <TooltipContainer>
          <p>{text}</p>
        </TooltipContainer>
      )}
    </Container>
  );
}

export default Tooltip;
