import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import { playerControlIcons } from "../utils/constant";
import { formatTitle } from "../utils/constant";

const TrackCard = ({ track }) => {
  const [
    { selectedTrack, selectedPlaylistItems },
    dispatch,
  ] = useStateProvider();

  const [isPlaying, setPlaying] = useState(false);

  useEffect(() => {
  
    if (selectedTrack?.videoId === track?.videoId) {
      setPlaying(true);
      console.log(isPlaying);
    } else {
      setPlaying(false);
    }
  }, [selectedTrack]);

  const handleClick = () => {
    dispatch({
      type: "SET_SELECTED_TRACK",
      selectedTrack: track,
    });
    dispatch({
      type: "SET_PLAYING",
      isplaying: true,
    });
    dispatch({
      type: "SET_SELECTED_TRACK_INDEX",
      selectedTrackIndex: selectedPlaylistItems.indexOf(track),
    });
    dispatch({
      type: "IS_PLAYLIST_SELECTED",
      isPlaylistSelected: true,
    });
  };
  return (
    <Container onClick={handleClick}>
      <div className="img">
        <img src={track?.thumbnail[0]?.url} alt={track?.title?.split("|")[0]} />
        {isPlaying && (
          <span>
            <playerControlIcons.playing />
          </span>
        )}
      </div>
      <div className="detail">
        <h4 className="track_title">{formatTitle(track?.title)}</h4>
        <p className="track_subtitle">{track?.channel?.name}</p>
      </div>
    </Container>
  );
};

export default TrackCard;

const Container = styled.div`
  display: flex;
  gap: 1rem;
  cursor: pointer;
  .img {
    width: 4rem;
    overflow: hidden;
    border-radius: 0.5rem;
    flex-shrink: 0;
    height: 4rem;
    position: relative;
    span {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #00000059;
    }
  }
  .detail {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.25em;
    text-transform: capitalize;
    .track_title {
      font-size: 0.85rem;
    }
    .track_subtitle {
      font-size: 0.65rem;
    }
  }
`;
