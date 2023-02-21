import React from 'react'
import styled from 'styled-components';
import Home from './pages/Home';
import Login from './pages/Login';
import { AppContext } from './context/contextApi'

const App = () => {
  const userName = true
  return (
    <AppContext>
      <Container>
        {
          userName ? <Home /> : <Login/>
        }
      </Container>
    </AppContext>
  )
}

export default App;

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  background-color: #111;
  color: #FFF;
`