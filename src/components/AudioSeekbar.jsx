import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import CloseBtn from "./CloseBtn";

const AudioSeekbar = ({ totalTime, currentTime, setCurrentTime, player }) => {
  const [{ isPlayerFullScreen }] = useStateProvider();
  const [speed, setSpeed] = useState(1.0);
  const [isActive, setActive] = useState(false);

  const handleSpeed = (e) => {
    setSpeed(e.target.value);
  };
  const showSpeedBox = (e) => {
    isActive ? setActive(false) : setActive(true);
  };

  const handleSeekChange =(e)=>{
    console.log(e.target.value)
    setCurrentTime(e.target.value);
  }

  const handleSeek = () => {
    if (player.current) {
      player.current.seekTo(currentTime);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secondsStr = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${secondsStr}`;
  };

  return (
    <Container>
      <div className={isPlayerFullScreen ? "speed active" : "speed"}>
        <span className="current_speed" onClick={showSpeedBox}>
          {speed}x
        </span>
        <div className={isActive ? "set_speed active" : "set_speed"}>
          <div className="close_btn">
            <CloseBtn isActive={isActive} setActive={setActive} />
          </div>
          <h3>adjust speed</h3>
          <span className="curent_value">{speed}</span>
          <input
            type="range"
            name="speed"
            max={3}
            min={0.5}
            step={0.1}
            value={speed}
            onChange={handleSpeed}
          />
        </div>
      </div>
      <input
        type="range"
        max={totalTime/1000-1}
        min={0}
        value={Math.floor(currentTime)}
        className={isPlayerFullScreen ? "_seekbar active" : "_seekbar"}
        onChange={handleSeekChange}
        onMouseUp={handleSeek}
      />
      <div className={isPlayerFullScreen ? "time active" : "time"}>
        <span className="current_time">{formatTime(currentTime)}</span>
        <span className="total_time">{formatTime(totalTime/1000)}</span>
      </div>
    </Container>
  );
};

export default AudioSeekbar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.5rem;
  .speed {
    position: relative;
    display: none;
    justify-content: flex-end;
    &.active {
      display: flex;
    }
    .current_speed {
      cursor: pointer;
      font-size: 0.8rem;
      color: #ccc;
    }
    .set_speed {
      position: absolute;
      right: 50%;
      transform: translateX(50%);
      top: -5rem;
      background: #4c4c4c;
      padding: 1rem 2rem 2rem;
      border-radius: 0.5rem;
      display: none;
      flex-direction: column;
      gap: 0.5rem;
      justify-content: center;
      align-items: center;
      text-transform: capitalize;
      z-index: 9;
      &.active {
        display: flex;
      }
      .close_btn {
        * {
          font-size: 1rem;
        }
      }
      h3 {
        font-size: 1rem;
        font-weight: 600;
        white-space: nowrap;
      }
      .curent_value {
        font-weight: 600;
        font-size: 1.2rem;
        margin: 0.5rem 0;
      }
      input {
        height: 10px;
      }
    }
  }

  ._seekbar {
    width: 100%;
    height: 5px;
    border-radius: 5px;
    background-color: #ffffff3d;
    outline: none;
    opacity: 0.7;
    transition: opacity 0.2s ease 0s;
    overflow: hidden;
    &.active {
      overflow: inherit;
      margin: .25rem 0;
    }
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background-color: #fff;
      cursor: pointer;
    }
  }

  .time {
    display: none;
    justify-content: space-between;
    font-size: 0.85rem;
    &.active {
      display: flex;
    }
  }
`;
