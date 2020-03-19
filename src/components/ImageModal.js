import ReactDOM from 'react-dom';
import styled from 'styled-components';
import React, { useState, useEffect, useCallback } from 'react';

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 999;
`;

const Modal = styled.div`
  /* color: ${props => props.theme.color.white}; */
  /* background-color: ${props => props.theme.color.background}; */
  background-color: transparent;
  box-shadow: -10px 10px 10px 5px rgba(0, 0, 0, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.4);
  height: ${props => props.height || 'auto'};
  width: ${props => props.width || 'auto'};
  max-width: 100vw;
  max-height: 100vh;
  padding: ${props => props.padding || '2rem'};

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  z-index: 1000;
  overflow: auto;
`;

const CloseContainer = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: -2rem;
  right: -2rem;
  z-index: 1000;
`;

const Login = ({ id, isShowing, hide, children, height, width, padding }) => {
  const [strokeColor, setStrokeColor] = useState('#000');
  // TODO: add 'esc' key event listener to close

  const closeModal = e => {
    e.stopPropagation();
    hide(id);
    setStrokeColor('#000');
  };

  const wrappedCloseModal = useCallback(closeModal, [closeModal]);

  return isShowing
    ? ReactDOM.createPortal(
        <Background onClick={wrappedCloseModal}>
          <Modal
            height={height}
            width={width}
            padding={padding}
            onClick={e => e.stopPropagation()}
          >
            <CloseContainer
              onClick={closeModal}
              onMouseEnter={() => setStrokeColor('#333')}
              onMouseLeave={() => setStrokeColor('#000')}
            >
              <svg
                fill="none"
                stroke={strokeColor}
                height="1.5em"
                width="1.5em"
                viewBox="0 0 24 24"
              >
                <g strokeWidth="2" fill="none" strokeLinecap="round">
                  <path d="M6,6 L18,18" />
                  <path d="M6,18 L18,6" />
                </g>
              </svg>
            </CloseContainer>
            {children}
          </Modal>
        </Background>,
        document.body
      )
    : null;
};

export default Login;
