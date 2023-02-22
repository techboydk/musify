import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@mui/icons-material/Home";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import MiniPlayer from "../components/MiniPlayer";
import { Context } from "../context/contextApi";

const BottomNav = () => {
  const {isPlaying} = useContext(Context);
  return (
    <Container>
      {isPlaying && <MiniPlayer/>}
      <div className="nav_links">
        <NavLink to="/" className="link">
          <HomeIcon />
          <strong>Home</strong>
        </NavLink>
        <NavLink to="/topcharts" className="link">
          <TrendingUpIcon />
          <strong>Trendings</strong>
        </NavLink>
        <NavLink to="/youtube" className="link">
          <YouTubeIcon />
          <strong>youtube</strong>
        </NavLink>
        <NavLink to="/library" className="link">
          <LibraryMusicIcon />
          <strong>library</strong>
        </NavLink>
      </div>
    </Container>
  );
};

export default BottomNav;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  background-color: #000;
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 999;
  .nav_links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    width: 100%;
    .link {
      display: flex;
      align-items: center;
      border-radius: 5rem;
      padding: 0.75rem 0;
      gap: 0.5rem;
      color: #fff;
      text-transform: capitalize;
      strong {
        width: 0;
        overflow: hidden;
      }
      &.active {
        transition: 0.3s padding ease-in-out;
        padding: 0.75rem;
        background-color: #7dffe140;
        color: #00ffc4;
        strong {
          width: 100%;
        }
      }
    }
  }
`;
