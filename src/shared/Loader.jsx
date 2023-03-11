import React from "react";
import styled, { keyframes } from "styled-components";

const Loader = () => {
  return (
    <Container className="load_bar">
      <span className="bar"></span>
      <span className="bar"></span>
      <span className="bar"></span>
    </Container>
  );
};

export default Loader;

const animation = keyframes`
  0%{
      transform: translateY(0px);
      box-shadow: 0 0 10px #000;
  }
  40%{
      transform: translateY(10px);
      box-shadow: -20px 10px 10px #000;
  }

  100%{
    transform: translateY(0px);
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: auto;
  gap: 1rem;
  align-items: center;
  .bar {
    display: flex;
    height: 10px;
    width: 10px;
    border-radius: 3rem;
    animation-name: ${animation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    background-color: #85c4ff;
    box-shadow: 0 0 10px #000;
    &:nth-child(2) {
      animation-delay: 300ms;
    }
    &:nth-child(3) {
      animation-delay: 600ms;
    }
  }
`;
