import React, { useRef, useEffect } from "react";
import ReactPlayer from "react-player";
import { useStateProvider } from "../utils/StateProvider";

const MusicPlayer = ({
  selectedTrack,
  handleProgress,
  handlePlayerReady,
  handlePlayerBuffer,
  handlePlayerBufferEnd,
  player,
  audioLink
}) => {
  const [{ isplaying,isMobile }] = useStateProvider();

  return (
    <>
      {selectedTrack && (
        <ReactPlayer
          url={isMobile ? audioLink : selectedTrack?.url}
          playing={isplaying}
          onProgress={handleProgress}
          onBuffer={handlePlayerBuffer}
          onBufferEnd={handlePlayerBufferEnd}
          ref={player}
          width={0}
          height={0}
          style={{ display: "none", position: "absolute" }}
        />
      )}
    </>
  );
};

export default MusicPlayer;
