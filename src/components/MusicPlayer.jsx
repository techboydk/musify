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
}) => {
  const [{ isplaying }, dispatch] = useStateProvider();

  const audioContextRef = useRef(null);
  const mediaElementRef = useRef(null);

  useEffect(() => {
    const initializeAudioContext = async () => {
      // Check if the AudioContext is available
      if (typeof window.AudioContext !== "undefined" || typeof window.webkitAudioContext !== "undefined") {
        const AudioContext = window.AudioContext || window.webkitAudioContext;

        // Create a new AudioContext instance
        audioContextRef.current = new AudioContext();

        // Create a new MediaElementAudioSourceNode
        mediaElementRef.current = new Audio();
        mediaElementRef.current.src = selectedTrack?.url;
        mediaElementRef.current.crossOrigin = "anonymous";

        // Wait for the media element to be loaded
        await mediaElementRef.current.play();

        // Create a new MediaElementAudioSourceNode from the loaded media element
        const mediaSource = audioContextRef.current.createMediaElementSource(mediaElementRef.current);

        // Connect the MediaElementAudioSourceNode to the AudioContext destination (speakers)
        mediaSource.connect(audioContextRef.current.destination);

        // Notify that the player is ready
        handlePlayerReady();
      }
    };

    initializeAudioContext();

    return () => {
      // Clean up resources
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, [selectedTrack, handlePlayerReady]);

  useEffect(() => {
    // Pause or resume the audio element based on the isplaying state
    if (mediaElementRef.current) {
      if (isplaying) {
        mediaElementRef.current.play();
      } else {
        mediaElementRef.current.pause();
      }
    }
  }, [isplaying]);

  return (
    <>
      {selectedTrack && (
        <ReactPlayer
          url={selectedTrack?.url}
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
