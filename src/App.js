import axios from "axios";
import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Context } from "./context/contextApi";
import Layout from "./Layout";
import Login from "./Login";


const App = () => {
  const {userName, setUserName, isOnline} = useContext(Context);

  setUserName(window.localStorage.getItem("username"));

  return (
    <Container>
      {
        userName ? (isOnline ? <Layout/>: <div className="off_line"><span>&#128549;</span> you are offline</div>) : <Login/>
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
  .off_line{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    text-transform: capitalize;
    gap: 1rem;
    font-weight: bold;
    
    span{
      font-size: 2rem;
    }
  }
`;
