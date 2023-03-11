import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import Card from "./Card";
import { getPlaylistDataFromApi } from "../utils/api";

const CardSection = ({ title, keywords }) => {
  const [{ searchResults }, dispatch] = useStateProvider();

  useEffect(()=>{
    getPlaylistDataFromApi(keywords[0]).then(res => {
      dispatch({
        type: "SET_SEARCH_RESULTS",
        searchResults: res,
      })
    })
  },[])

  return (
    <Container>
      <h4 className="title">{searchResults ? title : "No title"}</h4>
      <div className="scrollable-div">
        {searchResults?.map((playlist, index) => {
          return <Card itemData={playlist} key={index}/>;
        })}
      </div>
    </Container>
  );
};

export default CardSection;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
  user-select: none;
  &:last-child {
    margin-bottom: 15rem;
  }
  h4.title {
    text-transform: capitalize;
    margin-left: 1rem;
  }
  .scrollable-div {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-padding: 1rem;
    -webkit-overflow-scrolling: touch;
    user-select: none;
    gap: 0.5rem;
    width: 100%;
    &::-webkit-scrollbar {
      height: 0.25rem;
    }
    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 1rem;
    }
    &::-webkit-scrollbar-track {
      background-color: #303030ba;
    }
  }
`;
