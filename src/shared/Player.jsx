import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import AudioSeekbar from "../components/AudioSeekbar";
import { playerControlIcons } from "../utils/constant";
import CloseBtn from "../components/CloseBtn";
import ReactPlayer from "react-player";

const Player = () => {
  const [{ isMobile, isPlayerFullScreen, selectedTrack, isplaying }, dispatch] =
    useStateProvider();
  const [isShuffle, setShuffle] = useState(false);
  const [isRepeat, setRepeat] = useState("off");
  const [currentTime, setCurrentTime] = useState(0);
  const player = useRef(null);

  const handlePlayerFullScreen = (e) => {
    e.preventDefault();
    if (e.target.tagName === "svg" || e.target.tagName === "path") {
      return;
    } else {
      dispatch({
        type: "IS_PLAYER_FULLSCREEN",
        isPlayerFullScreen: true,
      });
    }
  };
  const handleProgress = ({ playedSeconds }) => {
    setCurrentTime(Math.floor(playedSeconds));
  };

  useEffect(()=>{
    if (selectedTrack?.duration / 1000 - 1 === currentTime && isRepeat === "one") {
      setCurrentTime(0);
      dispatch({
        type: "SET_PLAYING",
        isplaying: true,
      });
    }

  },[currentTime])

  const handleCloseBtn = () => {
    dispatch({
      type: "IS_PLAYER_FULLSCREEN",
      isPlayerFullScreen: false,
    });
  };

  const handleShuffle = () => {
    isShuffle ? setShuffle(false) : setShuffle(true);
  };
  const handleRepeat = () => {
    if (isRepeat === "off") {
      setRepeat("on");
    } else if (isRepeat === "on") {
      setRepeat("one");
    } else {
      setRepeat("off");
    }
    console.log(isRepeat);
  };

  const handlePlayPause = () => {
    if (isplaying) {
      dispatch({
        type: "SET_PLAYING",
        isplaying: false,
      });
    } else {
      dispatch({
        type: "SET_PLAYING",
        isplaying: true,
      });
    }
    console.log();
    console.log(currentTime);
  };
  return (
    <Container
      className={
        isPlayerFullScreen
          ? isMobile
            ? "fullscreen mobile"
            : "fullscreen"
          : isMobile
          ? "mobile"
          : ""
      }
      onClick={handlePlayerFullScreen}
    >
      <ReactPlayer
        url={selectedTrack?.url}
        playing={isplaying}
        onProgress={handleProgress}
        ref={player}
        width="0"
        height="0"
      />
      <div className="close_btn" onClick={handleCloseBtn}>
        <CloseBtn />
      </div>
      <div className="song_details">
        <div className="img">
          <img src={selectedTrack?.thumbnail?.url} alt="" />
        </div>
        <div className="details">
          <h4 className="title">
            {selectedTrack?.title
              ?.split("-")[0]
              ?.split(" ")
              .slice(0, 4)
              .join(" ")}
          </h4>
          <p className="subtitle">{selectedTrack?.channel?.name}</p>
        </div>
      </div>
      <div className="seekbar_duration">
        <AudioSeekbar
          totalTime={selectedTrack?.duration}
          currentTime={currentTime}
          player={player}
          setCurrentTime={setCurrentTime}
        />
      </div>
      {isPlayerFullScreen ? (
        <div className="player_control_fullscreen">
          <div className="left">
            {isShuffle ? (
              <playerControlIcons.shuffle onClick={handleShuffle} />
            ) : (
              <playerControlIcons.shuffle
                onClick={handleShuffle}
                style={{ color: "#797979c3" }}
              />
            )}
            <playerControlIcons.like />
          </div>
          <div className="middle">
            <playerControlIcons.prev />
            {isplaying ? (
              <playerControlIcons.pause2
                onClick={handlePlayPause}
                style={{ fontSize: "2.5rem" }}
              />
            ) : (
              <playerControlIcons.play2
                onClick={handlePlayPause}
                style={{ fontSize: "2.5rem" }}
              />
            )}
            <playerControlIcons.next />
          </div>
          <div className="right">
            {isRepeat === "off" && (
              <playerControlIcons.repeat
                onClick={handleRepeat}
                style={{ color: "#797979c3" }}
              />
            )}
            {isRepeat === "on" && (
              <playerControlIcons.repeat onClick={handleRepeat} />
            )}
            {isRepeat === "one" && (
              <playerControlIcons.repeatOne onClick={handleRepeat} />
            )}

            <playerControlIcons.download />
          </div>
        </div>
      ) : (
        <div className="player_control">
          <playerControlIcons.prev />
          {isplaying ? (
            <playerControlIcons.pause onClick={handlePlayPause} />
          ) : (
            <playerControlIcons.play onClick={handlePlayPause} />
          )}
          <playerControlIcons.next />
        </div>
      )}
    </Container>
  );
};

export default Player;

const Container = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem 2rem;
  background: #333;
  border-radius: 0.5rem;
  color: #fff;
  flex: 0.5;
  &.mobile {
    flex: 1;
  }
  .close_btn {
    display: none;
    cursor: pointer;
  }
  .song_details {
    display: flex;
    align-items: center;
    gap: 1rem;
    .img {
      border-radius: 0.25rem;
      height: 2rem;
      width: 2rem;
      overflow: hidden;
      img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
    .details {
      font-size: 0.75rem;
      text-transform: capitalize;
    }
  }
  .seekbar_duration {
    position: absolute;
    display: flex;
    width: 98%;
    top: -3px;
    left: 1%;
    .duration {
      display: none;
      &.fullscreen {
        display: flex;
      }
    }
  }
  .player_control {
    display: flex;
    align-items: center;
    gap: 1rem;
    * {
      cursor: pointer;
    }
  }
  .player_control_fullscreen {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 1rem;
    align-items: flex-start;
    svg {
      cursor: pointer;
    }
    .left,
    .right {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
    }
    .middle {
      display: flex;
      flex: 1;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      position: relative;
      top: -0.5rem;
    }
  }
  &.fullscreen {
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 5rem;
    gap: 2rem;

    .close_btn {
      display: block;
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
    .seekbar_duration {
      position: relative;
      top: 0;
    }
    .song_details {
      flex-direction: column;
      text-align: center;
      .img {
        height: 15rem;
        width: 15rem;
      }
      .title {
        font-size: 1.2rem;
      }
      .subtitle {
        font-size: 0.91rem;
        color: #ccc;
        font-weight: 600;
      }
    }
  }
`;
