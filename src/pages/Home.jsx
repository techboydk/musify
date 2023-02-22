import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import Searchbar from "../components/Searchbar";
import SideMenu from "../components/SideMenu";
import { Context } from "../context/contextApi";
import SearchIcon from '@mui/icons-material/Search';
import BottomNav from "../shared/BottomNav";



const Home = () => {
  const { userName, searchResults } = useContext(Context);


  return (
    <Container className="home">
      <SideMenu />
      <div className="header">
        <div className="greet_text">
          <h2>hello there!</h2>
          <h3>{userName}</h3>
        </div>
      </div>
      <div className="body_content">
        <div className="search_box">
          <Searchbar  Icon ={SearchIcon} />
        </div>
        <div className="card_section">
          <CardSection title="top hindi songs" data={searchResults && searchResults}/>
        </div>
      </div>
      <BottomNav />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  .header {
    position: sticky;
    top: 2.5rem;
    margin-top: 3.5rem;
    .greet_text {
      margin-left: 1rem;
      text-transform: capitalize;
      h2 {
        font-size: 1.75rem;
        color: #00ffc4;
        margin-bottom: 0.25rem;
      }
    }
  }
  .body_content {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    z-index: 0;
    background-color: #111;
    .search_box{
      padding: 1rem;
      position: sticky;
      top: 0;
    }
    .card_section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
`;
