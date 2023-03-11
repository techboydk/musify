import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";

const Card = ({ itemData }) => {
  const [{ selectedPlaylist }, dispatch] = useStateProvider();

  const handleClick = () => {
    dispatch({
      type: "SET_Playlist",
      selectedPlaylist: itemData,
    })
    dispatch({
      type:"IS_PLAYLIST_SELECTED",
      isPlaylistSelected: true,
    });

  };
  return (
    <Container onClick={handleClick}>
      <div className="img">
        <img src={itemData?.thumbnail?.url} alt="" />
      </div>
      <h4 className="title">{itemData?.title?.split(" ").slice(0,2).join(' ')}</h4>
      <p className="subtitle">{itemData?.channel?.name}</p>
    </Container>
  );
};

export default Card;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  &:first-child {
    margin-left: 1rem;
  }
  &:last-child {
    margin-right: 1rem;
  }
  .img {
    height: 9rem;
    width: 9rem;
    border-radius: 0.75rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transform: scale(1.5);
    }
  }
  h4.title {
    margin: 0.5rem 0 0.25rem;
    font: status-bar;
    font-size: .75rem;
    font-weight: 800;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    max-width: 8.5rem;
  }
  .subtitle {
    font-size: 0.65rem;
    color: #bbb;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    max-width: 8.5rem;
  }
`;
