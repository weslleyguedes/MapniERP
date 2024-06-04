import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface Props {
  children?: React.ReactNode;
  overlay?: () => void;
  borda?: string;
  width?: string;
  overlaycolor?: string;
  top?: string;
  left?: string;
  padding?: string;
  textalign?: string;
  height?: string;
}

const slideIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 50%);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
`;

const slideOut = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -50%);
  }
  to {
    opacity: 0;
    transform: translate(-50%, 100%);
  }
`;

const Container = styled.div<Props & { isClosing: boolean }>`
  position: fixed;
  top: ${(props) => props.top || '50%'};
  left: ${(props) => props.left || '50%'};
  transform: translate(-50%, -50%);
  background-color: #F9FAFB;
  padding: ${(props) => props.padding || '40px'};
  border: 1px solid ${(props) => props.borda || 'none'};
  border-radius: 8px;
  z-index: 2;
  width: ${(props) => props.width || '800px'};
  height: ${(props) => props.height || ''};
  max-height: 550px;
  overflow-y: auto;
  text-align: ${(props) => props.textalign || 'left'};
  animation: ${(props) => (props.isClosing ? slideOut : slideIn)} 0.3s forwards;
`;

const Overlay = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: ${(props) => props.overlaycolor || '#00000043'};
`;

const Modal = ({
  children,
  overlay,
  width,
  overlaycolor,
  borda,
  top,
  left,
  padding,
  textalign,
  height
}: Props) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const overlayClick = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      if (overlay) overlay();
    }, 100); // Duration should match the animation duration
  };

  if (!isVisible) return null;

  return (
    <>
      <Overlay onClick={overlayClick} overlaycolor={overlaycolor} />
      <Container
        width={width}
        borda={borda}
        top={top}
        left={left}
        padding={padding}
        textalign={textalign}
        height={height}
        isClosing={isClosing}
      >
        {children}
      </Container>
    </>
  );
};

export default Modal;

