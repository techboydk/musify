import React, { useContext } from "react";
import styled from "styled-components";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import AudiotrackIcon from "@mui/icons-material/Audiotrack";
import PlaylistPlayIcon from "@mui/icons-material/PlaylistPlay";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import { Context } from "../context/contextApi";

const SideMenu = () => {
  const { mobileMenu, setMobileMenu } = useContext(Context);

  const showSideMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <Container>
      <div className="menu_btn">
        <MenuOpenIcon onClick={showSideMenu} />
      </div>
      <div
        className={mobileMenu ? "blur active" : "blur"}
        onClick={showSideMenu}
      ></div>
      <div className={mobileMenu ? "sidebar active" : "sidebar"}>
        <div className="top">
          <div className="logo">
            <div className="logo_con">
              <h2>Musify</h2>
              <span>v1.0.0</span>
            </div>
          </div>
          <div className="links">
            <NavLink to="/" className="link">
              <HomeIcon />
              <strong>Home</strong>
            </NavLink>
            <NavLink to="/mymusic" className="link">
              <AudiotrackIcon />
              <strong>my music</strong>
            </NavLink>
            <NavLink to="/downloads" className="link">
              <DownloadDoneIcon />
              <strong>downloads</strong>
            </NavLink>
            <NavLink to="/playlists" className="link">
              <PlaylistPlayIcon />
              <strong>playlists</strong>
            </NavLink>
            <NavLink to="/settings" className="link">
              <SettingsIcon />
              <strong>settings</strong>
            </NavLink>
            <NavLink to="/about" className="link">
              <InfoIcon />
              <strong>about</strong>
            </NavLink>
          </div>
        </div>
        <div className="bottom">mad by dipesh yadav</div>
      </div>
    </Container>
  );
};

export default SideMenu;

const Container = styled.div`
  display: flex;
  margin: 1rem;
  z-index: 9999;
  position: fixed;
  &.active {
    width: 100%;
    height: 100vh;
  }

  .menu_btn {
  }
  .blur {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #00000094;
    &.active {
      display: flex;
    }
  }
  .sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 60%;
    height: 100vh;
    background-color: #111;
    transform: translateX(-100%);
    transition: 0.3s transform ease-in;
    &.active {
      transform: translateX(0);
    }
    .top {
      display: flex;
      flex-direction: column;
      width: 100%;
      .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 25vh;
        background-color: #222;
        background: linear-gradient(#3a3a3a, transparent);
        h2 {
          font-size: 2.5rem;
          color: transparent;
          -webkit-text-stroke: 1px #00ffc4;
        }
        span {
          display: flex;
          justify-content: flex-end;
          font-size: 0.95rem;
          margin-top: 0.25rem;
          color: #bbb;
        }
      }
      .links {
        display: flex;
        flex-direction: column;
        margin: 2rem 2rem;
        gap: 1rem;
        .link {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 0.5rem;
          color: #ccc;
          &.active {
            color: #00ffc4;
          }
        }
      }
    }
    .bottom {
      margin-bottom: 1rem;
      text-transform: capitalize;
      font-size: 0.85rem;
      color: #bbb;
    }
  }
`;
