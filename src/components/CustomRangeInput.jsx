import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";

const CustomRangeInput = ({
  minValue,
  maxValue,
  currentValue,
  seekTo,
  loadedTime,
  selectedTrack,
}) => {
  const [value, setValue] = useState(minValue);
  const [loadedValue, setLoadedValue] = useState(minValue);

  const sliderRef = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    handleChange(currentValue);
  }, [currentValue]);

  useEffect(()=>{
    setLoadedValue(loadedTime)
  },[loadedTime])
  useEffect(()=>{
    //selectedTrack && seekTo(0)
  },[selectedTrack])

  useEffect(() => {
    const handleMove = (clientX, rect) => {
      const newValue = calculateNewValue(clientX, rect);
      selectedTrack && seekTo(newValue);
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      const touch = e.touches[0];
      const rect = sliderRef.current.getBoundingClientRect();
      handleMove(touch.clientX, rect);
    };

    const handleMouseMove = (e) => {
      if (!isDragging.current) return;
      const rect = sliderRef.current.getBoundingClientRect();
      handleMove(e.clientX, rect);
    };

    const handleEnd = () => {
      isDragging.current = false;
    };

    document.addEventListener("touchmove", handleTouchMove, { passive: false });
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchend", handleEnd);
    document.addEventListener("mouseup", handleEnd);

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchend", handleEnd);
      document.removeEventListener("mouseup", handleEnd);
    };
  }, [value]);

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const calculateNewValue = (clientX, rect) => {
    const offsetX = clientX - rect.left;
    const percent = (offsetX / rect.width) * 100;
    const newValue = Math.round(
      (percent / 100) * (maxValue - minValue) + minValue
    );
    return Math.max(minValue, Math.min(maxValue, newValue));
  };

  const handleStart = () => {
    isDragging.current = true;
  };

  const handleClick = (e) => {
    if (!isDragging.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const newValue = calculateNewValue(e.clientX, rect);
      selectedTrack && seekTo(newValue);
    }
  };

  return (
    <Container className="range_slider">
      <div
        className="slider_track"
        ref={sliderRef}
        onTouchStart={handleStart}
        onMouseDown={handleStart}
        onClick={handleClick}
      >
        <div
          className="slider_progress"
          style={{
            width: `${((value - minValue) / (maxValue - minValue)) * 100 + 1}%`,
          }}
        ></div>
        <div
          className="slider_progress_buffer"
          style={{
            width: `${((loadedValue - minValue) / (maxValue - minValue)) * 100 + 1}%`,
          }}
        ></div>
      </div>
      <div
        className="slider_thumb"
        style={{
          left: `${((value - minValue) / (maxValue - minValue)) * 100}%`,
        }}
        onTouchStart={handleStart}
        onMouseDown={handleStart}
      ></div>
    </Container>
  );
};

export default CustomRangeInput;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 0.25rem;
  background: #68686875;
  border-radius: 9999px;
  margin-bottom: 0.5rem;
  position: relative;
  &.range_slider {
    .slider_track {
      width: 100%;
      cursor: pointer;
      .slider_progress,.slider_progress_buffer {
        position: absolute;
        width: 2.5rem;
        height: 0.25rem;
        background: #3bffff;
        border-radius: 9999px;
        display: flex;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        z-index: 1;
      }
      .slider_progress_buffer{
        background-color: #6eeeff4c;
        z-index: 0;
      }
    }
    .slider_thumb {
      position: absolute;
      width: 1rem;
      height: 1rem;
      background: #3bffff;
      box-shadow: 0 0 10px #3bffff88;
      display: flex;
      border-radius: 50%;
      justify-content: center;
      align-items: center;
      top: -6px;
      left: 2rem;
      cursor: pointer;
      z-index: 9;
    }
  }
`;
