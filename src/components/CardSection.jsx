import React from "react";
import styled from "styled-components";
import Card from "./Card";

const CardSection = ({ playlists, title }) => {
  return (
    <Container>
      {playlists && <h4 className="title">{playlists ? title : "No title"}</h4>}
      <div className="scrollable-div">
        {playlists[title]?.map((playlist, index) => {
          return <Card itemData={playlist} key={index} />;
        })}
        {title === "your favroute" && <Card itemData={playlists} title={title}/>} 
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
    padding-bottom: 1.25rem;
    &::-webkit-scrollbar {
      height: 0.35rem;
      cursor: pointer;
    }
    &::-webkit-scrollbar-thumb {
      cursor: pointer;
    }
    @media screen and (max-width: 1024px){
      &::-webkit-scrollbar{
        display: none;
      }
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
