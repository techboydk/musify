import React, { useContext } from "react";
import styled from "styled-components";
import { Context } from "../context/contextApi";

const Card = ({itemData}) => {
  const {setSelectedTrack,setPlaying,setActiveMiniPlayer} = useContext(Context)

  const handleClick = () =>{
    setPlaying(true)
    setActiveMiniPlayer(true)
    setSelectedTrack(itemData)
  }
  return (
    <Container onClick={handleClick}>
      <img
        src={itemData?.thumbnails?.[0].url}
        alt=""
      />
      <h4 className="title">{itemData?.title?.split('|')?.[0]}</h4>
      <p className="subtitle">{itemData?.title?.split('|')?.[1]}</p>
    </Container>
  );
};

export default Card;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:first-child{
    margin-left: 1rem;
  }
  &:last-child{
    margin-right: 1rem;
  }
  img{
    height: 9rem;
    width: 9rem;
    border-radius: .75rem;
    object-fit: cover;
  }
  h4.title{
    margin: .5rem 0 .25rem;
    font-size: .86rem;
    font-weight: 800;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    max-width: 8.5rem;

  }
  .subtitle{
    font-size: 0.85rem;
    color: #bbb;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    max-width: 8.5rem;
  }
`;
