import React, { useContext } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import CancelIcon from "@mui/icons-material/Cancel";
import Tag from "./Tag";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Context } from "../context/contextApi";
import SearchCard from "./SearchCard";

const SearchPage = () => {
  const { searchResults,searchQuery } = useContext(Context);

  const handleClick = () => {
    window.history.back();
  };



  return (
    <Container>
      <div className="search_container">
        <Searchbar Icon={ArrowBackIosNewIcon} back={handleClick} />
      </div>
      {
        searchQuery && searchResults?.map((video)=>{
          return (
            <React.Fragment>
              {video.type === 'video' && <SearchCard video={video}/>}
            </React.Fragment>
          )
        })
      }
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 15rem;
  .search_container {
    margin: 1rem;
    position: sticky;
    top: 1rem;
  }
  .search_history {
    display: flex;
    flex-wrap: wrap;
    margin: 1rem;
    gap: 0.75rem;
  }
  .suggetion {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem;
    h3 {
      color: #00ffc4;
    }
  }
`;
