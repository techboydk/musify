import React, { useEffect } from "react";
import styled from "styled-components";
import Searchbar from "./Searchbar";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useStateProvider } from "../utils/StateProvider";
import TrackCard from "./TrackCard";
import Loader from "../shared/Loader";

const SearchPage = () => {
  const [{ searchResults, loading }, dispatch] = useStateProvider();

  const handleBackEvent = () => {
    window.history.back()
    dispatch({
      type:'SET_SEARCH_RESULTS',
      searchResults:[]
    })
  };

  useEffect(()=>{
  })

  return (
    <Container>
      <div className="search_container">
        <Searchbar Icon={ArrowBackIosNewIcon} back={handleBackEvent} />
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="search_items">
          {searchResults?.map((item) => {
            return <TrackCard track={item} />;
          })}
        </div>
      )}
    </Container>
  );
};

export default SearchPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0 15rem;
  width: 100%;
  .search_container {
    position: fixed;
    padding: 1rem;
    width: 100%;
    z-index: 99;
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
  .search_items {
    display: flex;
    flex-direction: column;
    padding: 1rem 2rem 6rem;
    gap: 1rem;
    position: relative;
    top: 80px;
  }
`;
