import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { playerControlIcons } from "../utils/constant";
import { formatTitle } from "../utils/constant";

const Card = ({ itemData, title }) => {
  const [{ }, dispatch] = useStateProvider();

  const handleClick = () => {
    if (title === "your favroute") {
      dispatch({
        type: "SET_SELECTED_PLAYLIST_ITEMS",
        selectedPlaylistItems: itemData,
      });
      dispatch({
        type: "SET_Playlist",
        selectedPlaylist: itemData,
      });
    } else {
      dispatch({
        type: "SET_Playlist",
        selectedPlaylist: itemData,
      });
    }
    dispatch({
      type: "IS_PLAYLIST_SELECTED",
      isPlaylistSelected: true,
    });
    dispatch({
      type: "IS_PLAYER_FULLSCREEN",
      isPlayerFullScreen: true,
    });
  };
  return (
    <Container onClick={handleClick}>
      <div className="img">
        {itemData?.thumbnail?.[2]?.url ? (
          <div
            className="song_poster"
            style={{
              backgroundImage: `url(${itemData?.thumbnail?.[2]?.url})`,
              width: "100%",
              height: "100%",
            }}
          ></div>
        ) : (
          <playerControlIcons.musicNote />
        )}
      </div>
      {itemData?.title ? (
        <h4 className="title">
          {formatTitle(itemData?.title)}
        </h4>
      ) : (
        <h4 className="title">{title}</h4>
      )}
      {itemData?.channelTitle ? (
        <p className="subtitle">{itemData?.channelTitle }</p>
      ) : (
        <p className="subtitle">{itemData.length} songs</p>
      )}
    </Container>
  );
};

export default Card;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  user-select: none;
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
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      width: 100%;
      height: 100%;
      background: #ccc;
    }
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
    font-size: 0.75rem;
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
