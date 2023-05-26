import React from "react";
import styled, { keyframes } from "styled-components";

const Loading = () => {
  return <Container></Container>;
};

export default Loading;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Container = styled.div`
  position: absolute;
  width: 100%;
  aspect-ratio: 1;
  border: 2px solid #fff;
  border-radius: 50%;
  border-bottom: none;
  border-left: none;
  display: flex;
  animation: ${rotate} 1s ease-out infinite;
`;
