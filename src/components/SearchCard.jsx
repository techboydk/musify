import React from "react";
import styled from "styled-components";

const SearchCard = ({video}) => {

  const handleClick = () =>{

  }
  return (
    <Container onClick={handleClick}>
      <img src={video?.thumbnails?.[0].url} alt="" />
      <div className="detail">
        <h4 className="title">{video?.title?.split("|")?.[0]}</h4>
        <p className="artist">{video?.title?.split("|")?.[1]}</p>
      </div>
    </Container>
  );
};

export default SearchCard;

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 .75rem;
  padding: 0.5rem 0.5rem;
  gap: 1rem;
  &:hover{
    background-color: #87878763;
    border-radius: 0.75rem;
  }
  .hide_player {
    display: none;
  }
  img {
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
  }
  .detail {
    text-transform: capitalize;
  }
  .title {
    font-size: 0.95rem;
    white-space: nowrap;
    max-width: 9rem;
    overflow: hidden;
  }
  .artist {
    font-size: 0.85rem;
    margin-top: 0.25rem;
    color: #ccc;
    white-space: nowrap;
    max-width: 9rem;
    overflow: hidden;
  }
`;
