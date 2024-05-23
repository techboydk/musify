import React, { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import CloseBtn from "../components/CloseBtn";
import { playerControlIcons } from "../utils/constant";
import CustomRangeInput from "../components/CustomRangeInput";
import TrackCard from "../components/TrackCard";
import Loading from "./Loading";
import { getPlaylistItemsFromId } from "../utils/api";
import Loader from "./Loader";
import MusicPlayer from "../components/MusicPlayer";
import { formatTitle } from "../utils/constant";
import {totalDuration} from "../utils/constant";



const Player2 = () => {
  const [
    {
      likedTrack,
      isPlayerFullScreen,
      selectedTrack,
      isplaying,
      selectedPlaylistItems,
      selectedTrackIndex,
      selectedPlaylist,
      loading
    },
    dispatch,
  ] = useStateProvider();

  const [currentTime, setCurrentTime] = useState(0);
  const [loadedTime, setLoadedTime] = useState(0);
  const [upNextActive, setUpNextActive] = useState(false);
  const [isliked, setLiked] = useState(false);
  const [downloadLink, setDownloadLink] = useState();
  const [isPlayerReady, setPlayerReady] = useState(false);
  const [isBuffering, setBuffering] = useState(false);

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
  const handleProgress = ({ playedSeconds, loadedSeconds }) => {
    setCurrentTime(Math.floor(playedSeconds));
    setLoadedTime(Math.floor(loadedSeconds));
  };

  const handlePlayerReady = () => {
    setPlayerReady(true);
  };

  const handlePlayerBuffer = () => {
    setBuffering(true);
  };

  const handlePlayerBufferEnd = () => {
    setBuffering(false);
  };

  useEffect(() => {
    if (selectedPlaylist?.playlistId) {
      dispatch({
        type: "SET_SELECTED_PLAYLIST_ITEMS",
        selectedPlaylistItems: [],
      });
      dispatch({
        type: "SET_LOADING",
        loading: true,
      });
      getPlaylistItemsFromId(selectedPlaylist?.playlistId).then(async (data) => {
        dispatch({
          type: "SET_SELECTED_PLAYLIST_ITEMS",
          selectedPlaylistItems: data,
        });
        dispatch({
          type: "SET_SELECTED_TRACK",
          selectedTrack: data[0],
        });
        dispatch({
          type: "SET_PLAYING",
          isplaying: true,
        });
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
      });
    }
  }, [selectedPlaylist, dispatch]);


  const handleDownloadSong = () => {
    downloadLink && window.open(downloadLink, "_blank");
  };
  useEffect(() => {


  
    const duration = totalDuration(selectedTrack?.lengthText)


    if (duration-1 === currentTime) {
      nextTrack();
    }
  }, [currentTime]);

  const handleCloseBtn = () => {
    dispatch({
      type: "IS_PLAYER_FULLSCREEN",
      isPlayerFullScreen: false,
    });
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
  };
  const prevTrack = () => {
    if (selectedTrackIndex > 0) {
      dispatch({
        type: "SET_SELECTED_TRACK",
        selectedTrack: selectedPlaylistItems[selectedTrackIndex - 1],
      });
      dispatch({
        type: "SET_SELECTED_TRACK_INDEX",
        selectedTrackIndex: selectedTrackIndex - 1,
      });
    } else {
      dispatch({
        type: "SET_SELECTED_TRACK",
        selectedTrack: selectedPlaylistItems[selectedPlaylistItems?.length - 1],
      });
      dispatch({
        type: "SET_SELECTED_TRACK_INDEX",
        selectedTrackIndex: selectedPlaylistItems?.length - 1,
      });
    }
  };
  const nextTrack = () => {
    if (selectedPlaylistItems?.length - 1 > selectedTrackIndex) {
      dispatch({
        type: "SET_SELECTED_TRACK",
        selectedTrack: selectedPlaylistItems[selectedTrackIndex + 1],
      });
      dispatch({
        type: "SET_SELECTED_TRACK_INDEX",
        selectedTrackIndex: selectedTrackIndex + 1,
      });
    } else {
      dispatch({
        type: "SET_SELECTED_TRACK",
        selectedTrack: selectedPlaylistItems[0],
      });
      dispatch({
        type: "SET_SELECTED_TRACK_INDEX",
        selectedTrackIndex: 0,
      });
    }
  };

  useEffect(() => {
    setCurrentTime(0);
    setLoadedTime(0);
    if (likedTrack.find((t) => t?.videoId === selectedTrack?.videoId)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [selectedTrack]);
  const likeTrack = () => {
    if (!isliked) {
      const updatedTracks = [...likedTrack, selectedTrack];
      dispatch({
        type: "SET_LIKED_TRACK",
        likedTrack: updatedTracks,
      });
      localStorage.setItem("likedTracks", JSON.stringify(updatedTracks));
      setLiked(true);
    } else {
      const updatedTracks = likedTrack.filter(
        (t) => t?.videoId !== selectedTrack?.videoId
      );
      dispatch({
        type: "SET_LIKED_TRACK",
        likedTrack: updatedTracks,
      });
      localStorage.setItem("likedTracks", JSON.stringify(updatedTracks));
      setLiked(false);
    }
  };

  //time format function
  const formatTime = (seconds) => {
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    let timeString = "";

    if (hours > 0) {
      timeString += hours.toString().padStart(2, "0") + ":";
    }

    timeString +=
      minutes.toString().padStart(2, "0") +
      ":" +
      secs.toString().padStart(2, "0");
    return timeString;
  };
  //move uP next list
  const moveUpward = (e) => {
    //upNextActive ? setUpNextActive(false) : setUpNextActive(true);
    if (e.target.classList.contains("up_next")) {
      setUpNextActive(true);
    } else {
      setUpNextActive(false);
    }
  };

  return (
    <Container className="player2" onClick={moveUpward}>
      {selectedTrack && (
        <MusicPlayer
          selectedTrack={selectedTrack}
          audioLink = {downloadLink}
          handleProgress={handleProgress}
          handlePlayerReady={handlePlayerReady}
          handlePlayerBuffer={handlePlayerBuffer}
          handlePlayerBufferEnd={handlePlayerBufferEnd}
          player={player}
        />
      )}

      <div
        className={
          isPlayerFullScreen
            ? "mini_player"
            : isplaying
            ? "mini_player rotate active"
            : "mini_player active"
        }
        onClick={handlePlayerFullScreen}
      >
        <div
          className="song_poster"
          style={{ backgroundImage: `url(${selectedTrack?.thumbnail[0]?.url})` }}
        ></div>
        <span></span>
      </div>
      <div
        className={isPlayerFullScreen ? "full_player active" : "full_player"}
      >
        <div className="close_btn" onClick={handleCloseBtn}>
          <CloseBtn />
        </div>
        <div className="player_control">
          <div className="song_details">
            <div className="song_poster">
              {selectedTrack ? (
                <img src={selectedTrack?.thumbnail[0]?.url} alt="" />
              ) : (
                <playerControlIcons.musicNote />
              )}
            </div>
            <div className="marquee">
              <h2 className="song_title">
                 {selectedTrack && formatTitle(selectedTrack?.title)}
              </h2>
            </div>
            <p className="subtitle">{selectedTrack?.channelTitle}</p>
          </div>
          <div className="controls">
            <div className="timeline_seekbar">
              <CustomRangeInput
                minValue={0}
                maxValue={totalDuration(selectedTrack?.lengthText)}
                currentValue={currentTime}
                seekTo={player?.current?.seekTo}
                loadedTime={loadedTime}
                selectedTrack={selectedTrack}
              />
              <div className="times">
                <span className="cureent_time">
                  {selectedTrack ? formatTime(currentTime) : "00:00"}
                </span>
                <span className="total_time">
                  {selectedTrack
                    ? formatTime(totalDuration(selectedTrack?.lengthText))
                    : "00:00"}
                </span>
              </div>
            </div>
            <div className="control_btns">
              <div className="left">
                {isliked ? (
                  <playerControlIcons.liked
                    onClick={likeTrack}
                    style={{ color: "red" }}
                  />
                ) : (
                  <playerControlIcons.like onClick={likeTrack} />
                )}
              </div>
              <div className="middle">
                <playerControlIcons.prev
                  onClick={prevTrack}
                  style={{ fontSize: "2.5rem" }}
                />
                <div className="play_pause_load">
                  {(!isPlayerReady && isBuffering) && <Loading />}

                  {isplaying ? (
                    <playerControlIcons.pause2
                      onClick={handlePlayPause}
                      style={{
                        fontSize: "3.5rem",
                        position: "relative",
                        zIndex: "9",
                      }}
                    />
                  ) : (
                    <playerControlIcons.play2
                      onClick={handlePlayPause}
                      style={{
                        fontSize: "3.5rem",
                        position: "relative",
                        zIndex: "9",
                      }}
                    />
                  )}
                </div>
                <playerControlIcons.next
                  onClick={nextTrack}
                  style={{ fontSize: "2.5rem" }}
                />
              </div>
              <div className="right">
                <playerControlIcons.download onClick={handleDownloadSong} />
              </div>
            </div>
          </div>
        </div>
        <div className={upNextActive ? "up_next active" : "up_next"}>
          <h3>Up Next</h3>
          <div className="songs_list">
            {loading && <Loader />}
            {selectedPlaylistItems &&
              selectedPlaylistItems.map((item, index) => {
                return <TrackCard track={item} key={index} />;
              })}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Player2;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const marquee = keyframes`
    0%   { transform: translate(100%, 0); }
    100% { transform: translate(-100%, 0); }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  user-select: none;
  .mini_player {
    display: none;
    position: fixed;
    right: 3rem;
    bottom: 3rem;
    padding: 1rem;
    border-radius: 50%;
    aspect-ratio: 1;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.active {
      display: flex;
    }
    .song_poster {
      background-size: cover;
      border-radius: 50%;
      height: 5rem;
      width: 5rem;
    }
    overflow: hidden;
    z-index: 99;
    &::after {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, #000, transparent);
      bottom: 0;
    }
    &.rotate {
      animation: ${rotate} 5s linear infinite;
    }
  }
  .full_player {
    display: none;
    background: #333;
    height: 100vh;
    width: 100vw;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    @media screen and (max-width: 1024px) {
      .up_next {
        position: absolute;
        bottom: 70px;
        left: 0px;
        right: 0px;
        height: 40%;
        transform: translateY(100%);
        backdrop-filter: blur(10px);
        &.active {
          transition: ease 1s;
          transform: translateY(0);
          bottom: 0;
          background: #1c1c1c5c;
        }
      }
      .player_control {
        flex: 1 !important;
        margin: 5rem 0 !important;
        .song_details {
          .song_poster {
            width: 75% !important;
          }
          .song_title {
            margin-top: 2rem !important;
          }
        }
        .controls .timeline_seekbar {
          margin: 2rem 0;
        }
      }
    }
    &.active {
      display: flex;
    }
    .close_btn {
      display: block;
      position: absolute;
      top: 1rem;
      left: 1rem;
    }
    .player_control,
    .up_next {
      flex: 0.5;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
    }
    .player_control {
      justify-content: space-around;
      margin-top: 2rem;
      .song_details {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        .song_poster {
          height: auto;
          width: 70%;
          max-width: 50%;
          background: #aaa;
          display: flex;
          aspect-ratio: 1;
          justify-content: center;
          align-items: center;
          border-radius: 0.75rem;
          overflow: hidden;
          svg {
            width: 100%;
            height: 100%;
          }
          img {
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .marquee {
          overflow: hidden;
          box-sizing: border-box;
          .song_title {
            margin-top: 1.5rem;
            font-size: 2rem;
            margin-bottom: 0.25rem;
            white-space: nowrap;
            animation: ${marquee} 15s linear infinite;
            animation-delay: 2s;
          }
        }
      }
      .controls {
        width: 90%;
        margin: 1.5rem 0;
        .times {
          justify-content: space-between;
          display: flex;
          font-size: 0.85rem;
          margin-top: 1rem;
        }
        .control_btns {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1rem 0;
          svg {
            cursor: pointer;
          }
          .middle {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1.5rem;
            .play_pause_load {
              position: relative;
            }
          }
        }
      }
    }
    .up_next {
      justify-content: flex-start;
      padding: 1rem 0;
      z-index: 99;
      h3 {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        &::after {
          margin-top: 0.5rem;
          content: "";
          width: 65%;
          height: 3px;
          background: white;
          border-radius: 9999px;
        }
      }
      .songs_list {
        display: flex;
        flex-direction: column;
        gap: 1rem;
        height: 100%;
        overflow-y: scroll;
        padding: 1rem 0;
        width: 95%;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;
