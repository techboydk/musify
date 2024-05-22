import React, { useEffect } from "react";
import styled from "styled-components";
import { useStateProvider } from "../utils/StateProvider";
import TrackCard from "./TrackCard";
import { getPlaylistItemsFromId } from "../utils/api";
import CloseBtn from "./CloseBtn";
import Loader from "../shared/Loader";
import { playerControlIcons } from "../utils/constant";

const PlayingPlaylist = () => {
  const [
    {
      isMobile,
      selectedPlaylist,
      selectedPlaylistItems,
      loading,
    },
    dispatch,
  ] = useStateProvider();

  useEffect(() => {
    if (selectedPlaylist?.id) {
      dispatch({
        type: "SET_SELECTED_PLAYLIST_ITEMS",
        selectedPlaylistItems: [],
      });
      dispatch({
        type: "SET_LOADING",
        loading: true,
      });
      getPlaylistItemsFromId(selectedPlaylist?.id).then(async (data) => {
        dispatch({
          type: "SET_SELECTED_PLAYLIST_ITEMS",
          selectedPlaylistItems: data,
        });
        dispatch({
          type: "SET_LOADING",
          loading: false,
        });
      });
    }
  }, [selectedPlaylist, dispatch]);

  const handleCloseBtn = () => {
    dispatch({
      type: "IS_PLAYLIST_SELECTED",
      isPlaylistSelected: false,
    });
  };

  return (
    <Container className={isMobile && "mobile"}>
      <div className="close_btn" onClick={handleCloseBtn}>
        <CloseBtn />
      </div>
      <div className="playlist_details">
        <div className="img">
          {selectedPlaylist?.thumbnail?.url ? (
            <img src={selectedPlaylist?.thumbnail?.url} alt="" />
          ) : (
            <playerControlIcons.musicNote />
          )}
        </div>
        <div className="text">
          {selectedPlaylist?.title ? (
            <h2 className="title">
              {selectedPlaylist?.title?.split(" ").slice(0, 2).join(" ")}
            </h2>
          ) : (
            <h2 className="title">{"Your favroute"}</h2>
          )}
          {selectedPlaylist?.channel?.name ? (
            <p className="subtitle">{selectedPlaylist?.channel?.name}</p>
          ) : (
            <p className="subtitle">{selectedPlaylistItems.length} songs</p>
          )}
          <div className="buttons">button</div>
        </div>
      </div>
      <div className="playlist_items">
        {loading && <Loader />}
        {selectedPlaylistItems &&
          selectedPlaylistItems.map((item, index) => {
            return <TrackCard track={item} key={index} />;
          })}
      </div>
    </Container>
  );
};

export default PlayingPlaylist;
const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  background-color: #2b2b2b;
  width: 350px;
  z-index: 10;
  display: flex;
  flex: 0.3 1 0%;
  flex-direction: column;
  padding-bottom: 2rem;
  height: 100%;
  .close_btn {
    display: flex;
    position: fixed;
    top: 1rem;
    right: 300px;
    z-index: 9;
  }
  .playlist_details {
    display: flex;
    -webkit-box-align: center;
    padding: 4rem 1rem 1.5rem;
    position: sticky;
    top: 0px;
    right: 0px;
    gap: 1rem;
    border-bottom: 1px solid rgb(82, 82, 82);
    .img {
      overflow: hidden;
      aspect-ratio: 1;
      border-radius: 0.75rem;
      max-width: 8rem;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      svg {
        width: 100%;
        height: 100%;
        background: #ccc;
      }
    }
    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      text-transform: capitalize;
      white-space: nowrap;
      overflow: hidden;
      gap: 0.25rem;
      .title {
        max-width: 15rem;
        font-size: 1.3rem;
      }
      .subtitle {
        font-size: 0.9rem;
      }
    }
  }
  .playlist_items {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow-y: auto;
    height: calc(100vh - 280px);
    padding: 1rem 0.5rem 2rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  &.mobile {
    position: fixed;
    top: 0;
    right: 0;
    background-color: #2b2b2b;
    width: 100%;
    z-index: 9;
    .close_btn {
      display: flex;
      position: fixed;
      top: 1rem;
      left: 1rem;
      z-index: 9;
    }
    .playlist_items {
      height: calc(100vh - 280px);
    }
  }
`;
