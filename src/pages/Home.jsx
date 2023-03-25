import React from "react";
import styled from "styled-components";
import CardSection from "../components/CardSection";
import Searchbar from "../components/Searchbar";
import { useStateProvider } from "../utils/StateProvider";
import SearchIcon from "@mui/icons-material/Search";
import MenuBtn from "../components/MenuBtn";
import { playlistsKeyWords } from "../utils/constant";

const Home = () => {
  const [{ user, isMobile }] = useStateProvider();
  return (
    <Container className={isMobile && "mobile"}>
      <div className="menu_btn">{isMobile && <MenuBtn />}</div>
      <div className={isMobile ? "header mobile" : "header"}>
        <div className="greet_text">
          <h2>hello there!</h2>
          <h3>{user}</h3>
        </div>
      </div>
      <div className="body_content">
        <div className="search_box">
          <Searchbar Icon={SearchIcon} />
        </div>
        <div className="card_section">
          {
            playlistsKeyWords.map((item, index)=>{
              return <CardSection title={item.title} keywords={item.keywords} key={index}/>
            })
          }
        </div>
      </div>
    </Container>
  );
};

export default Home;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden; 
  &.mobile {
    flex: 1;
  }
  .menu_btn {
    position: sticky;
    top: 1.7rem;
    margin-left: 1rem;
    z-index: 9;
  }
  .header {
    position: sticky;
    top: 1.5rem;
    margin-bottom: 1.5rem;
    &.mobile {
      margin: 2rem 0 0rem;
    }
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
    height: 100%;
    .search_box {
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
