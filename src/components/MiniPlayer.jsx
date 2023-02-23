import React, { useContext, useState } from "react";
import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Context } from "../context/contextApi";
import ReactPlayer from "react-player/youtube";

const MiniPlayer = () => {
  const { isPlaying,setPlaying, selectedTrack } = useContext(Context);
  console.log(selectedTrack.key)
  const id = `https://www.youtube.com/watch?v=${selectedTrack?.id}`;
  // console.log(id);
  const handlePlayPause =()=>{
    isPlaying ? setPlaying(false) : setPlaying(true);
  }
  return (
    <Container>
      <div className="song_details">
        <img src={selectedTrack?.thumbnails?.[0].url} alt="" />
        <div className="detail">
          <h4 className="title">{selectedTrack?.title?.split("|")?.[0]}</h4>
          <p className="artist">{selectedTrack?.title?.split("|")?.[1]}</p>
        </div>
        <ReactPlayer url={id} playing={isPlaying} className="hide_player" />
      </div>
      <div className="player_controler">
        <SkipPreviousIcon />
        {isPlaying ? (
          <PauseIcon onClick={handlePlayPause} />
        ) : (
          <PlayArrowIcon onClick={handlePlayPause} />
        )}
        <SkipNextIcon />
      </div>
    </Container>
  );
};

export default MiniPlayer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border-radius: 0.75rem;
  background: #1e1e1e;
  .song_details {
    display: flex;
    align-items: center;
    gap: 1rem;
    .hide_player{
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
  }
  .player_controler {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
