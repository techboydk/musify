
import React, { useEffect } from "react";
import ReactPlayer from "react-player";
import { useStateProvider } from "../utils/StateProvider";

const MusicPlayer = ({
  selectedTrack,
  handleProgress,
  handlePlayerBuffer,
  handlePlayerBufferEnd,
  player
}) => {
  const [{ isplaying }] = useStateProvider();

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        player.current.getInternalPlayer().playVideo();
      } else {
        player.current.getInternalPlayer().playVideo();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return (
    <>
      {selectedTrack && (
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${selectedTrack.videoId}`}
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