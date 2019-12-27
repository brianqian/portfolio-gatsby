import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
`;

const TooltipContainer = styled.div`
  position: absolute;
  top: -40px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: black;
  color: white;
  border: 1px solid white;
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
