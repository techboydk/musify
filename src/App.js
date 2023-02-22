import React, { useContext } from "react";
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
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: #111;
  color: #fff;
  
`;
