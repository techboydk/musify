import React from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";

const TrackCard = ({ track }) => {
  const [{ selectedTrack, selectedTrackIndex, selectedPlaylistItems }, dispatch] = useStateProvider();

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
      type:"SET_SELECTED_TRACK_INDEX",
      selectedTrackIndex: selectedPlaylistItems.indexOf(track),
    });
  };
  return (
    <Container onClick={handleClick}>
      <div className="img">
        <img src={track?.thumbnail?.url} alt={track?.title?.split("|")[0]} />
      </div>
      <div className="detail">
        <h4 className="track_title">
          {track?.title?.split("|")[0]?.split(" ").slice(0, 4).join(" ")}
        </h4>
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
