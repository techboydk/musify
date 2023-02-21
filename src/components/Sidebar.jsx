import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import InfoIcon from "@mui/icons-material/Info";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [isActive, setActive] = useState(false);

  const showHideSidebar = (e) => {
    e.preventDefault();
    if (e.currentTarget.classList.contains("sidebar")) {
      e.target.classList.contains("sidebar")
        ? isActive
          ? setActive(false)
          : setActive(true)
        : setActive(true);
    } else {
      isActive ? setActive(true) : setActive(false);
    }
  };

  return (
    <Container
      className={isActive ? "sidebar active" : "sidebar"}
      onClick={showHideSidebar}
    >
      <div className="menu_btn">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={isActive ? "sidebar_items active" : "sidebar_items"}>
        <div className="top">
          <div className="logo">
            <strong>Musify</strong>
            <h6>v1.0.0</h6>
          </div>
          <div className="links">
            <NavLink className="link" to="/">
              <HomeIcon />
              <strong>home</strong>
            </NavLink>
            <NavLink className="link" to="/mymusic">
              <LibraryMusicIcon />
              <strong>my music</strong>
            </NavLink>
            <NavLink className="link" to="/downloads">
              <DownloadDoneIcon />
              <strong>downloads</strong>
            </NavLink>
            <NavLink className="link" to="/playlists">
              <PlaylistPlayIcon />
              <strong>playlists</strong>
            </NavLink>
            <NavLink className="link" to="/settings">
              <SettingsSuggestIcon />
              <strong>settings</strong>
            </NavLink>
            <NavLink className="link" to="/about">
              <InfoIcon />
              <strong>about</strong>
            </NavLink>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  position: fixed;
  margin: 1rem;
  width: fit-content;
  z-index: 99;
  &.active {
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .menu_btn {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.15rem;
    width: fit-content;
    cursor: pointer;
    span {
      width: 25px;
      height: 3px;
      background: #fff;
      border-radius: 0.15rem;
      &:nth-child(3) {
        height: 7px;
      }
    }
  }
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 20vh;
    width: 100%;
    background: #2b2b2b;
    strong {
      font-size: 3rem;
    }
    p {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }
  }
  .sidebar_items {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: fixed;
    width: 60%;
    max-width: 250px;
    height: 100vh;
    background: #222;
    left: 0;
    top: 0;
    transition: 0.3s ease-in-out;
    transform: translateX(-100%);
    z-index: 0;
    overflow: hidden;
    &.active {
      transform: translateX(0);
    }
    .links {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 2rem;
      padding: 2rem;
      .link {
        display: flex;
        align-items: center;
        gap: 1rem;
        text-transform: capitalize;
        color: #fff;
        &.active {
          color: rgba(43, 247, 172, 1) !important;
        }
      }
    }
  }
`;
