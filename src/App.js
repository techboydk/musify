import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "./context/contextApi";
import Layout from "./Layout";
import Login from "./Login";


const App = () => {
  const {userName, setUserName} = useContext(Context);

  setUserName(window.localStorage.getItem("username"));

  return (
    <Container>
      {
        userName ? <Layout/> : <Login/>
      }
    </Container>
  );
};

export default App;

const Container = styled.div`
  margin: auto;
  max-width: 768px;
  max-height: 100vh;
  height: 100vh;
  width: 100vw;
  overflow-y: scroll;
  background-color: #111;
  color: #fff;
  &::-webkit-scrollbar{
    display: none;
  }
`;
