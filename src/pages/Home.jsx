import React from 'react'
import styled from 'styled-components';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';

const Home = () => {
  return (
    <Container>
      <Sidebar/>
      <Main/>
      <Footer/>
    </Container>
  )
}

export default Home;

const Container = styled.div`
  display: flex;
`