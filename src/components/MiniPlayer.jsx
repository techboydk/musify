import React, { useContext } from "react";
import styled from "styled-components";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import PauseIcon from "@mui/icons-material/Pause";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { Context } from "../context/contextApi";

const MiniPlayer = () => {
  const { isPlaying } = useContext(Context);
  return (
    <Container>
      <div className="song_details">
        <img
          src="https://png.pngtree.com/template/20220218/ourmid/pngtree-music-poster-of-bar-singing-competition-image_765703.jpg"
          alt=""
        />
        <div className="detail">
          <h4 className="title">song title</h4>
          <p className="artist">artist</p>
        </div>
      </div>
      <div className="player_controler">
        <SkipPreviousIcon />
        {isPlaying ? <PauseIcon /> : <PlayArrowIcon />}
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
    img{
        width: 3rem;
        height: 3rem;
        border-radius: 0.5rem;
    }
    .detail{
        text-transform: capitalize;
    }
    .title{
        font-size: 0.95rem;
    }
    .artist{
        font-size: 0.85rem;
    margin-top: 0.25rem;
    color: #ccc;

    }
  }
  .player_controler {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
