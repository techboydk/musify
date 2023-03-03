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
    width: 0;
  }
  100%{
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 768px;
  position: fixed;
  top: 0;
  height: 5px;
  justify-content: center;
  .bar {
    position: absolute;
    display: flex;
    top: 0;
    margin: auto;
    height: 5px;
    width: 0px;
    border-radius: 3rem;
    animation-name: ${animation};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    &:nth-child(1) {
      background: red;
      
    }
    &:nth-child(2) {
      background: green;
      animation-delay: 300ms;
    }
    &:nth-child(3) {
      background: #ad02c4;
      animation-delay: 600ms;
    }
  }
`;

